function shorting(){
let arr10=[40,50,70,81,65,66,98];
for(let i=0;i<arr10.length;i++){
    for(let j=0;j<arr10.length;j++){
        if(arr10[j]<arr10[j+1]){
            let temp;
            temp=arr10[j];
            arr10[j]=arr10[j+1];
            arr10[j+1]=temp;
        }
    }
}
console.log(arr10);
}
shorting();