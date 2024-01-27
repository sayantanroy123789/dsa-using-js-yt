function margeWhile(){
    let arr1=[10,30,50,70,90,110];
    let arr2=[20,40,60,80];
    let arr3=[];
    let i=0;
    let j=0;
    let k=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
                arr3[k]=arr1[i];
                // k++;
                i++;
                // console.log(arr3);
        } else{
            arr3[k]=arr2[j];
            j++;
            // k++;
        }
        k++;
    }
    while(i<arr1.length){
            arr3[k]=arr1[i];
            i++;
            k++;
    }
    console.log(arr3);
}
margeWhile();