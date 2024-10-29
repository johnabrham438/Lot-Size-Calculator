const accountBalance = document.getElementById("account-balance");
const riskPercentage = document.getElementById("risk-percentage");
const stopLoss = document.getElementById("stop-loss");
const pipValue = document.getElementById("pip-value");
const calculateBtn = document.getElementById("calculate-btn");
const outputContainer =  document.getElementById("output-container");
const output =  document.getElementById("output");
function checkInput(){
  const inputContainer = document.getElementById('input-container');
  const inputs = inputContainer.querySelectorAll('input');
  let isEmpty = false;
  inputs.forEach((input) => {
   if(input.value === ''){
     isEmpty = true;
   }
  })
  if(isEmpty){
     return;
  }else{
   calculateLot(accountBalance.value, riskPercentage.value, stopLoss.value, pipValue.value);
   inputs.forEach((input) => {
     input.value = "";
     })
  }
          
}
function calculateLot(accountbalance,riskpercentage,stoploss,pipvalue){
   const riskAmount = (accountbalance * riskpercentage/100);
   const lotSize = riskAmount / (stoploss * pipvalue);
   outputContainer.style.display = 'flex';
   output.textContent = `Money at risk : US$${riskAmount}, Recommended Lot Size: ${lotSize.toFixed(2)}`;


}
calculateBtn.addEventListener('click' , checkInput);