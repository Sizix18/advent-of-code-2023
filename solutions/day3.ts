import { parseInputFileTo2DStringArray } from '../libraries/inputParser'

const symbolRegex = new RegExp(/[^\.\d\n]/)
const starRegex = new RegExp(/\*/)

function SumOfValidPartNumbers() {
  const input = parseInputFileTo2DStringArray('./inputs/day3.txt')
  let total = 0
  let symbolFound = false
  let number = ''
  for (let row = 0; row < input.length; row++) {
    for (let column = 0; column < input[row].length; column++) {
      if (input[row][column].match(/[0-9]/)) {
        number += input[row][column]
        if (symbolFound === false && IsAdjacentSymbol(input, row, column)) {
          symbolFound = true
        }
        if (
          (input[row][column + 1] === undefined ||
            input[row][column + 1].match(/[^\d\n]/)) &&
          symbolFound
        ) {
          total += parseInt(number)
          number = ''
          symbolFound = false
        }
      } else {
        number = ''
        symbolFound = false
      }
    }
  }
  return total
}

function IsAdjacentSymbol(input: string[][], row: number, column: number) {
  const rowStart = Math.max(0, row - 1)
  const columnStart = Math.max(0, column - 1)
  const rowEnd = Math.min(row + 2, input.length)
  const columnEnd = Math.min(column + 2, input[row].length)
  for (let i = rowStart; i < rowEnd; i++) {
    for (let j = columnStart; j < columnEnd; j++) {
      if (input[i][j].match(symbolRegex)) {
        return true
      }
    }
  }
  return false
}

function FindAdjacentStarCoordinates(
  input: string[][],
  row: number,
  column: number
) {
  const rowStart = Math.max(0, row - 1)
  const columnStart = Math.max(0, column - 1)
  const rowEnd = Math.min(row + 2, input.length)
  const columnEnd = Math.min(column + 2, input[row].length)
  for (let i = rowStart; i < rowEnd; i++) {
    for (let j = columnStart; j < columnEnd; j++) {
      if (input[i][j].match(starRegex)) {
        return [i, j]
      }
    }
  }
  return null
}

function SumOfValidPartPairs() {
  const input = parseInputFileTo2DStringArray('./inputs/day3.txt')
  let total = 0
  const starSet = new Map<string, number[]>()
  const starsFound = new Set<string>()
  let number = ''
  for (let row = 0; row < input.length; row++) {
    for (let column = 0; column < input[row].length; column++) {
      if (input[row][column].match(/[0-9]/)) {
        number += input[row][column]
        const starCoordinates = FindAdjacentStarCoordinates(input, row, column)
        if (starCoordinates) {
          starsFound.add(starCoordinates.toString())
        }
        if (
          (input[row][column + 1] === undefined ||
            input[row][column + 1].match(/[^\d\n]/)) &&
          starsFound.size > 0
        ) {
          for (const starCoord of starsFound) {
            let existing = starSet.get(starCoord)
            if (existing) {
              existing.push(parseInt(number))
            } else {
              existing = [parseInt(number)]
            }
            starSet.set(starCoord, existing)
          }
          number = ''
          starsFound.clear()
        }
      } else {
        number = ''
        starsFound.clear()
      }
    }
  }
  for (const [_key, values] of starSet.entries()) {
    if (values.length === 2) {
      total += values[0] * values[1]
    }
  }
  return total
}

console.log(SumOfValidPartNumbers())
console.log(SumOfValidPartPairs())
