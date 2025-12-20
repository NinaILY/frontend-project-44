#!/usr/bin/env node

import { answerUser } from '../src/index.js'
import isPrimeNum from '../games/primenum.js'

answerUser(isPrimeNum, `Answer "yes" if the number is even, otherwise answer "no".`)
