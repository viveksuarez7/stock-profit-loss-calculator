const intialPrice = document.querySelector('#intial-price');
const shareQuantity = document.querySelector('#quantity-share');
const currentPrice = document.querySelector('#current-price');
const btnInfo = document.querySelector('#btn-info');
const output = document.querySelector('#Output');

function calculateProfitAndLoss(currentPrice,intialPrice,shareQuantity){
    //Profit logic
    let calc
    if(currentPrice>intialPrice){
         calc = (currentPrice-intialPrice)*shareQuantity;
    }
    else if(intialPrice>currentPrice){
          calc = (intialPrice-currentPrice)*shareQuantity;
    }

    return calc;

}
function submitHandler(){
    currentPriceVal = currentPrice.value;
    intialPriceVal = intialPrice.value;
    shareQuantityVal = shareQuantity.value;
    profitPercentage = parseFloat(((currentPrice.value-intialPrice.value)/(intialPrice.value))*100).toFixed(2)
    lossPercentage = parseFloat(((intialPrice.value-currentPrice.value)/intialPrice.value)*100).toFixed(2);
    let calcu = calculateProfitAndLoss(currentPriceVal,intialPriceVal,shareQuantityVal);
    let calc = parseFloat(calcu).toFixed(2)
    if(calculateProfitAndLoss(currentPriceVal,intialPriceVal,shareQuantityVal)>0){
        output.innerText = `Your profit is Rs ${calc} and Profit Percentage is ${profitPercentage} % :) `;
        output.style.color='green'
    }
    else if(calculateProfitAndLoss(currentPriceVal,intialPriceVal,shareQuantityVal)<0){
          output.innerText = `Your loss is Rs ${Math.abs(calc)} and loss Percentage is ${lossPercentage} % :( `;
          output.style.color='red'     
    }
    else{
        output.innerText=`No Pain no Gain and No Gain so no Pain `
        output.style.color='white'
    }

}

btnInfo.addEventListener('click',submitHandler);

