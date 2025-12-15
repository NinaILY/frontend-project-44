import crypto from 'crypto'

const randomNumber = (max = 100, min = 0) => {
  return crypto.randomInt(min, max)
}

export { randomNumber }
