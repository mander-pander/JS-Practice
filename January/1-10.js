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

// You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

// Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.

//  

// Example 1:

// Input: salary = [4000,3000,1000,2000]
// Output: 2500.00000
// Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
// Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500

// Example 2:

// Input: salary = [1000,2000,3000]
// Output: 2000.00000
// Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
// Average salary excluding minimum and maximum salary is (2000) / 1 = 2000

var average = function(salary) {
    let total = salary.reduce((a,b) => a + b, 0)
    let adjTotal = total - Math.max(...salary) - Math.min(...salary);
    let count = salary.length -2;
    return adjTotal/count;
};
