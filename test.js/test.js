
let arr=[12,9,1,-3,5,24]

for(let i=0;i<arr.length;i++){
    let min=i
    for(let j=i+1;j<arr.length;j++){
if(arr[j]<arr[min]){
min=j
}if(min!=i){
    let temp=arr[i]
    arr[i]=arr[min]
    arr[min]=temp
}
}
}
console.log(arr)