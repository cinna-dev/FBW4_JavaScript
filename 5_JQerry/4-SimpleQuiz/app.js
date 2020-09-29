function submitAnswers(e) {
    let total = 5;
    let score = 0;
    //Get Usr Input
    //Vanilla
    // let q1 = document.forms['quizForm']['q1'].value
    let q1 = $('input[name="q1"]:checked').val() //.value
    let q2 = $('input[name="q2"]:checked').val()
    let q3 = $('input[name="q3"]:checked').val()
    let q4 = $('input[name="q4"]:checked').val()
    let q5 = $('input[name="q5"]:checked').val()

    //Validation

    for (i = 1; i <= total; i++) {
        if (eval(`q${i}`) == null || eval(`q${i}`) == '') {
            alert('You missed question ' + i);
            return false;
        }
    }
    
    // check correct answers
    let answers = ['b', 'a', 'd', 'b', 'd'];
    $.each(answers, (i, item) => {
        let k = i + 1;
        if (eval(`q${k}`) == item) {
            score++;
        }
    });

    //display Results
    $('#results').html(`<h3>You scored <span>${score}</span> out of <span>${total}</span> </h3>`)
    alert(`You scored ${score} out of ${total}`)

    return false
    e.preventDefault()
}

let name1 = 'Safwan'
console.log(eval('name' + 1)) //eval makes it read as a variable