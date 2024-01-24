function insert(){
    let arr=[10,20,30,40,50];
    let newEl=25;
    let position=2;
    console.log(arr);
    for(let i=arr.length-1;i>=0;i--){
        // console.log((arr[i]));
        if(i>=position){
            arr[i+1]=arr[i]
            if(i==position){
                arr[i]=newEl
            }
        }
    }
console.log(arr);
}
insert();