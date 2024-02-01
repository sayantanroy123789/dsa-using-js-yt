
let data=[20,30,80,40,50];
let temp;
function reverseArray(array,start,end){
    
    // console.log(data);
    if(start<=end){
        temp=array[start];
         array[start]=array[end];
         array[end]=temp;
         reverseArray(array,start+1,end-1);
    }
   
    

}

reverseArray(data,0,data.length-1);
console.log(data);