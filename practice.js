const array1 = ['alma', 'körte', 'banán'];
const array2 = ['barack', 'szilva', 'szőlő'];

function addValueToEndOfArray (arr, val) {
    arr.push(val);
    return arr;
}

console.log(addValueToEndOfArray(array2, 'dió'));

function addToEndOfNewArray (arr, val) {
    const newArray = arr;
    newArray.push(val);
    return newArray;

}
//console.log(addValueToEndOfNewArray(array2, 'dió'));
//console.log(array2);

let a = 1;
let b = 3;

a = 2;

console.log('a: ',a, 'b: ', b);

let c = {
    key:1,
    key2: {
        subkey: 2
    }
};
let d=c;
c.key=2;
d.key=3;

console.log('c: ',c, 'd: ', d);
console.log({}==={})

//let f={...c};
//let f = Object.assign({}, c);

let f = JSON.parse(JSON.stringify(c));

c.key=2;
c.key2.subkey = 5;
console.log('c: ',c, 'f: ', f);

