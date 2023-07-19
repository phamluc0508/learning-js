const arr = [160, 3, 1719, 19, 11, 13, -21];
const number_outlier = arr => {
    var count_odd=0;
    var count_even=0;
    for(var i=0; i<3; i++){
        if(arr[i] % 2 ==0)
            count_even ++;
        else 
            count_odd ++;
    }
    var i=0;
    if(count_even > count_odd){
        while(arr[i] % 2 ===0)
            i++
        return arr[i];
    } 
    else{
        while(arr[i]% 2 !==0)
            i++;
        return arr[i];
    } 
        
}
console.log(number_outlier(arr));