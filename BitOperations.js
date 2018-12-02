class BitOperations {
    constructor(bitString) {
        this.bitString = bitString;
    }

    signExtend(bitString, length, pad) {
        var result = '';
        var padlen = length - bitString.length;

        for (var x = 0; x < padlen; x++) {
            result += pad;
        }
        return result + bitString;

    }

    not(bitString) {
        let result = '';

        const regex = /A[01]+\Z/;
        const ok = /^[01]+$/.test(bitString);
        if (ok) {
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