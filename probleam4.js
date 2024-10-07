

let arr = [1,2,3,4,5];

let filterArr = arr.filter((ele) => {
    if(ele % 2 == 0) {
        return ele;
    }
});

let sqArr = filterArr.map((ele) => {
    return ele*2;
});

let sum = sqArr.reduce((total,curr) => {
    return total+curr;
},0);

console.log(filterArr);
console.log(sqArr);
console.log(sum);
