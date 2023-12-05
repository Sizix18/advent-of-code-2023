import { parseInputFileToStringArray } from '../libraries/inputParser'

function CalculateScratcherWinnings() {
  const input = parseInputFileToStringArray('../inputs/day4.txt')
  let partOneTotal = 0
  const matchList = new Array<number>(input.length - 1).fill(1)

  input.forEach((game, index) => {
    if (game) {
      const [_, numbers] = game.split(': ')
      const [winningNumbers, playerNumbers] = numbers.split(' | ')
      const winningSet = new Set(
        winningNumbers.split(/\s+/).map((value) => parseInt(value))
      )
      let winnings = 0
      let matches = 0
      playerNumbers.split(/\s+/).forEach((num) => {
        if (winningSet.has(parseInt(num))) {
          matches++
          if (winnings === 0) {
            winnings = 1
          } else {
            winnings *= 2
          }
        }
      })
      if (matches > 0) {
        for (let i = 1; i <= matches; ++i) {
          matchList[index + i] += 1 * matchList[index]
        }
      }
      partOneTotal += winnings
    }
  })

  const partTwoTotal = matchList.reduce(
    (sum: number, currVal) => sum + currVal,
    0
  )
  return [partOneTotal, partTwoTotal]
}

console.log(CalculateScratcherWinnings())
