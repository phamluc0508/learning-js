const string = 'A';
const middle_character = string => {
    // get middle index
    const index_middle = Math.floor(string.length / 2) - 1;
    // get middle character
    return string.length % 2 === 0 ? string.substring(index_middle, index_middle + 2) : string.substring(index_middle + 1, index_middle + 2);
}

console.log(middle_character(string));