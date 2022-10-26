// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

var mySqrt = function(x) {
    let root = 1;
    while (root * root <= x) {
        root++;
    }
    return root - 1;
};

////////////////////////

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

var lengthOfLastWord = function(s) {
    let stringArr = s.trim().split(' ');
    return stringArr[stringArr.length-1].length;
};
