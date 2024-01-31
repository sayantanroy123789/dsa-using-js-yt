function apple(){

    let totalApple=0;
    let money=100;
    function buyApple(x){
        // console.log(x);
        if(x>0){
            console.log('i have ', x ,'rs', totalApple,'apple');
            buyMore(x);
        } else{
            console.log('dont have enough money', totalApple,'apple');
        }
        

    }
    function buyMore(x){
        totalApple++;
        buyApple(x-10);
    }
    buyApple(money);
}
apple();