
// You are given two strings s and t.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Return the letter that was added to t.

//  

// Example 1:

// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.

// Example 2:

// Input: s = "", t = "y"
// Output: "y"

var findTheDifference = function(s, t) {
    let sSorted = s.split('').sort();
    let tSorted = t.split('').sort();

    for (let i = 0; i < t.length; i++) {
        if(sSorted[i] !== tSorted[i]) {
            return tSorted[i];
        }
    }
    return "";
};
