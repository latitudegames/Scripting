module.exports = async function({text}) {
    if(!state?.quests){
        state.quests = {current: 'kill a dragon'}
    }
    const completed = await utils.checkQuestCompleted({history, quest: state.quests.current, text})
    state.message = 'Completed your quest? ' + completed
    return {text}
}
