import fs from 'fs'

export const parseInputFileToStringArray = (fileLocation: string) => {
  const input = fs.readFileSync(fileLocation, { encoding: 'utf-8' })
  return input.split('\n')
}

export const parseInputFileTo2DStringArray = (fileLocation: string) => {
  const stringArray: string[][] = []
  const input = fs.readFileSync(fileLocation, { encoding: 'utf-8' })
  const inputLines = input.split(/\r?\n/)
  for (const line of inputLines) {
    if (line.length > 0) {
      stringArray.push(line.split(''))
    }
  }
  return stringArray
}
