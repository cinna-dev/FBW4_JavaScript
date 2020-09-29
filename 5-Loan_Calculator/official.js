//Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);


//UI Varialbes
const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const years = document.getElementById('years');
const mounthlyPayment = document.getElementById('mounthly-payment')
const totalPayment = document.getElementById('total-payment')
const totalInterest = document.getElementById('total-interest')
const results = document.getElementById('results')
const loader = document.getElementById('loading')

//Calculate Results
function calculateResults(e){

    //Principles
    let amountValue = parseFloat(amount.value);
    let interestValue = parseFloat(interest.value)/100 /12;
    let yearsValue = parseFloat(years.value)*12;

    //Compute monthly payment
    const x = Math.pow(1 + interestValue, yearsValue);
    const monthly = (amountValue * x * interestValue) / (x -1);
   
    if(isFinite(monthly)){//isFinite() boolean , true if number or converted to number
    //show loader    
    loading.style.display = 'block';
    setTimeout(clearLoaderShowResults, 2000)

        mounthlyPayment.value = monthly.toFixed(2); // rounding number after the 2nd decimal
        totalPayment.value = (monthly * yearsValue).toFixed(2);
        totalInterest.value = ((monthly * yearsValue)-amountValue).toFixed(2);
    }else{
        showError('Error , please show results')
    }

    //preventDefault
    e.preventDefault()
}
function clearLoaderShowResults(){
            //Hide loader
            loader.style.display = 'none';
            //Show results
            results.style.display = 'block';
    }
    //Show Error
    function showError(error){
         //Hide results
         loader.style.display = 'none';
         //Hide results
         results.style.display = 'none';

        //Create d div
        const errorDiv = document.createElement('div');

        //Add class
        errorDiv.className = 'alert alert-danger';

        //Creaate text node and append to div
        errorDiv.appendChild(document.createTextNode(error))

        //Get Elements
        const card = document.querySelector('.card')
        const heading = document.querySelector('.heading')

        //Insert error above heading
        card.insertBefore(errorDiv,heading)   //parentElement.( insertElement, ChildElement )
        //hide the loader and the results

        //Hide results
        loader.style.display = 'none';
        //Hide results
        results.style.display = 'none';

        //Clear Error after 3 seconds
        setTimeout(function(){
            document.querySelector('.alert').remove()
        },3000)
    }