import { parseInputFileToStringArray } from '../libraries/inputParser'
const RED_COUNT = 12
const GREEN_COUNT = 13
const BLUE_COUNT = 14

function CheckGameLegality() {
  let input = []
  input = parseInputFileToStringArray('../inputs/day2.txt')
  let partOnePassScore = 0
  let partTwoPassScore = 0
  for (const game of input) {
    if (game) {
      const data = game.split(':')
      const gameNumber = parseInt(data[0].split(' ')[1])
      const matches = data[1].split(';')
      let redMax = 0
      let blueMax = 0
      let greenMax = 0
      for (const match of matches) {
        const pulls = match.split(',')
        for (const pull of pulls) {
          const pairs = pull.split(' ')
          if (pairs[2] === 'red') {
            const count = parseInt(pairs[1])
            if (redMax < count) redMax = count
          } else if (pairs[2] === 'green') {
            const count = parseInt(pairs[1])
            if (greenMax < count) greenMax = count
          } else if (pairs[2] === 'blue') {
            const count = parseInt(pairs[1])
            if (blueMax < count) blueMax = count
          }
        }
      }
      if (
        redMax <= RED_COUNT &&
        greenMax <= GREEN_COUNT &&
        blueMax <= BLUE_COUNT
      ) {
        partOnePassScore += gameNumber
      }
      partTwoPassScore += redMax * greenMax * blueMax
    }
  }
  return [partOnePassScore, partTwoPassScore]
}

console.log(CheckGameLegality())
