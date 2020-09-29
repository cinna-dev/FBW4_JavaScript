$(document).ready(() => {
    let left = 0
    let top = 0
    let keyUp = false
    let keyDown = false
    let keyLeft = false
    let keyRight = false
    $(document).keydown(e => {
        if (e.which == 37) {
            keyRight = true;
        }
        if (e.which == 39) {
            keyLeft = true;
        }
        if (e.which == 38) {
            keyUp = true;
        }
        if (e.which == 40) {
            keyDown = true;
        }
    })

    function move() {
        console.log(keyLeft)
        if (keyRight) {
            left = left - 10
            $('#mario').animate({
                left: left
                
            },1)
        }
        if (keyLeft) {
            console.log('go')
            left = left + 10
            $('#mario').animate({
                left: left
            },1)
        }
        if (keyUp) {
            top = top - 10
            $('#mario').animate({
                top: top
            },1)
        }
        if (keyDown) {
            top = top + 10
            $('#mario').animate({
                top: top
            },1)
        }
        keyUp = false
        keyDown = false
        keyLeft = false
        keyRight = false
    }
    setInterval(move, 1)
})
