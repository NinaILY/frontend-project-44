import readlineSync from 'readline-sync'
import userGreeting from './cli.js'

const answerUser = (makeRound, rulesText) => {
  console.log('Welcome to the Brain Games!')

  const name = userGreeting()

  console.log(rulesText)

  let correctAnswerCount = 0

  while (correctAnswerCount < 3) {
    const { question, answer } = makeRound()

    console.log(`Question: ${question}`)

    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer === answer) {
      correctAnswerCount += 1

      console.log('Correct!')
    }
    else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`)
      console.log(`Let's try again, ${name}!`)
      correctAnswerCount = 0
    }
  }

  console.log(`Congratulations, ${name}!`)
}

export { answerUser }
