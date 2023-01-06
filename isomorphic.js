// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving
//the order of characters. No two characters may map to the same character, but a character
//may map to itself.

//  

// Example 1:

// Input: s = "egg", t = "add"
// Output: true

// Example 2:

// Input: s = "foo", t = "bar"
// Output: false

// Example 3:

// Input: s = "paper", t = "title"
// Output: true


var isIsomorphic = function(s, t) {
    //The Map object holds key-value pairs and remembers the original insertion order  of the keys.
    //Any value (both objects and primitive values) may be used as either a key or a value.
    //create new Map;
    let iso = new Map();
    //loop through s;
    for (let i = 0; i < s.length; i++) {
        //check if created Map has the letter at current index for s
        //&& if letter in map doesn't equal t at this index
        if (iso.has(s[i]) && iso.get(s[i]) !== t[i]) {
            return false;
        }
        else {
            iso.set(s[i],t[i]);
        }
    }
    //removes duplicate characters from created map
    return new Set([...iso.values()]).size === iso.size;
};
