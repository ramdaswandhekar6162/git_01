
let arr = [5,10,15,20,25];


let output = arr.reduce(fn);

function fn(total,curr) {
    return total+curr;
};

console.log(output);