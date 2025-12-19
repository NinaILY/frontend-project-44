#!/usr/bin/env node

import { answerUser } from '../src/index.js'
import arithmeticProgress from '../games/progression.js'

answerUser(arithmeticProgress, `What number is missing in the progression?`)
