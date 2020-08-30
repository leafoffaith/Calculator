const display       = document.getElementById('calculator-display'),
      decimal       = document.getElementById('decimal'),
      clear         = document.getElementById('clear'),
      operators     = document.querySelectorAll('.btn--operator'),
      numbers       = document.querySelectorAll('.btn--number')

let displayValue, pendingValue, arr, temp, result; 

displayValue = '0';
arr = [];

//======================
//HELPERS
//======================

//Buttons with certain IDs can be targeted directly as below

clear.onclick = () => {
    displayValue = '0'
    pendingValue = undefined;
    arr = [];
    display.innerText = displayValue
}

decimal.onclick = () => {
    if(!displayValue.includes('.'))
        displayValue += '.'
    display.innerText = displayValue;
}

update = (e) => {
    let btnText = e.target.innerText
    if (displayValue === '0')
        {
            // console.log(btnText)
            displayValue = ""
            // console.log(display.innerText)
        }
    displayValue += btnText
    display.innerText = displayValue
}

performOperation = (e) => {
    // console.log("hello")
    let cont = e.target.innerText

    switch(cont){
        case '+':
            pendingValue = displayValue
            displayValue = '0'
            display.innerText = displayValue
            arr.push(pendingValue)
            arr.push('+')
            // console.log(arr)
            break;
        case '-':
            pendingValue = displayValue
            displayValue = '0'
            display.innerText = displayValue
            arr.push(pendingValue)
            arr.push('-')
            break;
        case '/':
            pendingValue = displayValue
            displayValue = '0'
            display.innerText = displayValue
            arr.push(pendingValue)
            arr.push('/')
            // arr.push('÷')
            break;
        case '*':
            pendingValue = displayValue
            displayValue = '0'
            display.innerText = displayValue
            arr.push(pendingValue)
            arr.push('*')
            break;
        case '=':
            pendingValue = displayValue
            displayValue = '0'
            display.innerText = displayValue
            arr.push(pendingValue)
            temp = arr.join(' ')
            result = eval(temp)
            console.log(result)
            display.innerText = result
            arr = []; //to clear the array
            break;
        default:
            break;  
    }     
}

//======================
//EVENT LISTENERS
//======================

numbers.forEach(el => {
    el.addEventListener('click', update);
})

operators.forEach(el => {
    el.addEventListener('click', performOperation);
})






 
