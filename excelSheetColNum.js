var titleToNumber = function(columnTitle) {
    // The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
    //We will only need the capital letters
    //"A" starts at 65 for ASCII Code
    // The Math.pow() static method returns the value of a base raised to a power.
    let corrColNum = 0;

    for (let i = 0; i < columnTitle.length; i++) {
        const curr_letter = columnTitle[i];
        const curr_num = curr_letter.charCodeAt(0) - 64;
        corrColNum += curr_num * Math.pow(26, columnTitle.length - i - 1);
    }

    return corrColNum;
};
