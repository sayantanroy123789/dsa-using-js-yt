function short(){
let array=[20,17,91,60,45];
 for(let i=0;i<array.length;i++){
    for(let j=0;j<array.length;j++){
        if(array[j]>array[j+1]){
            let temp;
            temp=array[j];
            array[j]=array[j+1];
            array[j+1]=temp;
        }
    }
 }
 console.log(array);
}
short();