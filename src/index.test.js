import durationToSeconds from './index'

test('1h 20 min should be equivalent to 4800 seconds', () => {
    expect(durationToSeconds('1h 20 min')).toBe(4800)
})
