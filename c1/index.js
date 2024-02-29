//Basic console log to explain what is interpreted language.
console.log("Dobredojdovte vo predavanjata Node.js!");

console.log("Run this first");

//Zagradi (brackets)
// () - mali (za parametri)
// [] - sredni (za nizi-arrays)
// {} - golemi (za block scoped) - block vi e se sto imate od '{' do '}'

//Normal/Basic function
function hello(){
    const testArray = [1, 2, 3];
    console.log("Hello world");
}

//Call
hello();

//Reference
var thisIsAReference = hello();

//Type (Tipovi)
// Primitivni tipovi
// string: "", ''
// number: 1, 2, 3, 4, 2.8 ...
// boolean: true, false (ako ne e inicijalizrano null - prazno e)

// Ne primitivni tipovi (Complex)
// 1. nizi (array)
// 2. objekti 

//Variables (Promenlivi)
//x=1 (vrednosta mu e 1)
//x+=1 === x = x + 1 (sega vrednosta mu e 2)

//var, const, let
//var broj = 1 // promenlivata sum ja deklariral kako var, megutoa nejziniot tip e number.
 // promenlivata sum ja deklariral kako const, megutoa nejziniot tip e string

// function hello2(){
//     const testArray = [1, 2, 3];
//     console.log("Hello world");
    
//     const drugBroj = "2"
//     var tretBroj = 3
//     let cetvrtiBroj = 4
// }

// drugBroj = "3" //ke javi greska
// tretBroj = 4 // nema da javi greska
// cetvrtiBroj = 5 // ke javi greska

// var - refers to globaj object or value (Postoi i nadvor od scope-ot ( {} ) )
// let - block scoped, we can change both primitive and complex ones
// const - block scoped, used when we want to declare a constant value, cannot change primitive types

//Primer za const
const primitivenTip = 10
//primitivenTip = 11 // ke javi greska, zatoa sto ova e primitiven tip, a tie ne mozat da se smenat
// ako se deklarirani so const

const compleksenTip = [2, 4, 6, 8];
// .push -> compleksenTip.push(10), ke go dodade 10 na krajot na nizata
// .pop -> compleksenTIp.pop(), ke go trgne posledniot element od krajot na nizata
compleksenTip.push(10);
compleksenTip.pop();

//Functions
//Tipovi na funkcii

//anonimna funkcija (nema ime)
() => {}

// 1. Normal/Basic function
function NormalBasicFunction(){
    
    console.log("This is an example of a normal/basic function");
}
NormalBasicFunction();

// 2. Function declaration/ declarative function
const functionDeclaration = function(){
    console.log("This is an example of a declative function");
}

functionDeclaration();

// 3. Arrow function/fat arrow function

let arrowFunction = () => {
    console.log("This is an example of a fat arrow function");
}

arrowFunction();

//Task:
//Napisete go svoeto ime i prezime so site 3 tipa na gorenavedeni funkcii 
//Bonus: napravete basic calculator funkcija (+, -, *, /)

function calculatorIfElse (operation, num1, num2){

    if(operation === 'multiply'){
        return num1 * num2;
    }
    if(operation === 'divide'){
        return num1 / num2;
    }
    if(operation === 'sum'){
        return num1 + num2;
    }
    if(operation === 'difference'){
        return num1 - num2;
    }
    else{
        return "Unsupported operation";
    }
}

console.log(calculatorIfElse('multiply', 5, 4));
console.log(calculatorIfElse('divide', 5, 4));
console.log(calculatorIfElse('sum', 5, 4));
console.log(calculatorIfElse('difference', 5, 4));
console.log(calculatorIfElse('logarhytm', 5, 4));

//Bonus Bounus: napravete ja basic calculator funkcijata (+, -, *, /), no so koristenje 
// na swtich i case

function calculatorSwitch(operation, num1, num2){
    let result;
    switch(operation){
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        case 'sum':
            result = num1 + num2;
            break;
        case 'difference':
            result = num1 - num2;
            break;
        default:
            result = "Unsupported operation"   
    }

    return result;
}

console.log(calculatorSwitch('multiply', 5, 4));
console.log(calculatorSwitch('divide', 5, 4));
console.log(calculatorSwitch('sum', 5, 4));
console.log(calculatorSwitch('difference', 5, 4));
console.log(calculatorSwitch('logarhytm', 5, 4));

//Podgotovki za nareden cas (Istrazete i objasnete sto znacat i sto pravat ovie komandi)
// 1. npm init -y
// 2. npm i
// 3. module
//Primer:
var module = require('fs');