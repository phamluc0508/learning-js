const find_element_same = (arr1, arr2) => {
    //create object
    const obj = {};
    //save input to obj
    obj["input"] = {
        "arr1": arr1,
        "arr2": arr2
    }
    //create array of output
    const arr3 = [];
    // loop through elements of arr1
    arr1.forEach(val => {
        // get the same elements
        if (arr2.indexOf(val) >= 0 && arr3.indexOf(val) === -1)
            arr3.push(val);
    });
    //save output to obj
    obj["output"] = arr3;
    return obj;
}
const find_element_different = (arr1, arr2) => {
    //create object
    const obj = {};
    //save input to obj
    const copy_arr2 = [...arr2]
    obj["input"] = {
        "arr1": arr1,
        "arr2": copy_arr2
    }

    //create array of output
    const arr3 = [];
    // loop through elements of arr1
    arr1.forEach(val => {
        // get the different elements of arr1
        if (arr2.indexOf(val) === -1 && arr3.indexOf(val) === -1)
            arr3.push(val);
        else
            // deconste the same elements of arr2
            while (arr2.indexOf(val) >= 0)
                arr2.splice(arr2.indexOf(val), 1);
    });
    //save output to obj
    obj["output"] = [...arr3, ...arr2];
    return obj;
}
const to_upper_first_character = string => {
    //create object
    const obj = {};
    //save input to obj
    obj["input"] = string;
    //edit form string
    string = ' ' + string;
    var i = 1;
    //loop through character of string
    while (i < string.length) {
        // Uppercase first characters
        if (string[i] !== ' ' && string[i - 1] === ' ')
            string = string.substring(0, i) + string[i].toUpperCase() + string.substring(i + 1);
        i++;
    }
    //save output to obj
    obj["output"] = string.trim();
    return obj;
}
const sum_is_odd_even = arr => {
    //create object
    const obj = {};
    //save input to obj
    obj["input"] = arr;
    //array is empty
    if (arr.length === 0) return 'even';
    //sum of array
    const sum_arr = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    })
    //save output to obj
    obj["output"] = sum_arr % 2 === 0 ? 'even' : 'odd';
    return obj;
}
const lots_of_math = (a, b, c, d) => {
    //create object
    const obj = {};
    //save input to obj
    obj["input"] = {
        "a": a,
        "b": b,
        "c": c,
        "d": d
    };
    //the sum of a and b
    const sum = a + b;
    //console.log(`sum of a and b: ${sum}`);
    //c minus d
    const minus = c - d;
    //console.log(`c minus b: ${minus}`);
    //the first number printed, multiplied by the second number printed
    const multiplied = sum * minus;
    //console.log(`sum multiplied minus: ${multiplied}`);
    //the third number printed modulo a
    const modulo = multiplied % a === -0 ? 0 : multiplied % a;
    //save output to obj
    obj["output"] = {
        "a + b": sum,
        "c - d": minus,
        "(a+b)*(c-d)": multiplied,
        "(a+b)*(c-d)/a": modulo
    }
    return obj;
}
const middle_character = string => {
    //create object
    const obj = {};
    //save input to obj
    obj["input"] = string;
    //get middle index
    const index_middle = Math.floor(string.length / 2) - 1;
    //get middle character
    const middle_string = string.length % 2 === 0 ? string.substring(index_middle, index_middle + 2) : string.substring(index_middle + 1, index_middle + 2);
    //save output to obj
    obj["ouput"] = middle_string;
    return obj;
}
const highest_number = number => {
    //create object
    const obj = {};
    //save input to obj
    obj["input"] = number;
    //number to string
    const string = String(number);
    //sort descending
    const string_sorted = string.split('').sort((a, b) => b - a).join('');
    //highest_number
    const highest = parseInt(string_sorted);
    //save output to obj
    obj["output"] = highest;
    return obj;
}
const unique_in_order = arr => {
    //change string to array
    let copy_arr = arr;
    if(typeof arr === 'string')
        arr = arr.split('');
    else 
        copy_arr = [...arr];
    //create object
    const obj = {};
    //save input to obj
    obj["input"] = copy_arr;
    //remove identical elements
    var i=0;
    while(i<arr.length-1){
        const j=i+1;
        while(arr[i] === arr[j])
            arr.splice(j,1);
        i++;
    }
    //save output to obj
    obj["output"] = arr;
    return obj;
}
const number_outlier = arr => {
    //creat object
    const obj = {};
    //save input to obj
    obj["input"] = arr;
    //count odd and even number
    var count_odd=0;
    var count_even=0;
    for(var i=0; i<3; i++){
        if(arr[i] % 2 ==0)
            count_even ++;
        else 
            count_odd ++;
    }
    //find a single integer N
    var i=0;
    let single_N=0;
    if(count_even > count_odd){
        while(arr[i] % 2 ===0)
            i++
        single_N = arr[i];
    } 
    else{
        while(arr[i]% 2 !==0)
            i++;
        single_N = arr[i];
    } 
    //save output to obj
    obj["output"]= single_N;
    return obj;
        
}
// write all to result to file exercise10.json
let data = {
    exercise_01_1: (find_element_same(["3", 3, 3, 3, 3, 4, 4, 4], ["avd", 1, 3, 3])),
    exercise_01_2: (find_element_different(["3", 3, 3, 3, 3, 4, 4, 4], ["avd", 1, 3, 3])),
    exercise_02: (to_upper_first_character("nguyen tuan thanh")),
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