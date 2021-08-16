// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {

    // get the amount depositting
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    // update Deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // Update Ballance in Account
    const ballanceTotal = document.getElementById('ballance-total');
    const ballanceTotalText = ballanceTotal.innerText;
    const previousBallanceTotal = parseFloat(ballanceTotalText);
    const newBallanceTotal = previousBallanceTotal + newDepositAmount;
    ballanceTotal.innerText = newBallanceTotal;

    // clear the deposit input field
    depositInput.value = '';
})
// Handle Withdraw Event Handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);

    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

// Decrease Update Ballance
const ballanceTotal = document.getElementById('ballance-total');
const previousBallanceText =ballanceTotal.innerText;
const previousBallanceTotal = parseFloat(previousBallanceText);
const newBallanceTotal = previousBallanceTotal - newWithdrawAmount;
ballanceTotal.innerText = newBallanceTotal;

    // clear withdraw input 
    withdrawInput.value = '';
})