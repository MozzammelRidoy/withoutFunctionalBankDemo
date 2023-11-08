/* 
    //Step 1: create a event handler. 
    //Step 2: Call and connect deposit input field.
    //Step 3: Call and Cennect Total Deposit List.
    //Step 4: Set new and previous deposit value in Total Deposit List.
    //Step 5: Call and Connect Balance List. 



*/

//Step 1:
document.getElementById('bnt-deposit').addEventListener('click',function(){
    
    //Step 2:
    const depositInputElement = document.getElementById('deposit-input');
    const depositInputElementString = depositInputElement.value ;
    const newDepositInput = parseFloat(depositInputElementString);


     //Step 7:
     depositInputElement.value = '';
    if(isNaN(newDepositInput)){
        alert('Oops Sorry. Invalid Amount');
        return;
    }
    

    //Step 3:
    const previousDiposit = document.getElementById('deposit-total');
    const previousDipositString = previousDiposit.innerText;
    const previousDipositTotal = parseFloat(previousDipositString);



    //Step 4: 
    const newDepositTotal = newDepositInput + previousDipositTotal;
    previousDiposit.innerText = newDepositTotal;

    //Step 5: 
    const previousBalance = document.getElementById('balance-total');
    const previousBalanceString = previousBalance.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceString);


    //Step 6: 
    const newTotalBalanceList = previousBalanceTotal +  newDepositInput;
    previousBalance.innerText = newTotalBalanceList;


   

})