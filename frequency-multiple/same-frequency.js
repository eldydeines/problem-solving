// Write a function called sameFrequency. Given two positive integers, 
// find out if the two numbers have the same frequency of digits.

function splitToDigit(n) {
    return (n + '').split('').map((i) => { return Number(i); })
}

function frequencyCounter(str) {
    let frequencies = new Map();

    for (let char of str) {
        let charCount = frequencies.get(char) || 0;
        frequencies.set(char, charCount + 1);
    }
    return frequencies;
}


function sameFrequency(num1, num2) {

    str1 = (num1 + '').split('').map((i) => { return Number(i); });
    str2 = (num2 + '').split('').map((i) => { return Number(i); });

    if (str1.length !== str2.length) return false;

    let str1Freq = frequencyCounter(str1);
    let str2Freq = frequencyCounter(str2);

    if (str1Freq.size !== str2Freq.size) return false;

    for (let key of str1Freq.keys()) {

        if (str2Freq.get(key) !== str1Freq.get(key)) {
            return false;
        }
    }
    return true;
}

module.exports = sameFrequency;