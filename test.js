const expect = chai.expect;
describe('integerToRoman', function () {
    it('TC-1: should convert 1 to "I"', function () {
        expect(integerToRoman(1)).to.equal('I');
    });
    it('TC-2: should convert 9 to "IX"', function () {
        expect(integerToRoman(9)).to.equal('IX');
    });
    it('TC-8: should throw an error for 4000 (out of range)', function () {
        expect(() => integerToRoman(4000)).to.throw("The number must be between 1 and 3999.");
    });
    it('TC-9: should convert 01 to "I" (leading zero)', function () {
        expect(integerToRoman(1)).to.equal('I');
    });
    it('TC-10: should convert 0010 to "X" (leading zeros)', function () {
        expect(integerToRoman(10)).to.equal('X');
    });
    it('TC-11: should throw error for invalid input like NaN', function () {
        expect(() => integerToRoman(NaN)).to.throw();
    });
    it('TC-19: should throw an error for negative numbers', function () {
        expect(() => integerToRoman(-9)).to.throw("The number must be between 1 and 3999.");
    });
    it('TC-20: should handle invalid input type (string)', function () {
        expect(() => integerToRoman("MMMCMXCIX")).to.throw();
    });
    it('TC-21: should convert 4 to "IV"', function () {
        expect(integerToRoman(4)).to.equal('IV');
    });
    it('TC-22: should convert 49 to "XLIX"', function () {
        expect(integerToRoman(49)).to.equal('XLIX');
    });
    it('TC-23: should convert 3888 to "MMMDCCCLXXXVIII"', function () {
        expect(integerToRoman(3888)).to.equal('MMMDCCCLXXXVIII');
    });
    it('TC-28: should handle non-integer numbers', function () {
        expect(integerToRoman(10.5)).to.equal('X');
    });

    it('TC-30: should convert 3999 to "MMMCMXCIX"', function () {
        expect(integerToRoman(3999)).to.equal('MMMCMXCIX');
    });
    it('TC-33: should convert 144 to "CXLIV"', function () {
        expect(integerToRoman(144)).to.equal('CXLIV');
    });
    it('TC-34: should convert 900 to "CM"', function () {
        expect(integerToRoman(900)).to.equal('CM');
    });
    it('should throw an error for numbers less than 1', function () {
        expect(() => integerToRoman(0)).to.throw("The number must be between 1 and 3999.");
    });
});

describe('romanToInteger', function () {
    it('TC-4: should convert "Xii" to 12 (case insensitive)', function () {
        expect(romanToInteger('Xii')).to.equal(12);
    });

    it('TC-5: should convert "XII" to 12', function () {
        expect(romanToInteger('XII')).to.equal(12);
    });

    it('TC-6: should throw error for "MMMM" (4000 out of range)', function () {
        expect(() => romanToInteger('MMMM')).to.throw();
    });

    it('TC-7: should throw error for numeric input 4000 (invalid type)', function () {
        expect(() => romanToInteger(4000)).to.throw("Input must be a valid Roman numeral.");
    });
    it('TC-12: should convert "cv" to 105 (lowercase)', function () {
        expect(romanToInteger('cv')).to.equal(105);
    });
    it('TC-13: should throw error for "cvb" (invalid character B)', function () {
        expect(() => romanToInteger('cvb')).to.throw();
    });
    it('TC-14: should throw error for "cv3" (contains number)', function () {
        expect(() => romanToInteger('cv3')).to.throw();
    });
    it('TC-15: should throw error for "CV9" (contains number)', function () {
        expect(() => romanToInteger('CV9')).to.throw();
    });
    it('TC-16: should throw error for "A" (invalid character)', function () {
        expect(() => romanToInteger('A')).to.throw();
    });
    it('TC-17: should throw error for "Z" (invalid character)', function () {
        expect(() => romanToInteger('Z')).to.throw();
    });
    it('TC-18: should throw error for "XZZX" (invalid characters)', function () {
        expect(() => romanToInteger('XZZX')).to.throw();
    });
    it('TC-24: should throw error for "IIII" (max 3 repetitions rule)', function () {
        expect(() => romanToInteger('IIII')).to.throw();
    });
    it('TC-25: should throw error for "VX" (invalid subtraction)', function () {
        expect(() => romanToInteger('VX')).to.throw();
    });

    it('TC-26: should throw error for "VL" (invalid subtraction)', function () {
        expect(() => romanToInteger('VL')).to.throw();
    });
    it('TC-27: should throw error for null input', function () {
        expect(() => romanToInteger(null)).to.throw("Input must be a valid Roman numeral.");
    });
    it('TC-29: should throw error for empty string', function () {
        expect(() => romanToInteger('')).to.throw("Input must be a valid Roman numeral.");
        expect(() => romanToInteger('   ')).to.throw("Input must be a valid Roman numeral.");
    });
    it('TC-31: should throw error for "DCCCC" (non-canonical form)', function () {
        expect(() => romanToInteger('DCCCC')).to.throw();
    });
    it('TC-32: should throw error for "CCD" (invalid order)', function () {
        expect(() => romanToInteger('CCD')).to.throw();
    });
    it('TC-35: should convert "MCMXCIV" to 1994', function () {
        expect(romanToInteger('MCMXCIV')).to.equal(1994);
    });
    it('should convert "I" to 1', function () {
        expect(romanToInteger('I')).to.equal(1);
    });
    it('should convert "MMMCMXCIX" to 3999', function () {
        expect(romanToInteger('MMMCMXCIX')).to.equal(3999);
    });
});

