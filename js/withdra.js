
/* 



*/

    //step 1:
document.getElementById('bnt-withdraw').addEventListener('click', function(){


    //step 2:
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawInputString = withdrawInput.value ;
    const newWithdrawAmount = parseFloat(newWithdrawInputString);

    //step 3:
    withdrawInput.value = '';
    if(isNaN(newWithdrawAmount)){
        alert('Please Select Amount');
        return;
    }
   


    //step 4:

    const previousWithdrawElement = document.getElementById('withdraw-total');
    const previousWithdrawString = previousWithdrawElement.innerText;
    const previousWithdraw = parseFloat(previousWithdrawString);



    //step 6:
    const previousBalanceElement = document.getElementById('balance-total');
    const previousBalanceString = previousBalanceElement.innerText;
    const previousBalance = parseFloat(previousBalanceString);
    
    if(newWithdrawAmount>previousBalance){
        alert('Funds Not available');
        return;
    }
  


    // step 5: 
    const totalWithdrawList = previousWithdraw + newWithdrawAmount;
    previousWithdrawElement.innerText = totalWithdrawList;



    //step 7:
    const newTotalBalanceList = previousBalance - newWithdrawAmount;
    previousBalanceElement.innerText = newTotalBalanceList;


    



})