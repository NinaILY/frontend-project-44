import { randomNumber } from '../games/randomnum.js'

export default () => {
  const randomNum = randomNumber()
  let answer

  if (randomNum === 2) {
    answer = 'yes'
  }
  else if (randomNum < 2 || randomNum % 2 === 0) {
    answer = 'no'
  }
  else {
    answer = 'yes'
    for (let i = 3; i <= Math.sqrt(randomNum); i += 2) {
      if (randomNum % i === 0) {
        answer = 'no'
        break
      }
    }
  }

  return {
    question: `${randomNum}`,
    answer: String(answer),
  }
}
