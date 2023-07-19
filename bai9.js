const string = 'Hello, Worldh!';
const count_characters = string => {
    // get number and word
    string = string.split(/[ ,;:.'"!@#$%^&~`*/+-=]/).join('');
    // create object
    const occur_characters = {};
    // reject the same elements
    for (val of string) {
        if (!occur_characters[`${val}`])
            occur_characters[`${val}`] = 1;
        else
            occur_characters[`${val}`]++;
    }
    return occur_characters;
}
console.log(count_characters(string))