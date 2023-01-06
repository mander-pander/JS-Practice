// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

//  

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true

// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false

// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false

var wordPattern = function(pattern, s) {

    let patternMap = {};
    let sMap = {};
    let array = s.split(/\s/);

    //begin with checking for equal lengths in the given pattern and string after splitting string
    //into array and removing white space
    if(pattern.length != s.split(/\s/).length){
        return false;
    }

    //each index in the pattern
    for (let i in pattern) {
        let letter = pattern[i];
        let word = array[i];

        //pairing that has not appeared is added to the map,
        //and the pairing that has appeared is compared
        if(!patternMap[letter]) {
            patternMap[letter] = word;
        } else if(patternMap[letter] !== word) {
            return false;
        }

        if(!sMap[word]) {
            sMap[word] = letter;
        } else if(sMap[word] !== letter) {
            return false;
        }
    }
    return true;
};
