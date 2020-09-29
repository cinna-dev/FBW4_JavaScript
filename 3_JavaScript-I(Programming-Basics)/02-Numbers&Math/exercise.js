let mainArray = [];
let totalWinnings = 0;

function luckyNumber(userNum){
    let subArray = [];    
    let winnings = 0;    
    let luckyNum = Math.floor(Math.random()*100+1);  
        if(luckyNum == userNum){                      
            winnings = 100+' - Jackpot'; 
            totalWinnings += 100;
        }else if(Math.abs(luckyNum - userNum) <= 10){
            totalWinnings += 100 -10 * Math.abs(luckyNum - userNum);
            winnings = 100 - 10 * Math.abs(luckyNum - userNum);  
        }
            subArray.push(luckyNum); 
            subArray.push(userNum);
            subArray.push(winnings);
            subArray.push(totalWinnings);
            mainArray.push(subArray);

    return  mainArray ;
}
for(i=0;i<100;i++){ 
let userNumber =70 // Math.floor(Math.random()*100+1);    
luckyNumber(userNumber);
}
console.log(mainArray)

