const arr1 = [1, 2, 3, 4, '!@#', '   '];
const arr2 = ['1', '2', '3', 4, 4, 4, 3, '1', ''];
const find_element_same = (arr1, arr2) => {
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
    // return sorted result 
    return arr3.sort();
}
const find_element_different = (arr1, arr2) => {
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
    // add arr3 and copy_arr2, and return sorted result
    return [...arr3, ...copy_arr2].sort();
}

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

console.log(find_element_different(arr1,arr2));