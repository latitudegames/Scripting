const world = { 
    'orc': 'Orcs have been mistreated for many years in the kingdom of Larion. Treated as second class citizens they are often denied jobs and treated as criminals. There is a movement called the Human Orc Friendship Association (HOFA) that seeks equality between humans and orcs.', 
    'hofa': 'HOFA (the Human Orc Friendship Association) is a group dedicated to seeking equality between orcs and humans',
    'human': 'Many humans hate orcs, but there are also a large number of humans who believe orcs have been greatly mistreated and deserve equal rights.',
    'king': 'The king of Larion doesn\'t hate orcs necessarily, but he\'s hesitant to upset the balance of the kingdom by increasing their rights.',
    'queen': 'The queen feels fondness towards orcs and has a soft place in her heart for them.',
    'zeradell': 'Zeradell is the capital of Lario and is where the King and Queen live.'
}

const worldContext = (relevant) => {
    const lower = relevant.toLowerCase()
    let context = ''
    
    for(key in world){
        if(lower.includes(key)){
            context = context + world[key] + '\n'
        }
    }
    return context
}

const modifier = () => {
    
    const lastOutput = history?.length > 0 ? history[history.length-1] : ''
    const context = worldContext(lastOutput + '\n' + text)
