/**
 * Jest test suite for Bit Logic
 */
var BitOps = require('../src/BitOperations.js');
var bitOps;

/**
 * Setup before starting tests
 */
beforeAll(() => {
    bitOps = new BitOps();
})

/**
 * Tests for NOT
 */
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

/**
 * Tests for AND
 */
describe('And', () => {
    test('Invalid Inputs', () => {
        expect(bitOps.and('2', '1')).toBe('undef');
        expect(bitOps.and('zdsdfg', '0')).toBe('undef');
        expect(bitOps.and('', '1010101')).toBe('undef');
    });

    test('Valid single bit Inputs', () => {
        expect(bitOps.and('0', '0')).toBe('0');
        expect(bitOps.and('0', '1')).toBe('0');
        expect(bitOps.and('1', '0')).toBe('0');
        expect(bitOps.and('1', '1')).toBe('1');
    });

    test('Valid bit stirngs Inputs', () => {
        expect(bitOps.and('0110', '1001')).toBe('0000');
        expect(bitOps.and('0010', '111')).toBe('0010');
        expect(bitOps.and('1010', '1110')).toBe('1010');
        expect(bitOps.and('10101010', '11111111')).toBe('10101010');
    });

});

/**
 * Tests for OR
 */
describe('Or', () => {
    test('Invalid Inputs', () => {
        expect(bitOps.or('2', '1')).toBe('undef');
        expect(bitOps.or('zdsdfg', '0')).toBe('undef');
        expect(bitOps.or('', '1010101')).toBe('undef');
    });

    test('Valid single bit Inputs', () => {
        expect(bitOps.or('0', '0')).toBe('0');
        expect(bitOps.or('0', '1')).toBe('1');
        expect(bitOps.or('1', '0')).toBe('1');
        expect(bitOps.or('1', '1')).toBe('1');
    });

    test('Valid bit stirngs Inputs', () => {
        expect(bitOps.or('0110', '1001')).toBe('1111');
        expect(bitOps.or('0010', '111')).toBe('0111');
        expect(bitOps.or('1010', '1110')).toBe('1110');
        expect(bitOps.or('10101010', '11111111')).toBe('11111111');
    });
});