class BitOperations {
    constructor() {}

    addBits(bits1, bits2) {
            let result = '';
            if (this.isBitString(bits1) && this.isBitString(bits2)) {
                const longestLen = Math.max(bits1.length, bits2.length);
                const bitsOne =
                    this.signExtend(bits1, longestLen, bits1.charAt(bits1.length - 1));
                const bitsTwo =
                    this.signExtend(bits2, longestLen, bits2.charAt(bits2.length - 1));

                var sum = -1;
                var carry = -1;
                for (var x = 0; x < longestLen; x++) {
                    var { s, c } = addBits(parseInt(bitsOne.charAt(x)), parseInt(bitsTwo.charAt(x)));
                    sum = s;
                    carry = c;

                }
            } else {
                result = 'undef';
            }
            return result;
        }
        /**
         * Adds 1 bits
         * @param {Number} bit1
         * @param {Number} bit2
         * returns {sum, carry}. Contains sum/carry or {-1,-1} if params are not bits
         */
    addBits(bit1, bit2) {
        var sum = -1;
        var carry = -1;

        if (bit1 + bit2 === 0) { // 0 and 0
            sum = 0;
            carry = 0;
        }
        if (bit1 + bit2 === 1) { // 0/1 or 1/0
            sum = 1;
            carry = 0;
        }
        if (bit1 + bit2 === 2) { // 1 & 1
            sum = 1;
            carry = 1;
        }
        return {
            sum: sum,
            carry: carry
        }
    }

    /**
     * Sign extends bitString with pad to length 'length
     * @param {String} bitString
     * @param {Number} length
     * @param {char} pad
     * returns sign extended bitString or 'undef' is bitString is not a bit
     *     string
     */
    signExtend(bitString, length, pad) {
        var result = '';
        var padlen = length - bitString.length;

        if (this.isBitString(bitString)) {
            for (var x = 0; x < padlen; x++) {
                result += pad;
            }
        } else {
            return 'undef';
        }
        return result + bitString;
    }

    /**
     * Determines if bitString is a bit string
     * @param {String} bitString
     * returns returns true if bitString is a bit string. Returns false
     *     otherwise
     */
    isBitString(bitString) {
        return /^[01]+$/.test(bitString);
    }

    /**
     * Inverts supplied bit string.
     * @param {String} bitString bit string to invert
     * returns invert of bitString or 'undef' if bitString is not a bit string
     */
    not(bitString) {
        let result = '';

        if (this.isBitString(bitString)) {
            for (var x = 0; x < bitString.length; x++) {
                if (bitString.charAt(x) === '0') {
                    result += '1';
                }
                if (bitString.charAt(x) === '1') {
                    result += '0';
                }
            }
        } else {
            result = 'undef';
        }
        return result;
    }
}

module.exports = BitOperations