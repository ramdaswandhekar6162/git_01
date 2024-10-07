
let arr = [1,2,3,4,5,6];

let output = arr.filter((ele) => {
    
    if(ele % 2 == 0) {
        return ele;
    } 
});

console.log(output);