const functionFactorial = number =>{
    if(number===0 || number===1)return 1
    else return number * functionFactorial(number-1);
};

const functionFibnocci = number =>{
    if(number<1)throw new Error("No fibnocci number for the given position") 
    else if(number===1 || number===2)return number-1
    else return functionFibnocci(number-1) + functionFibnocci(number-2)
};

(()=>{
    for (let index = 1; index < 10; index++) {
        console.log( functionFibnocci(index));  
    }

    for (let index = 1; index < 10; index++) {
        console.log( functionFactorial(index));  
    }
    
})()