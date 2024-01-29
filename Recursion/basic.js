function basic(x){
    console.log(x);
    // basic();
    if(x<10){
        basic(x+1)
    }
}
let data=1;
basic(data);