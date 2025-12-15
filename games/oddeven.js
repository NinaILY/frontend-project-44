import { randomNumber } from '../games/randomnum.js'

export default () => {
  const num = randomNumber()

  return {
    question: String(num),
    answer: num % 2 === 0 ? 'yes' : 'no',
  }
}
