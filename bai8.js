const arr = [160, 3, 1719, 19, 11, 13, -21];
const number_outlier = arr => {
    // create amount of even and odd number in arr
    var count_even = 0;
    var count_odd = 0;
    // create variable store result
    var number_even;
    var number_odd;
    // loop through index of arr
    for (var index = 0; index < arr.length; index++) {
        // check val is even or odd
        if (arr[index] % 2 == 0) {
            // increase amount of even
            count_even++;
            // store even number 
            number_even = arr[index];
        }
        else {
            // increase amount of odd
            count_odd++;
            // store odd number 
            number_odd = arr[index];
        }
        // check amount of even and odd number
        if (count_even > 0 && count_odd > 0 && count_even !== count_odd) {
            //check a single integer N is even or odd number, and return
            if (count_odd === 1)
                return number_odd;
            return number_even;
        }
    };
}
console.log(number_outlier(arr));