var BitOps = require('./BitOperations.js');
var bitOps;

beforeAll(() => {
    bitOps = new BitOps();
})

describe('Init Tests', () => {

    test('Test not(1010101)', () => {
        expect(bitOps.not('1010101')).toBe('0101010');
    });
});

describe('Not', () => {
    test('Test not(1)', () => {
        expect(bitOps.not('1')).toBe('0');
    });

    test('Test not(1101)', () => {
        expect(bitOps.not('1101')).toBe('0010');
    });

    test('Test not(2)', () => {
        expect(bitOps.not('2')).toBe('undef');
    });

    test('Test not(101r)', () => {
        expect(bitOps.not('2')).toBe('undef');
    });
});

describe('Sign Extend', () => {

    test('Test signExtend(1101, 8, 0)', () => {
        expect(bitOps.signExtend('1101', 8, '0')).toBe('00001101');
    });
});