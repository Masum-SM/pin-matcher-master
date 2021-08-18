function fourDigit(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
      return pin;
       
    }
    else{
        return fourDigit()
    }
    
    
}

function gerenratePin(){
    const pin = fourDigit();
    document.getElementById('display-pin').value=pin;
 
}

// calculator 
document.getElementById('cal-body').addEventListener('click',function(event){

    const digit = event.target.innerText;
    const calDisplay = document.getElementById('dispaly-number')
    const previousNumber= calDisplay.value;
    if(isNaN(digit)){
        if(digit == 'C'){
            calDisplay.value = '';
        }
    }
    else{
        const currentNumber = previousNumber + digit;
        calDisplay.value = currentNumber;

    }
    
})

document.getElementById('submit-button').addEventListener('click',function(){
    const pin = document.getElementById('display-pin').value;
    const displayedNumber = document.getElementById('dispaly-number').value;
    if(pin == displayedNumber){
        document.getElementById('success').style.display = 'block';
        document.getElementById('fail').style.display = 'none';
    }
    else{
        document.getElementById('fail').style.display = 'block';
        document.getElementById('success').style.display = 'none';
    }
})