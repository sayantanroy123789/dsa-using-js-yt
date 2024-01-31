// using loop
const itrative=(num)=>{
    let ans=1;
    for(let i=num;i>0;i--){
        ans=ans*i
    }
    console.log(ans);

}
itrative(5);

// using recursion
function recursion(num1){
    if(num1==0){
        return 1
    }
    return num1*recursion(num1-1);

}
console.log(recursion(4));