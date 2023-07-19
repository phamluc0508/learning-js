const arr = [0,-1,-5];
const sum_is_odd_even = arr => {
    // array is empty
    if (arr.length === 0) return 'even';
    // sum of array
    const sum_arr = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    })
    // sum is even or odd
    return sum_arr % 2 === 0 ? 'even' : 'odd';
}

console.log(sum_is_odd_even(arr));