import re
from os import listdir
from os.path import isfile
from pathlib import Path


IMPORT_REGEX_PATTERN: re.Pattern[str] = re.compile(
    r'(^const (?P<namespace>\w+) = require\(.+\);$)', re.I | re.M)

CONTEXT_MODIFIER_INTERMEDIATE_FILES_PATH = "./build-intermediate/Context Modifier"
INPUT_MODIFIER_INTERMEDIATE_FILES_PATH = "./build-intermediate/Input Modifier"
OUTPUT_MODIFIER_INTERMEDIATE_FILES_PATH = "./build-intermediate/Output Modifier"
SHARED_LIBRARY_INTERMEDIATE_FILES_PATH = "./build-intermediate/Shared Library"

BUILD_PATH = "./build"
CONTEXT_MODIFIER_BUILD_FILE_NAME = "contextModifier.js"
INPUT_MODIFIER_BUILD_FILE_NAME = "inputModifier.js"
OUTPUT_MODIFIER_BUILD_FILE_NAME = "outputModifier.js"
SHARED_LIBRARY_BUILD_FILE_NAME = "sharedLibrary.js"


def stripBeginning(fileContent: str) -> str:
    lines: list[str] = fileContent.splitlines()
    return "\n".join(lines[2:])


def removeExports(fileContent: str) -> str:
    lines: list[str] = fileContent.splitlines()
    for line in lines.copy():
        if re.search(r"exports\.(\w+) = (?:void 0|\1)|exports.default = \w+", line) is not None:
            lines.remove(line)
    return "\n".join(lines)


def removeImportNamespacesAndImports(fileContent: str) -> str:
    namespaces: list[str] = []
    match: re.Match | None = re.search(IMPORT_REGEX_PATTERN, fileContent)
    while match is not None:
        fileContent = fileContent[:match.start()] + fileContent[match.end()+1:]
        namespaces.append(match.group("namespace"))
        match = re.search(IMPORT_REGEX_PATTERN, fileContent)

    fileContent = fileContent.replace("exports.", "")
    for namespace in namespaces:
        fileContent = fileContent.replace(
            f"{namespace}.default", namespace[:-2])
        fileContent = fileContent.replace(namespace + ".", "")

    return fileContent


def prepareFileContents(fileContents: str) -> str:
    return \
        removeImportNamespacesAndImports(
            removeExports(
                stripBeginning(fileContents)
            )
        )


def combineFilesInPath(inPath: str, outFileName: str) -> None:
    with open(f"{BUILD_PATH}/{outFileName}", "w") as outFile:
        for name in listdir(inPath):
            if isfile(f"{inPath}/{name}"):
                with open(f"{inPath}/{name}", "r") as inFile:
                    outFile.write(prepareFileContents(inFile.read())+"\n\n")


def main():
    buildDirPath: Path = Path(BUILD_PATH)
    if not buildDirPath.exists():
        buildDirPath.mkdir()

    combineFilesInPath(
        CONTEXT_MODIFIER_INTERMEDIATE_FILES_PATH,
        CONTEXT_MODIFIER_BUILD_FILE_NAME
    )
    combineFilesInPath(
        INPUT_MODIFIER_INTERMEDIATE_FILES_PATH,
        INPUT_MODIFIER_BUILD_FILE_NAME
    )
    combineFilesInPath(
        OUTPUT_MODIFIER_INTERMEDIATE_FILES_PATH,
        OUTPUT_MODIFIER_BUILD_FILE_NAME
    )
    combineFilesInPath(
        SHARED_LIBRARY_INTERMEDIATE_FILES_PATH,
        SHARED_LIBRARY_BUILD_FILE_NAME
    )

    for modifierFileName in (CONTEXT_MODIFIER_BUILD_FILE_NAME, INPUT_MODIFIER_BUILD_FILE_NAME, OUTPUT_MODIFIER_BUILD_FILE_NAME):
        with open(f"{BUILD_PATH}/{modifierFileName}", "a") as modifierFile:
            modifierFile.write("modifier(text);")


if __name__ == "__main__":
    main()
