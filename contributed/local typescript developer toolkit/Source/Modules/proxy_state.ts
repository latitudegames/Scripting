export const state: {
    //Used in modifiers other than Input
    in: string;
    ctxt: string;
    out: string;
    message:
        | string
        | { text: string; visibleTo: string[] }
        | { text: string; visibleTo: string[] }[];
    memory: { context: string; frontMemory: string; authorsNote: string };
} = {
    in: "",
    ctxt: "",
    out: "",
    message: "",
    memory: { context: "", frontMemory: "", authorsNote: "" },
};
