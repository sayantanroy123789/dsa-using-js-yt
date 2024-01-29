function margeshort(){
    let arr1=[91,71,97,66,62]
    let arr2=[61,67,95,82,78]
    let arr3=[];
    for(let i=0;i<arr1.length;i++){
        arr3[i]=arr1[i];
        
    }
   
    for(let j=0;j<arr2.length;j++){
        arr3[arr1.length+j]=arr2[j]
    }
     
     for(let i=0;i<arr3.length;i++){
         for(let j=0;j<arr3.length;j++){
             if(arr3[j]<arr3[j+1]){
                 let temp;
                 temp=arr3[j];
                 arr3[j]=arr3[j+1];
                 arr3[j+1]=temp
             }
         }
     }
     console.log(arr3)
}
margeshort();