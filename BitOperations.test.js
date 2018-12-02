var BitOps = require('./BitOperations.js');
var bitOps;

beforeAll(() => {
    bitOps = new BitOps();
})

describe('Add Bits', () => {

    test('Test addBits(0,0)', () => {
        var result = bitOps.addBits(0, 0);
        expect(result).toHaveProperty("sum", 0);
        expect(result).toHaveProperty("carry", 0);
    });

    test('Test addBits(1,0)', () => {
        var result = bitOps.addBits(1, 0);
        expect(result).toHaveProperty("sum", 1);
        expect(result).toHaveProperty("carry", 0);
    });

    test('Test addBits(0,1)', () => {
        var result = bitOps.addBits(0, 1);
        expect(result).toHaveProperty("sum", 1);
        expect(result).toHaveProperty("carry", 0);
    });

    test('Test addBits(1,1)', () => {
        var result = bitOps.addBits(1, 1);
        expect(result).toHaveProperty("sum", 1);
        expect(result).toHaveProperty("carry", 1);
    });
});

describe('isBitString', () => {

    test('Test isBitString(1101)', () => {
        expect(bitOps.isBitString('1101')).toBeTruthy();
    });

    test('Test isBitString(110100001111)', () => {
        expect(bitOps.isBitString('110100001111')).toBeTruthy();
    });

    test('Test isBitString(1101400001111)', () => {
        expect(bitOps.isBitString('1101400001111')).toBeFalsy();
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
    test('Test signExtend(011101, 8, 0)', () => {
        expect(bitOps.signExtend('011101', 8, '0')).toBe('00011101');
    });
    test('Test signExtend(1101, 16, 1)', () => {
        expect(bitOps.signExtend('1101', 16, '1')).toBe('1111111111111101');
    });
});