// some of array element equal to 0
/*
    array=[-5,-4,-2,1,3,4,6]
    ans=[4,-4]
*/
function sumOfZero(array){
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length;j++){
            if(array[i]+array[j]==0){
                return([array[i],array[j]])
            }
        }
    }

}
console.log(sumOfZero([-5,-4,-2,1,3,4,6]));