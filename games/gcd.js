import { randomNumber } from '../games/randomnum.js'

export default () => {
  let firstNum = randomNumber()
  let secondNum = randomNumber()
  const firstDivider = firstNum
  const secondDivider = secondNum

  while (secondNum !== 0) {
    const numGCD = firstNum % secondNum
    firstNum = secondNum
    secondNum = numGCD
  }

  return {
    question: `${firstDivider} ${secondDivider}`,
    answer: String(firstNum),
  }
}
