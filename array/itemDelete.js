const intmDelete=()=>{
    let array=[20,40,60,70,80,100];
    let position=3;
    console.log(array);
    for(let i=position;i<array.length;i++){
        // console.log(array[i]);
        array[i]=array[i+1];
    }
    array.length=array.length-1
    console.log(array);
}
intmDelete();