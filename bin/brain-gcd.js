#!/usr/bin/env node

import { answerUser } from '../src/index.js'
import searchGCD from '../games/gcd.js'

answerUser(searchGCD, `Find the greatest common divisor of given numbers.`)
