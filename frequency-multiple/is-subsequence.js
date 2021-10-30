//  Write a function called isSubsequence which takes in two strings and 
//  checks whether the characters in the first string form a subsequence 
//  of the characters in the second string. In other words, the function should 
//  check whether the characters in the first string appear somewhere in 
//  the second string, without their order changing.

function sequence(str) {

    let sequence = new Map();
    let order = 0;
    for (let char of str) {
        sequence.set(order, char);
        order++;
    }
    return sequence;
}

function isSubsequence(str1, str2) {

    if (str1.length > str2.length) return false;

    let str2Map = sequence(str2);
    let originalSize = str2Map.size;

    let i = 0;
    for (let key of str2Map.keys()) {

        if (str2Map.get(key) === str1[i]) {
            i++;
            str2Map.delete(key);
        }

        if ((originalSize - str2Map.size) == str1.length) {
            return true;
        }
    }
    return false;
}

module.exports = isSubsequence;