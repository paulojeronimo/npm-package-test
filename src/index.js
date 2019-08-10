#!/usr/bin/env node

import parse from 'parse-duration'
const durationToSeconds = time => parse(time) / 1000

export default durationToSeconds
