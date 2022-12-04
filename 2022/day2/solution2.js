const play = (round) => {
    const [opp, me] = round

    const oppOptions = ['A', 'B', 'C']
    const meOptions = ['X', 'Y', 'Z']

    const oppIndex = oppOptions.indexOf(opp)
    // const meIndex = meOptions.indexOf(me)

    // A - 1 - rock
    // B - 2 - paper
    // C - 3 - scissors

    // X - 1 - LOSE
    // Y - 2 - DRAW
    // Z - 3 - WIN

    // A Y 
    // B X
    // C Z

    const draw = me === 'Y' ? oppIndex : null

    // const winIndex = Math.abs(oppIndex - meIndex) > 1 
    //     ? Math.min(oppIndex, meIndex) 
    //     : Math.max(oppIndex, meIndex)

    const win = me === 'Z' ? oppIndex < 2 ? oppIndex + 1 : 0 : null
    const lose = me === 'X' ? oppIndex > 0 ? oppIndex - 1 : 2 : null
    
    
    const bonus = win !== null ? 6 : draw !== null ? 3 : 0
    
    const res = oppOptions.indexOf(oppOptions[draw] || oppOptions[win] || oppOptions[lose]) + 1 + bonus
    return res
}

const inputArr = input.split('\n').map((line) => line.split(' '))

const res = inputArr.map(x => play(x)).reduce((a,b) => a + b, 0)

console.log(res)
