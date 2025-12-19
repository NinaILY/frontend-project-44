import crypto from 'crypto'

const randomNumber = (min = 0, max = 100) => {
  return crypto.randomInt(min, max)
}

export { randomNumber }
