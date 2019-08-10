const m = require('./index')

test('1h 20 min should be equivalent to 4800 seconds', () => {
    expect(m.durationToSeconds('1h 20 min')).toBe(4800)
})
