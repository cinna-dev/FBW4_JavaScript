function booking(current, future){
    current = current.getTime();
    future = future.getTime();
    if(future < 0){
        future = -(future);
    } 
    let difference = current - future;
    if(difference < current ){
        return `Select a future Date please.`
    }else if(future > current){
    return 'Your book to the event for the 25th April 2019 is already guaranteed!';
    }
}
currentDate = new Date();
myDate = new Date('6-12-2019');
console.log(booking(currentDate, myDate))


///////////////////////////////////////////

/* 
function booking(current, future){
    current = current.getTime();
    future = future.getTime();
    if(future < current ){
        return `Select a future Date please.`
    }else if(future > current){
    return 'Your book to the event for the 25th April 2019 is already guaranteed!';
}
    if(future.getFullYear()< current.getFullYear() || future.getFullYear()< current.getFullYear() && future.getMonth()< current.getMonth() || future.getFullYear()< current.getFullYear() && future.getMonth() < current.getMonth() && future.getDate()< current.getDate()){
        return `Select a future Date please.`
    }else if(future.getFullYear() > current.getFullYear() || future.getFullYear() > current.getFullYear() && future.getMonth()> current.getMonth() || future.getFullYear() > current.getFullYear() && future.getMonth() > current.getMonth() && future.getDate() > current.getDate()){
    return 'Your book to the event for the 25th April 2019 is already guaranteed!';
}
}
currentDate = new Date();
myDate = new Date('3-10-2019');
console.log(booking(currentDate, myDate)) */