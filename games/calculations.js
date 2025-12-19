import { randomNumber } from '../games/randomnum.js'

export default () => {
  const firstNum = randomNumber()
  const secondNum = randomNumber()
  const listCalc = ['+', '-', '*']
  const indexList = randomNumber(0, listCalc.length)
  const randomCalc = listCalc[indexList]
  let answer

  switch (randomCalc) {
    case '+':
      answer = firstNum + secondNum
      break

    case '-':
      answer = firstNum - secondNum
      break

    case '*':
      answer = firstNum * secondNum
      break
  }

  return {
    question: `${firstNum} ${randomCalc} ${secondNum}`,
    answer: String(answer),
  }
}
