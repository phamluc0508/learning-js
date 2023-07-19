const arr1 = [1, 2, 3, 4, '!@#'];
const arr2 = ['1', '2', '3', 4, 4, 4, 3];
const find_element_same = (arr1, arr2) => {
    const arr3 = [];
    // loop through elements of arr1
    arr1.forEach(val => {
        // get the same elements
        if (arr2.indexOf(val) >= 0 && arr3.indexOf(val) === -1)
            arr3.push(val);
    });
    return arr3;
}
const find_element_different = (arr1, arr2) => {
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
    return [...arr3, ...arr2];
}
console.log(find_element_different(arr1, arr2));