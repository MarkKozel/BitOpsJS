class BitOperations {
    constructor() {}

    addBitStrings(bits1, bits2) {
        let results = {
            "sum": '',
            "carryOut": ''
        };

        if (this.isBitString(bits1) && this.isBitString(bits2)) {
            const longestLen = Math.max(bits1.length, bits2.length);
            const bitsOne =
                this.signExtend(bits1, longestLen, bits1.charAt(bits1.length - 1));
            const bitsTwo =
                this.signExtend(bits2, longestLen, bits2.charAt(bits2.length - 1));
            // console.log("bitsOne: " + bitsOne);
            // console.log("bitsTwo: " + bitsTwo);
            var lastCarryOut = 0;

            for (var x = longestLen - 1; x >= 0; x--) {
                var b1 = parseInt(bitsOne.charAt(x));
                var b2 = parseInt(bitsTwo.charAt(x));
                var reply = this.addBits(b1, b2, lastCarryOut);
                results.sum = reply.sum + results.sum;
                lastCarryOut = parseInt(reply.carryOut);

                // console.log("reply.sum: " + reply.sum);
                // console.log("reply.carryOut: " + reply.carryOut);

            }
            results.carryOut = lastCarryOut;

        } else {
            results.sum = "undef";
            results.carryOut = "undef";
        }
        return results;
    }

    /**
     * Adds 1 bits
     * @param {Number} bit1 first bit to add
     * @param {Number} bit2 second bit to add
     * @param {Number} carryIn carry in bit (default to 0 if not supplied)
     * returns {sum, carryOut}. Contains sum/carryOut or {"undef","undef"} if params are not bits
     */
    addBits(bit1, bit2, carryIn = 0) {
        let results = {
            "sum": "undef",
            "carryOut": "undef"
        };

        switch (bit1 + bit2 + carryIn) {
            case 0:
                results.sum = 0;
                results.carryOut = 0;
                break;
            case 1:
                results.sum = 1;
                results.carryOut = 0;
                break;
            case 2:
                results.sum = 0;
                results.carryOut = 1;
                break;
            case 3:
                results.sum = 1;
                results.carryOut = 1;
                break;
            default:
                results.sum = "undef";
                results.carryOut = "undef";
        }
        return results;
    }

    /**
     * Sign extends bitString with pad to length 'length
     * @param {String} bitString
     * @param {Number} length
     * @param {char} pad
     * returns sign extended bitString or 'undef' is bitString is not a bit string
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
     * returns returns true if bitString is a bit string. Returns false otherwise
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