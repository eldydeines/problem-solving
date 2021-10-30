// Write a function called twoArrayObject which accepts two arrays of varying lengths.
// The first array consists of keys and the second one consists of values. 
// Your function should return an object created from the keys and values. 
// If there are not enough values, the rest of keys should have a value of null. 
// If there not enough keys, just ignore the rest of values.

function twoArrayObject(arrKeys, arrVals) {

    if (!arrKeys) return {};

    let obj = {};
    let i = 0;

    for (let key of arrKeys) {

        if (i == arrVals.length) {
            obj[key] = null;
        }
        else obj[key] = arrVals[i];
        i++;
    }

    return obj;
}

module.exports = twoArrayObject;
