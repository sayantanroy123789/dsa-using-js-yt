function searchItem(){
let arr=[20,50,80,60,100,120]
let search=80;
let index;
for(let i=0;i<arr.length;i++){
    // console.log(arr[i]);
    if(arr[i]==search){
        index=i;
    }
     
    
}
console.log(index);
}


searchItem(); 