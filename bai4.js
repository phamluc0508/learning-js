const a = 0;
const b = 3;
const c = 2;
const d = 1;
const lots_of_math = (a, b, c, d) => {
    //print the sum of a and b
    const sum = a + b;
    console.log(`sum of a and b: ${sum}`);
    //print c minus d
    const minus = c - d;
    console.log(`c minus b: ${minus}`);
    // print the first number printed, multiplied by the second number printed
    const multiplied = sum * minus;
    console.log(`sum multiplied minus: ${multiplied}`);
    // return the third number printed modulo a
    return multiplied % a === -0 ? 0 : multiplied % a;
}
console.log(lots_of_math(a, b, c, d));