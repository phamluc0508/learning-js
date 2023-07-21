const format_whitespace = arr => {
    // loop through elements of arr
    const arr_format = arr.map(val => {
        // check val has more than a whitespace
        if (typeof val === 'string' && val.length !== 0 && val.trim().length === 0)
        // return a whitespace
            return ' ';
        // return normal val
        return val;
    })
    return arr_format;
}
const find_element_same = (arr1, arr2) => {
    // create object
    obj={}
    // save input
    obj['input'] = {
        'arr1': arr1,
        'arr2': arr2
    }
    //format array
    arr1_format = format_whitespace(arr1);
    arr2_format = format_whitespace(arr2);
    // create array store resule
    const arr3 = [];
    // loop through elements of arr1
    arr1_format.forEach(val => {
        // check arr2 has val and arr3 have no val
        if (arr2_format.indexOf(val) >= 0 && arr3.indexOf(val) === -1)
            //val is same and get val to arr3
            arr3.push(val);
    });
    // save output
    obj['output'] = arr3.sort();
    return obj;
}
const find_element_different = (arr1, arr2) => {
    // create object
    obj={}
    // save input
    obj['input'] = {
        'arr1': arr1,
        'arr2': arr2
    }
    //format array
    arr1_format = format_whitespace(arr1);
    arr2_format = format_whitespace(arr2);
    // create array store resule
    const arr3 = [];
    // elements of arr appear only one
    var set1 = new Set(arr1_format);
    var set2 = new Set(arr2_format);
    // set to array
    const copy_arr1 = [...set1];
    const copy_arr2 = [...set2];
    // loop through elements of arr1
    copy_arr1.forEach(val => {
        // check arr2 has no val and arr3 have no val
        if (copy_arr2.indexOf(val) === -1 && arr3.indexOf(val) === -1)
            //val is different and get val to arr3
            arr3.push(val);
        else
            //  check arr2 has val will delete
            while (copy_arr2.indexOf(val) >= 0)
                copy_arr2.splice(copy_arr2.indexOf(val), 1);
    });
    // save output
    obj['output'] = [...arr3, ...copy_arr2].sort();
    return obj;
}
const to_upper_first_character = string => {
    // create object
    obj={}
    // save input
    obj['input'] = string
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
    // save output
    obj['output'] = string.trim();
    return obj;
}
const sum_is_odd_even = arr => {
    // create object
    obj={}
    // save input
    obj['input'] = arr;
    // array is empty
    if (arr.length === 0) 
        // save output
        obj['output'] =  'even';
    // sum of array
    const sum_arr = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    })
    //check sum is even or odd and return
    if(sum_arr % 2 == 0)
        // save output
        obj['output'] =  'even';
    else
        // save output
        obj['output'] =  'old';
    return obj;
}
const lots_of_math = (a, b, c, d) => {
    // create object
    obj={}
    // save input
    obj['input'] = {
        'a': a,
        'b': b,
        'c': c,
        'd': d
    };
    // print the sum of a and b
    const sum = a + b;
    // print c minus d
    const minus = c - d;
    // print the first number printed, multiplied by the second number printed
    const multiplied = sum * minus;
    // print 3 modulo a
    const modulo = multiplied % a;
    // save ouput
    obj['output']= {
        'sum of a and b': sum,
        'c minus b': minus,
        'sum multiplied minus': multiplied,
        'multiplied modulo a': modulo
    }
    return obj;
}
const middle_character = string => {
    // create object
    obj={}
    // save input
    obj['input'] = string;
    // get middle index
    const index_middle = Math.floor(string.length / 2) - 1;
    // create variable save result
    let result; 
    // check string's length is even or odd
    if(string.length % 2 === 0)
        // length is even: get 2 elements in middle index 
        result = string.substring(index_middle, index_middle + 2);
    else
        // length is odd: get element in middle index 
        result = string.substring(index_middle + 1, index_middle + 2);
    //save output
    obj['output'] = result;
    return obj;
}
const highest_number = number => {
    // create object
    obj={}
    // save input
    obj['input'] = number;
    //number to string
    const string = String(number);
    //sort descending
    const string_sorted = string.split('').sort((a, b) => b - a).join('');
    //highest_number's type is number
    let highest_number = parseInt(string_sorted);
    //save output
    obj['output'] = highest_number;
    return obj;
}
const unique_in_order = arr => {
    // create object
    obj={}
    // save input
    obj['input'] = arr;
    // change string to array
    let copy_arr;
    if (typeof arr === 'string') {
        copy_arr = arr.split('');
    }
    else
        copy_arr = [...arr];
    // loop through index of arr
    var index = 0;
    while (index < copy_arr.length - 1) {
        // check the same adjacent index
        const adjacent = index + 1;
        while (copy_arr[index] === copy_arr[adjacent])
            // remove the same adjacent element
            copy_arr.splice(adjacent, 1);
        index++;
    }
    //save ouput
    obj['output'] = copy_arr
    return obj;
}
const number_outlier = arr => {
    // create object
    obj={}
    // save input
    obj['input'] = arr;
    // create amount of even and odd number in arr
    var count_even = 0;
    var count_odd = 0;
    // create variable store result
    var number_even;
    var number_odd;
    var result;
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
            //check a single integer N is even or odd number
            if (count_odd === 1){
                result = count_odd;
                break;
            }
            else {
                result = count_even;
                break;
            }
        }
    };
    // save output
    obj['output'] = result;
    return obj;
}
// write all to result to file exercise10.json
let data = {
    exercise_01_1: (find_element_same(["3", 3, 3, 3, 3, 4, 4, 4,"   ",""], ["avd", 1, 3, 3,""," "])),
    exercise_01_2: (find_element_different(["3", 3, 3, 3, 3, 4, 4, 4,""], ["avd", 1, 3, 3,"   "])),
    exercise_02: (to_upper_first_character("   toi ten la abcd 5678    ")),
    exercise_03: (sum_is_odd_even([0, -1, -5])),
    exercise_04: (lots_of_math(7, 2, 3, 13)),
    exercise_05: (middle_character("test")),
    exercise_06: (highest_number(123456789)),
    exercise_07: (unique_in_order('AAAABBBCCDAABBB')),
    exercise_08: (number_outlier([8, 2, 11, 100, 4, 8, 2602, 36])),
}
const fs = require('fs');
let stringData = JSON.stringify(data,null,2);

fs.writeFile('exercise10.json', stringData, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});