
// Global scope 
const favNumber = 99;

function add(first , second){
    const sum = first + second;
    console.log(sum); // locale scope 
    
    console.log(favNumber) // from global scope 
}

const total = add(22,33)
