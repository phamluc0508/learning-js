const number = 987654321;
const highest_number = number => {
    //number to string
    const string = String(number);
    //sort descending
    const string_sorted = string.split('').sort((a, b) => b - a).join('');
    // return highest_number's type is number
    return parseInt(string_sorted);
}
console.log(highest_number(number));