#!/usr/bin/env node

import { answerUser } from '../src/index.js'
import checkEvenNumb from '../games/oddeven.js'

answerUser(checkEvenNumb, `Answer "yes" if the number is even, otherwise answer "no".`)
