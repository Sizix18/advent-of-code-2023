import fs from 'fs'

export const parseInputFileToStringArray = (fileLocation: string) => {
  const input = fs.readFileSync(fileLocation, { encoding: 'utf-8' })
  return input.split('\n')
}
