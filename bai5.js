const string = 'A';
const middle_character = string => {
    // get middle index
    const index_middle = Math.floor(string.length / 2) - 1;
    // check string's length is even or odd
    if(string.length % 2 === 0)
        // length is even: get 2 elements in middle index and return
        return string.substring(index_middle, index_middle + 2);
    // length is odd: get element in middle index and return
    return string.substring(index_middle + 1, index_middle + 2);
}
console.log(middle_character(string));