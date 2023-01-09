// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

//  

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.


var isPalindrome = function(s) {
    //remove non-alphanumeric chars
    let regexPattern = /[^A-Za-z0-9]/g;
    //use replace method to remove them based on regex pattern variable created
    //change to lower case
    let phrase = s.replace(regexPattern, '').toLowerCase();
    //split phrase to reverse characters and then joint back
    let reversePhrase =   phrase.split('').reverse().join('');
    //compare phrase and reversed phrase
    return phrase === reversePhrase;
};

//without built in methods
 const isPalindrome = s => {
    s = s.toLowerCase().replace(/[^a-z0-9]/gi,'');

    for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
        if (s.charAt(i) !== s.charAt(j)) return false;
    }
    
    return true;
};
