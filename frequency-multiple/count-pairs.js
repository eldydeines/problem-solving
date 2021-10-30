// Given an array of integers, and a number, find the number of pairs of integers 
// in the array whose sum is equal to the second parameter. You can assume that 
// there will be no duplicate values in the array.


function countPairs(arr, num) {
    let obj = {}
    let i = 0;
    let count = 0;

    while (i < arr.length) {
        let second = num - arr[i];
        if (second in obj) {
            count++;
            i++;
        }
        else {
            obj[arr[i]] = i;
            i++;
        }
    }
    return count;
}

module.exports = countPairs;

