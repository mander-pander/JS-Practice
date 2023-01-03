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
