const string = 'Hello,896d Worldh!% 58945674';
const count_characters = string => {
    // get number, word and sort 
    let copy_string = string.split('').sort().join('');
    // create object
    const occur_characters = {};
    // loop through elements of string
    for (val of copy_string) {
        //check character is't whitespace
        if (val !== ' ') {
            // check val exists occur_characters
            if (!occur_characters[`${val}`])
                // initialize key is val and value is 1
                occur_characters[`${val}`] = 1;
            else
                // increase value
                occur_characters[`${val}`]++;
        }

    }
    return occur_characters;
}
console.log(count_characters(string))