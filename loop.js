const arr=[1,2,4,7,8,5,2]
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

let j=0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}

let k=0;
do{
    console.log(arr[k]);
    k++;
}while(k<arr.length)

arr.forEach(element => {
   console.log(element); 
});