/** 
 * Class containing bit arithmatic and logic operations
 */
class BitOperations {

    /**
     * Constructor
     * @param {Stirng} undef representation of undefined
     */
    constructor(undef = this.undef) {
        this.undef = "undef";
    };

    getUndef() {
        return this.undef;
    }

    /**
     * Adds 2 bit strings. Provides sum and carry out results
     * @param {String} bitString1 first bit string
     * @param {String} bitString2 second bit string
     */
    addBitStrings(bitString1, bitString2) {
        let results = {
            "sum": '',
            "carryOut": ''
        };

        if (this.isBitString(bitString1) && this.isBitString(bitString2)) {
            const longestLen = Math.max(bitString1.length, bitString2.length);
            const bitsOne =
                this.signExtend(bitString1, longestLen, bitString1.charAt(bitString1.length - 1));
            const bitsTwo =
                this.signExtend(bitString2, longestLen, bitString2.charAt(bitString2.length - 1));
            var lastCarryOut = 0;

            for (var x = longestLen - 1; x >= 0; x--) {
                var b1 = parseInt(bitsOne.charAt(x));
                var b2 = parseInt(bitsTwo.charAt(x));
                var reply = this.addBits(b1, b2, lastCarryOut);
                results.sum = reply.sum + results.sum;
                lastCarryOut = parseInt(reply.carryOut);

            }
            results.carryOut = lastCarryOut;

        } else {
            results.sum = this.undef;
            results.carryOut = this.undef;
        }
        return results;
    }

    /**
     * Adds 2 bits and a carry in
     * @param {Number} bit1 first bit to add
     * @param {Number} bit2 second bit to add
     * @param {Number} carryIn carry in bit (default to 0 if not supplied)
     * returns {sum, carryOut}. Contains sum/carryOut or {undef,undef} if params are not bits
     */
    addBits(bit1, bit2, carryIn = 0) {
        let results = {
            "sum": this.undef,
            "carryOut": this.undef
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
                results.sum = this.undef;
                results.carryOut = this.undef;
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
     * returns true if bitString is a bit string. Returns false otherwise
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

    /**
     * Performs bit-wise AND on 2 bit strings. Returns result or 'undef' if any inputs are not bit strings
     * @param {String} bitString1 first bit string to and
     * @param {String} bitString2 second bit string to and
     */
    and(bitString1, bitString2) {
        var result = "";
        if (this.isBitString(bitString1) && this.isBitString(bitString2)) {
            const longestLen = Math.max(bitString1.length, bitString2.length);
            const bitsOne = this.signExtend(bitString1, longestLen, '0');
            const bitsTwo = this.signExtend(bitString2, longestLen, '0');

            for (var x = 0; x < longestLen; x++) {
                if ((bitsOne.charAt(x) === '1') && (bitsTwo.charAt(x) === '1')) {
                    result += "1";
                } else {
                    result += "0";
                }
            }
        } else {
            result = this.undef;
        }

        return result
    }

    /**
     * Performs bit-wise OR on 2 bit strings. Returns result or 'undef' if any inputs are not bit strings
     * @param {String} bitString1 first bit string to and
     * @param {String} bitString2 second bit string to and
     */
    or(bitString1, bitString2) {
        var result = "";
        if (this.isBitString(bitString1) && this.isBitString(bitString2)) {
            const longestLen = Math.max(bitString1.length, bitString2.length);
            const bitsOne = this.signExtend(bitString1, longestLen, '0');
            const bitsTwo = this.signExtend(bitString2, longestLen, '0');

            for (var x = 0; x < longestLen; x++) {
                if ((bitsOne.charAt(x) === '1') || (bitsTwo.charAt(x) === '1')) {
                    result += "1";
                } else {
                    result += "0";
                }
            }
        } else {
            result = this.undef;
        }

        return result
    }

    /**
     * Converts bit string to decimal
     * @param {String} bitString bit string to convert
     */
    convert(bitString) {
        let results = {
            "decimal": this.undef,
            "hexadecimal": this.undef
        };

        if ((typeof bitString === 'string') && (this.isBitString(bitString))) {
            results.decimal = parseInt(bitString, 2).toString(10);
            results.hexadecimal = parseInt(bitString, 2).toString(16);
        }

        return results;
    }
}

// export default BitOperations;
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') { module.exports = BitOperations }
// module.exports = BitOperations
// })(typeof exports === 'undefined' ? this['BitOperations'] = {} : exports);

// if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
// module.exports = BitOperations;
// else
// window.BitOperations = BitOperations;
// })();