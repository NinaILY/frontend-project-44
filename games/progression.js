import { randomNumber } from '../games/randomnum.js'

export default () => {
  const arrayNum = []
  const start = randomNumber(1, 101)
  let step = randomNumber(1, 50)
  const randomLengthArray = randomNumber(5, 10)

  while (step === 0) {
    step = randomNumber()
  }

  for (let i = 0; i < randomLengthArray; i += 1) {
    arrayNum.push(numProgression(start, i, step))
  }

  const randomIndexArray = randomNumber(0, arrayNum.length)
  const answer = arrayNum[randomIndexArray]
  arrayNum[randomIndexArray] = '..'

  return {
    question: `${arrayNum.join(' ')}`,
    answer: String(answer),
  }
}

const numProgression = (start, index, step) => {
  const currentElement = start + index * step
  return currentElement
}
