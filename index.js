#!/usr/bin/env node

const parse=require('parse-duration')
exports.durationToSeconds = time => parse(time) / 1000
const duration='1h 20 min'
console.log(`${duration} is equivalent to ${exports.durationToSeconds(duration)} seconds`)
