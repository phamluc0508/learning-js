const arr = [0,-1,-5];
const sum_is_odd_even = arr => {
    // array is empty
    if (arr.length === 0) return 'even';
    // sum of array
    const sum_arr = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    })
    //check sum is even or odd and return
    if(sum_arr % 2 == 0)
        return 'even';
    return 'old';
}

console.log(sum_is_odd_even(arr));