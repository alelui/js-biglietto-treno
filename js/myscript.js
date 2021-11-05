
let age = parseInt(prompt('How old are you'));

let km = parseInt(prompt('How many km'));

let kmPrice = km * 0.21;

let yougDisc = kmPrice * 0.20;

let oldDisc = kmPrice * 0.40;

let finalPrice;


if ( age < 18 ){

    finalPrice = kmPrice - yougDisc;

}else{
    if ( age >= 65 ){

        finalPrice = kmPrice - oldDisc;
    }else{

        finalPrice = kmPrice;
    }
 
}

document.getElementById('ticket').innerHTML = 'The final Price is: ' + finalPrice.toFixed(2); + '€';

