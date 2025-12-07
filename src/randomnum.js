import readlineSync from 'readline-sync'
import userGreeting from '../src/cli.js'

const rules = () => {
  const max = 100
  const num = Math.floor(Math.random() * max)

  console.log(`Answer "yes" if the number is even, otherwise answer "no".`)
  console.log(`Questions: ${num}`)

  return num
}

const evenNum = (num) => {
  if (num % 2 === 0) {
    return 'yes'
  }
  else {
    return 'no'
  }
}

const answerUser = () => {
  const name = userGreeting()

  let correctAnswerCount = 0

  while (correctAnswerCount < 3) {
    const randNum = rules()
    const correctAnswer = evenNum(randNum)

    const answer = readlineSync.question('Your answer: ')

    if (answer === correctAnswer) {
      correctAnswerCount += 1

      console.log('Correct!')
    }
    else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`)
      console.log(`Let's try again, ${name}`)
      correctAnswerCount = 0
    }
  }

  return console.log(`Congratulations, ${name}!`)
}

export { evenNum, rules, answerUser }
