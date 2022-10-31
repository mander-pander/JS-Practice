// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

var mySqrt = function (x) {
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

var lengthOfLastWord = function (s) {
    let stringArr = s.trim().split(' ');
    return stringArr[stringArr.length - 1].length;
};


///////////////////////////
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.



// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].


var merge = function (nums1, m, nums2, n) {
    let i = 0;
    let j = 0;

    //starting at index "m", removing the length less the elements that need to be merged (removing the zeros)
    nums1.splice(m, nums1.length - m);
    while (j < n) {
        if (nums1[i] === undefined || nums1[i] > nums2[j]) {
            nums1.splice(i, 0, nums2[j]);
            j++;
            i++;
        } else {
            i++;
        }
    }
};

//////////////////////////
// A linked list is a linear data structure similar to an array. However, unlike arrays, elements are not
//stored in a particular memory location or index. Rather each element is a separate object that contains
//a pointer or a link to the next object in that list.

//Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
//Return the linked list sorted as well.

//Example 1:
//Input: head = [1,1,2]
//Output: [1,2]

// Example 2:
// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

// var deleteDuplicates = function(head) {
//     let current = head;

//     while(current) {
//         if(current.next !== null && current.val == current.next.val) {
//             current.next = current.next.next;
//         } else {
//             current = current.next;
//         }
//     }
//     return head;
// };

// Given the head of a sorted linked list, delete all nodes that have
//duplicate numbers, leaving only distinct numbers from the original
//list. Return the linked list sorted as well.

// Example 1:
// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]
// Example 2:

// Input: head = [1,1,1,2,3]
// Output: [2,3]

var deleteDuplicates = function(head) {
    let temp = new ListNode(0);
    temp.next = head;
    let current = temp;

    while(current.next !== null && current.next.next !== null) {
        if(current.next.val === current.next.next.val) {
            let match = current.next.val;

            while(current.next !== null && current.next.val === match) {
                current.next = current.next.next;
            }
        } else {
            current = current.next;
        }
    }
    return temp.next;
};

/////////////////////////////

//Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

var isPalindrome = function(x) {
    if (x < 0 ) return false;
    //change to string and then reverse
    const rev = `${x}`.split('').reverse().join('');
    return x == rev;
};

/////////////////////////////
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

//     I can be placed before V (5) and X (10) to make 4 and 9.
//     X can be placed before L (50) and C (100) to make 40 and 90.
//     C can be placed before D (500) and M (1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer.

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

var romanToInt = function(s) {
    let symbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
    };

    total = 0;
    for(let i = 0; i < s.length; i+=1){
        symbols[s[i]] < symbols[s[i+1]] ? total -= symbols[s[i]]: total += symbols[s[i]];
        // console.log(symbols[s[i]]);
        console.log(symbols[s[i+1]]);
    }
    return total
};
