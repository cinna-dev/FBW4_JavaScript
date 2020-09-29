count = 0
//console.log($(`#slider img:nth-child(${i+1})`)
$.each($('#slider .imgContainer'), (i, item) => {
    if (i !== count) {
        $(`#slider .imgContainer:nth-child(${i+1})`).animate({
            opacity: 0,
            display:"none"
        })
    }
})

$('#slider').on('click', e => {
    let arr = $('#slider .imgContainer')// jQuery Collection // not Array
    console.log(arr )
    if (e.target.id == 'right') {
        count = count < arr.length - 1 ? count + 1 : 0
    } else if (e.target.id == 'left') {
        count = count > 0 ? count - 1 : arr.length - 1
    }
    $.each(arr, function(i, item) {
       // console.log($(this))
        //console.log(item, i, count)
        if (i === count) {
            $(this).animate({
                opacity: 1,
                display:"block"
            })
        } else {
            $(this).animate({
                opacity: 0,
                display:"none"
            })
        }
    })
})


let arr2 = $('#slider .imgContainer').toArray()
console.log(arr2)
//arr2.fadeOut()

let arr3 = $('#slider .imgContainer')
console.log(arr3)
//arr3.fadeOut()

// can only use jQuery methods with $ sign 

//addClass()
//removeClass()
//find()
//prev()
//next()
