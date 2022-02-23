function updateInputField(inputId){
    const depositInputField = document.getElementById(inputId);
const depositAmountText = depositInputField.value;
const depositAmount = parseFloat(depositAmountText);


//clear deposit input field
depositInputField.value ='';
return depositAmount;
}
//update total field
function updateTotalField(totalId,depositAmount){
    const depositTotal = document.getElementById(totalId);
    const currentDepositText = depositTotal.innerText;
    const currentDeposit = parseFloat(currentDepositText);
    depositTotal.innerText =currentDeposit + depositAmount;
}

function getCurrentBalance(){
    const balanceTotals = document.getElementById("balanceTotal");
    const currentBalanceTotalText = balanceTotals.innerText;
    const currentBalanceTotal = parseFloat(currentBalanceTotalText);
    return currentBalanceTotal;

}
//update balance updateTotalField
function updateBalance(depositAmount,isAdd){
    /* const balanceTotals = document.getElementById("balanceTotal");
const currentBalanceTotalText = balanceTotals.innerText;
const currentBalanceTotal = parseFloat(currentBalanceTotalText); */
const currentBalanceTotal = getCurrentBalance();

if(isAdd==true){
    balanceTotal.innerText = currentBalanceTotal +depositAmount;
}
else{
    balanceTotal.innerText = currentBalanceTotal - depositAmount;
}


}






//get deposit button event handler
document.getElementById("deposit-btn").addEventListener('click', function(){
/* const depositInputField = document.getElementById("deposit-input-field");
const depositAmountText = depositInputField.value;
const depositAmount = parseFloat(depositAmountText); */

const depositAmount=updateInputField("deposit-input-field");
if(depositAmount>0 ){
    updateTotalField("depositTotal",depositAmount);
updateBalance(depositAmount,true);
}


/* const depositTotal = document.getElementById("depositTotal");
const currentDepositText = depositTotal.innerText;
const currentDeposit = parseFloat(currentDepositText);
depositTotal.innerText =currentDeposit + depositAmount; */

//update balance
/* const balanceTotals = document.getElementById("balanceTotal");
const currentBalanceTotalText = balanceTotals.innerText;
const currentBalanceTotal = parseFloat(currentBalanceTotalText);

balanceTotal.innerText = currentBalanceTotal +depositAmount;
 */


})

//get withdraw button event handler
document.getElementById("withdraw-btn").addEventListener("click", function(){

    /* const withdrawInputField = document.getElementById("withdraw-input-field");
const withdrawAmountText =withdrawInputField.value;
const withdrawAmount = parseFloat( withdrawAmountText); */
const withdrawAmount = updateInputField("withdraw-input-field");
const currentBalance = getCurrentBalance();
if( withdrawAmount >0 && withdrawAmount<currentBalance){
    updateTotalField("withdrawTotal",withdrawAmount);
updateBalance(withdrawAmount,false);
}
else{
    console.log("Shala gorib");
}


/* const withdrawTotal = document.getElementById("withdrawTotal");
const  currentWithdrawTotalText = withdrawTotal.innerText;
const currentWithdrawTotal =parseFloat(currentWithdrawTotalText);

withdrawTotal.innerText =currentWithdrawTotal + withdrawAmount; */




//update balance totals
//update balance
/* const balanceTotals = document.getElementById("balanceTotal");
const currentBalanceTotalText = balanceTotals.innerText;
const currentBalanceTotal = parseFloat(currentBalanceTotalText);

balanceTotal.innerText = currentBalanceTotal - withdrawAmount; */

/* //clear withdraw input withdrawInputField
withdrawInputField.value =''; */
})

