// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by
//deleting some (can be none) of the characters without disturbing the relative positions
//of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true

// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

var isSubsequence = function(s, t) {
    let letters = 0;

    for (let i = 0; i < t.length; i++) {
        if (s[letters] === t[i]) {
            letters++;
        }
    }
  return letters === s.length
};

// Given two non-negative integers low and high. Return the count of odd numbers
//between low and high (inclusive).

//  

// Example 1:

// Input: low = 3, high = 7
// Output: 3
// Explanation: The odd numbers between 3 and 7 are [3,5,7].

// Example 2:

// Input: low = 8, high = 10
// Output: 1
// Explanation: The odd numbers between 8 and 10 are [9].

var countOdds = function(low, high) {
    //check to see if low and high numbers are even
    if (low % 2 === 0 && high % 2 === 0) {
        //if they are even, return the difference divided by 2 as you
        //will not need to include the low and high number
        return (high-low)/2;
    } else {
        //if they're not even, return the difference divided by 2
        //add 1 to account for inclusivity
        return Math.floor((high - low) / 2) + 1;
    }
};
