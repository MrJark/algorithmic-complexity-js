//Space Performance
function count(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);        
    }
}

function repeat(array) {
    let array_repeat = array;
    return array_repeat;
};

function changeToString(array) { //convierte los números to string
    let result = array.map(element => element.toString());
    return result;
}
console.log(changeToString([1, 2, 3]));

function twoDimensions (value) {
    let x = new Array (value);
    for (let i = 0; i < value; i++) {
        x[i] = new Array(value).fill(0);
    }
    return x;
};

console.log(twoDimensions(5));

