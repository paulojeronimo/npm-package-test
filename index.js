#!/usr/bin/env node

const parse=require('parse-duration')
exports.durationToSeconds = time => parse(time) / 1000
