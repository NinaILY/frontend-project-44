#!/usr/bin/env node

import { answerUser } from '../src/index.js'
import countMathCalc from '../games/calculations.js'

answerUser(countMathCalc, `What is the result of the expression?`)
