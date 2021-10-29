// Write a function called constructNote, which accepts two strings, a message and some letters. 
// The function should return true if the message can be built with the letters that you are given; 
// otherwise, it should return false.
// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.
// Complexity: O(M + N) - If M is the length of message and N is the length of letters

function frequencyCounter(str) {

    let frequencies = new Map();

    for (let char of str) {
        let charCount = frequencies.get(char) || 0;
        frequencies.set(char, charCount + 1);
    }
    return frequencies;
}

function constructNote(message, strInventory) {

    if (message.length > strInventory.length) return false;

    let messageMap = frequencyCounter(message);
    let inventoryMap = frequencyCounter(strInventory);

    for (let key of messageMap.keys()) {
        if (messageMap.get(key) !== inventoryMap.get(key)) {
            return false;
        }
    }
    return true;
}
