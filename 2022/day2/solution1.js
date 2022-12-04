const play = (round) => {
    const [opp, me] = round

    const oppOptions = ['A', 'B', 'C']
    const meOptions = ['X', 'Y', 'Z']

    const oppIndex = oppOptions.indexOf(opp)
    const meIndex = meOptions.indexOf(me)

    // A - 1 - rock
    // B - 2 - paper
    // C - 3 - scissors

    // X - 1 - rock
    // Y - 2 - paper
    // Z - 3 - scissors

    const draw = oppIndex === meIndex

    const winIndex = Math.abs(oppIndex - meIndex) > 1 
        ? Math.min(oppIndex, meIndex) 
        : Math.max(oppIndex, meIndex)

        
    const win = winIndex === meIndex && !draw

    const bonus = win ? 6 : draw ? 3 : 0
    
    return res = meIndex + 1 + bonus
}

const inputArr = input.split('\n').map((line) => line.split(' '))

const res = inputArr.map(x => play(x)).reduce((a,b) => a + b, 0)

console.log(res)

// console.log("test");