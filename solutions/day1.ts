import { parseInputFileToStringArray } from '../libraries/inputParser'

function PartOneParseNumbers(input: string[]): number {
  let sum = 0
  const regex = new RegExp(/[^0-9.]/g)
  for (const string of input) {
    const value = string.replaceAll(regex, '')
    if (value) {
      const num = parseInt(value[0] + value[value.length - 1])
      sum += num
    }
  }
  return sum
}

function replaceStringNumbersWithNumbers(input: string) {
  input = input.replaceAll('nine', 'n9e')
  input = input.replaceAll('eight', 'e8t')
  input = input.replaceAll('seven', '7n')
  input = input.replaceAll('six', '6')
  input = input.replaceAll('five', '5e')
  input = input.replaceAll('four', '4r')
  input = input.replaceAll('three', '3e')
  input = input.replaceAll('two', 't2o')
  input = input.replaceAll('one', '1e')
  return input
}

function PartTwoParseNumbers(input: string[]): number {
  let sum = 0
  const regex = new RegExp(/[^0-9.]/g)
  for (let string of input) {
    string = replaceStringNumbersWithNumbers(string)
    const numbers = string.replaceAll(regex, '')
    if (numbers) {
      const num = parseInt(numbers[0] + numbers[numbers.length - 1])
      sum += num
    }
  }
  return sum
}

function CalculateNumericalSum() {
  let input = []
  const sum = 0
  input = parseInputFileToStringArray('../inputs/day1.txt')
  const partOneSum = PartOneParseNumbers(input)
  console.log(`Part 1 Sum: ${partOneSum}`)
  const partTwoSum = PartTwoParseNumbers(input)
  console.log(`Part 2 Sum: ${partTwoSum}`)

  return sum
}

console.log(CalculateNumericalSum())
