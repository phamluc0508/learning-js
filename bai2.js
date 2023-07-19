const string = '   ten toi la   ';

const to_upper_first_character = string => {
    string = ' ' + string;
    var i = 1;
    // loop through character of string
    while (i < string.length) {
        // Uppercase first characters
        if (string[i] !== ' ' && string[i - 1] === ' ')
            string = string.substring(0, i) + string[i].toUpperCase() + string.substring(i + 1);
        i++;
    }
    return string.trim();
}

console.log(to_upper_first_character(string));