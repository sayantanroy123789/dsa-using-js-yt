//ittrative
function recursion1(number){
let arr=[0,1];
let sum=0;
for(let i=0;i<=number;i++){
    sum=arr[i]+arr[i+1];
    arr.push(sum)

}
console.log(sum);
console.log(arr);

}
recursion1(5);

//recursive
function recursion2(num){
    if(num<2){
        return 1
    }
return recursion2(num-1)+recursion2(num-2)
}
console.log(recursion2(5));
//0,1,1,2,3,5,8