//  Write a function called separatePositive which accepts an array of non-zero integers. 
//  Separate the positive integers to the left and the negative integers to the right. 
//  The positive numbers and negative numbers need not be in sorted order. 
//  The problem should be done in place (in other words, do not build a copy of the input array).

function separatePositive(arr) {

    let left = 0;
    let right = arr.length - 1;
    while (left < right) {

        if (arr[left] < 0 && arr[right] > 0) {
            temp = arr[right];
            arr[right] = arr[left];
            arr[left] = temp;
            left++;
            right--;
        }
        else if (arr[left] < 0) {
            right--;
        }
        else {

            left++;
        }
    }
    return arr;

}

module.exports = separatePositive;