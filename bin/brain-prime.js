#!/usr/bin/env node

import { answerUser } from '../src/index.js'
import isPrimeNum from '../games/primenum.js'

answerUser(isPrimeNum, `Answer "yes" if given number is prime. Otherwise answer "no".`)
