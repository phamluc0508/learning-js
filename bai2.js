const string = '   ten toi la   ';

const to_upper_first_character = string => {
    // add whitespace and string prepare for loop 
    string = ' ' + string;
    var i = 1;
    // loop through character of string
    while (i < string.length) {
        // check space before character is Uppercase character
        if (string[i] !== ' ' && string[i - 1] === ' ')
            string = string.substring(0, i) + string[i].toUpperCase() + string.substring(i + 1);
        i++;
    }
    // delete leading and trailing whitespace, and return
    return string.trim();
}

console.log(to_upper_first_character(string));