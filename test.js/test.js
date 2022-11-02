let array = [13,7,18,56,84,93,9,35,40];
let val = 56;
let x;
for (let i = 0 ; i<array.length ; i++){
    for(let j = 1 ; j<array.length-i ; j++){
        if(array[j-1]>array[j]){
        x = array[j-1];
        array[j-1] = array[j];
        array[j] = x
        }
    }
}


