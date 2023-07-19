const arr=[1, 2, 2, 3, 3];
const unique_in_order = arr => {
    // change string to array
    if(typeof arr === 'string')
        arr = arr.split('');
    // deconste the same elements
    var i=0;
    while(i<arr.length-1){
        const j=i+1;
        while(arr[i] === arr[j])
            arr.splice(j,1);
        i++;
    }
    return arr;
}
console.log(unique_in_order([1, 2, 2, 3, 3]))