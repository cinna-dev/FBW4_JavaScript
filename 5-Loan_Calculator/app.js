//Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);
//UI Varialbes
const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const years = document.getElementById('years');
const mounthlyPayment = document.getElementById('mounthly-payment')
const totalPayment = document.getElementById('total-payment')
const totalInterest = document.getElementById('total-interest')
//Calculate Results
function calculateResults(e){
    console.log('Calculating ...');
    //Compute monthly payment
    let myAmount = parseFloat(amount.value);
    let myInterest = parseFloat(interest.value)/ 100 / 12;
    let months = parseFloat(years.value)*12;

    let finalInterest = Math.pow(1 + myInterest, months)
    let monthly = (myAmount*finalInterest*myInterest)/(finalInterest-1);
    let myTotalPayment =(monthly*months);
    let mytotalInterest = (monthly*months)-myAmount;

    console.log(myAmount,myInterest,months)
    console.log(monthly)
    console.log(Math.pow(1 + myInterest, 1)*myAmount)
    console.log(Math.pow(1 + myInterest, 12)*100)
    console.log(finalInterest*100)

    totalPayment.value = myTotalPayment.toFixed(2);
    mounthlyPayment.value = monthly.toFixed(2);
    totalInterest.value = mytotalInterest.toFixed(2)
    e.preventDefault()
}
