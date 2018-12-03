var BitOps = require('../src/BitOperations.js');
var bitOps;

beforeAll(() => {
    bitOps = new BitOps();
})

describe('Add Bits', () => {

    test('Test addBits(0,0)', () => {
        var result = bitOps.addBits(0, 0);
        expect(result).toHaveProperty("sum", 0);
        expect(result).toHaveProperty("carryOut", 0);
    });

    test('Test addBits(1,0)', () => {
        var result = bitOps.addBits(1, 0);
        expect(result).toHaveProperty("sum", 1);
        expect(result).toHaveProperty("carryOut", 0);
    });

    test('Test addBits(0,1)', () => {
        var result = bitOps.addBits(0, 1);
        expect(result).toHaveProperty("sum", 1);
        expect(result).toHaveProperty("carryOut", 0);
    });

    test('Test addBits(1,1)', () => {
        var result = bitOps.addBits(1, 1);
        expect(result).toHaveProperty("sum", 0);
        expect(result).toHaveProperty("carryOut", 1);
    });

    test('Test addBits(1,1,0)', () => {
        var result = bitOps.addBits(1, 1, 0);
        expect(result).toHaveProperty("sum", 0);
        expect(result).toHaveProperty("carryOut", 1);
    });

    test('Test addBits(1,1,1)', () => {
        var result = bitOps.addBits(1, 1, 1);
        expect(result).toHaveProperty("sum", 1);
        expect(result).toHaveProperty("carryOut", 1);
    });

    test('Test addBits(1,0,0)', () => {
        var result = bitOps.addBits(1, 0, 0);
        expect(result).toHaveProperty("sum", 1);
        expect(result).toHaveProperty("carryOut", 0);
    });

    test('Test addBits(1,0,1)', () => {
        var result = bitOps.addBits(1, 0, 1);
        expect(result).toHaveProperty("sum", 0);
        expect(result).toHaveProperty("carryOut", 1);
    });

    test('Test addBits(0,1,0)', () => {
        var result = bitOps.addBits(0, 1, 0);
        expect(result).toHaveProperty("sum", 1);
        expect(result).toHaveProperty("carryOut", 0);
    });

    test('Test addBits(0,1,1)', () => {
        var result = bitOps.addBits(0, 1, 1);
        expect(result).toHaveProperty("sum", 0);
        expect(result).toHaveProperty("carryOut", 1);
    });

    test('Test addBits(0,0,0)', () => {
        var result = bitOps.addBits(0, 0, 0);
        expect(result).toHaveProperty("sum", 0);
        expect(result).toHaveProperty("carryOut", 0);
    });
});

describe('Add Bit Strings', () => {
    test('2 positive numbers / no Carry Out', () => {
        var result = bitOps.addBitStrings("001", "010");
        expect(result).toHaveProperty("sum", "011");
        expect(result).toHaveProperty("carryOut", 0);

        result = bitOps.addBitStrings("011", "011");
        expect(result).toHaveProperty("sum", "110");
        expect(result).toHaveProperty("carryOut", 0);

        result = bitOps.addBitStrings("101010", "010101");
        expect(result).toHaveProperty("sum", "111111");
        expect(result).toHaveProperty("carryOut", 0);
    });

    test('2 positive numbers / Carry Out', () => {
        var result = bitOps.addBitStrings("1", "1");
        expect(result).toHaveProperty("sum", "0");
        expect(result).toHaveProperty("carryOut", 1);

        result = bitOps.addBitStrings("011", "111");
        expect(result).toHaveProperty("sum", "010");
        expect(result).toHaveProperty("carryOut", 1);
    });

    test('2 negative (2`s Comp) numbers', () => {
        var result = bitOps.addBitStrings("11100", "11110");
        expect(result).toHaveProperty("sum", "11010");
        expect(result).toHaveProperty("carryOut", 1);
    });
    test('1 pos/1 neg (2`s Comp) numbers', () => {
        var result = bitOps.addBitStrings("01100", "11110");
        expect(result).toHaveProperty("sum", "01010");
        expect(result).toHaveProperty("carryOut", 1);
    });

    test('Bad bit strings', () => {
        var result = bitOps.addBitStrings("01200", "11110");
        expect(result).toHaveProperty("sum", "undef");
        expect(result).toHaveProperty("carryOut", "undef");

        result = bitOps.addBitStrings("01100", "1A110");
        expect(result).toHaveProperty("sum", "undef");
        expect(result).toHaveProperty("carryOut", "undef");

        result = bitOps.addBitStrings("", "11110");
        expect(result).toHaveProperty("sum", "undef");
        expect(result).toHaveProperty("carryOut", "undef");

        result = bitOps.addBitStrings("01100", "");
        expect(result).toHaveProperty("sum", "undef");
        expect(result).toHaveProperty("carryOut", "undef");
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

    test('Test signExtend(1100, 16, 1)', () => {
        expect(bitOps.signExtend('1100', 16, '1')).toBe('1111111111111100');
    });
});