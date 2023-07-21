const arr = [1, 2, 2, 3, 3, 'acb', 'acb', '1'];
const unique_in_order = arr => {
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
    return copy_arr;
}
console.log(unique_in_order(arr))