let $ = function(id){
    return document.getElementById(id);
}

//get values on btnCalculate press / controller
function getValues(){
    //collect & parse data
    let loanAmount = ParseInt($('loanAmount').value);
    let payments = ParseInt($('payments').value);
    //allow for float later
    let rate = ParseInt($('rate').value);

    //validate data
    if (Number.isInteger(loanAmount) && Number.isInteger(payments) && Number.isInteger(rate)) {
        
        //pass data to calculate function
        let results = calculateLoan(loanAmount, payments, rate);


        //pass in calculations display data in table
        displayData(results);
        
    } else {
        alert("You must enter an integer.")
    }
}

//calculate amounts / logic
function calculateLoan(loanAmount, payments, rate){


    //monthly calculations
    totalMonthlyPayment = loanAmount * (rate/1200) / (1 - (1 + rate/1200)(-payments))

    //one month calculation
    remainingBalance = loanAmount;

    //monthly interest
    monthlyInterest = (remainingBalance * rate) / 1200;

    //principal monthly payment
    principalPayment = totalMonthlyPayment - monthlyInterest;

    //At end each month, Remaining Balance = Previous Remaining Balance - principal payments

    //total principal
    //total interest
    //total cost

}

//display the data in a table / view
function displayData(){
    

}

//reset + clear app when btnReset pressed
function resetPage(){
    alert("it works");
}