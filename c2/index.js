var test = "2"
// = -> inicijalizirame vrednost
// == -> proveruvame dali se dve vrednosti isti spored nivnata vrednost
// === -> proveruvame dali se dve vrednosti isti i spored nivnata vrednost i spored nivniot tip
var test2 = 2

// console.log("Test dve ednakvi", test == test2); // 2 == 2 ? -> true
// console.log("Test tri ednakvi", test === test2); // "2" === 2 ?  -> false

//Primitivni tipovi na vrednosti
// 1. number -> broj
// 2. boolean -> tocno/netocno
// 3. string -> tekst
// 4. undefined -> ne definirano, odnosno prazno mnozestvo

//console.log(test3); //ne postoi voopsto
var test3;
// console.log(test3); // postoi, megutoa vrednosta ne mu e definirana
// 5. null
var test4 = null;
// console.log(test4); // postoi, i vrednosta mu e null 

// 6. symbol

//Complex (non-primitive types)
// 1. nizi
// 2. objekti
// * funkcii

const arr = ["prvA", 2, "a", 2, "c"];
//funkcionalno programiranje
// arr.push(1);
// arr.push(12);
// arr.pop()
//console.log(arr); //const kompleksnite objekti moze da se promenat, i pokraj toa sto se deklarirani so konst
//Dolzina na nizata
//console.log("Nizata e dolga: ", arr.length);
//console.log("prv element vo nizata e : ", arr[0]);
//Nizite pocnuvaat od 0
//arr.length ni e 5, a posledniot element(c) ni e na pozicija arr[4]

//Loops-ciklusi
for(let i = 0; i < arr.length; i++){
    //console.log(arr[i]);
}

for(let i = arr.length -1 ; i >= 0; i--){
    //console.log(arr[i]);
}

//Site ovie funkcii: forEach, find, reduce, sort, filter, map... vsusnost iteriraat vrz nizata
//Smetajte kako vo sebe da imaat vgraden for loop(ciklus)

//forEach - forEach ni pominuva niz nizata
const loop = arr.forEach((el) => el); // this is wrong usage
//console.log(loop[0]);

const loops = arr.forEach((element) => {
    //console.log(element);
});

//this will write the values
for(let el of arr){
    //console.log(el);
}

//this will write the indexes (positions in the array)
for(let el in arr){
    //console.log(el);
}

//Find - idejata na find e da imame nekoj uslov, barame element sto go ispolnuva toj uslov
//const res = arr.find((el) => el === "a"); - fancy, ama potezok za razbiranje nacin
//po ednostaven nacin sto go pravi istoto
const res = arr.find((el) => {
    if(el === 2){
        return el;
    }
});

//console.log(res);

//Map - ni vraka nova niza, vo zavisnost od uslovot sto nie ke go postavime
const mapEl = arr.map((el) => el); //ednakvo raboti kako for ciklus
//console.log(mapEl);

const mapEl2 = arr.map((el) => {
    if(el === 2){
        return el;
    }
});

//console.log(mapEl2);

//Reduce - vraka edna vrednost zavisno od uslovot sto ke go postavime
const arrNums = [0, 2, 7, 10, 3, 4, 5, 6, 8, 9, 1];
const reducer = arrNums.reduce((acc, curr) => acc + curr);
//console.log(reducer);

//Sort - ni vraka sortirana niza
const sortData = arrNums.sort((a, b) => {
    if ( a < b) return -1; // ako e pomalo, go vraka nazad vo nizata (-1 mesto)
    if ( a > b) return 1; // ako e pogolemo, go stava napred vo nizata (+1 mesto)
    if (a === b) return 0; // ako se isti elementite sto gi sporeduva vo momentot, ne pravi nisto
});

//console.log(sortData);

//Filter - ni vraka niza filtrirana spored uslovot sto sme go zadale
const filterData = arrNums.filter((el) => el > 5);
//console.log(filterData);

//Objects
const student = {
    grades: [7, 8, 6, 5, 10, 9, 10, 10],
    name: "Gjuro",
    age: 20,
    university: {
        name: "UKIM",
        faculty: "FINKI",
        subject: "Computer Science"
    },
    getAverage: () => {
        //Task - zavrsete ja logicki na pauzata
        let sum = 0;
        for(let grade of student.grades){
            sum += grade;
        }
        return sum/student.grades.length;
    }
};

//console.log(student.university.faculty);
//console.log(student.getAverage());

function isEven(number){  //funkcija sto proveruva za parni broevi
    return number % 2 === 0;
}

function isOdd(number){  // funkcija sto proveruva za neparni broevi
    return number % 2 != 0;
}

// console.log(isEven(8));
// console.log(isOdd(3));

//Homework

const studenti = [
    { ime: "Bojan", prosek: 7.5, grad: "Skopje" }, //[0] => {}
    { ime: "Pero", prosek: 8.3, grad: "Bitola" },
    { ime: "Janko", prosek: 6.9, grad: "Bitola" },
    { ime: "Vesna", prosek: 9.2, grad: "Skopje" },
    { ime: "Elena", prosek: 9.9, grad: "Kumanovo" },
    { ime: "Vancho", prosek: 10, grad: "Tetovo" },
    { ime: "Elena", prosek: 9.9, grad: "Ohrid" },
    { ime: "Ivana", prosek: 6.9, grad: "Kumanovo" },
    { ime: "Natasha", prosek: 8.1, grad: "Skopje" },
    { ime: "Stanko", prosek: 7.2, grad: "Strumica" },
];

//Задачи:
//1. Сите студенти од Скопје чие име завршува на буквата а и имаат просек над 7, подредени по име (растечки)
//2. Сите студенти кои имаат просек над 9, не се од Скопје, подредени под просек, но опаѓачки
//3. Првите 3 студенти кои имаат имиња од 5 карактери(букви), подредени под просек.
//4. Градови подредени според групната висина на просек на студентите од нив.
//5. Вкупен просек на студенти чиешто име завршува на буквата а, и на сите останати

// -------------------------------------------------------------------------------------------------

// Callback function

// Primer

//obicna funkcija sto ispisuva nesto
const callMeBack = () => {
    console.log("Kartickata vi e gotova, dojdete da si ja zemete");
};

//callback funkcija
const callbackFunkcija = (fn) => {
    fn();
};

//callbackFunkcija(callMeBack);

//Javascript e single threaded jazik, se izvrsuva linija po linija kako sto cita od gore na dolu.
//Toa znaci deka ne moze paralelno da izrsuva drug proces

//Synchronous - koga ke dojdes do toj del od kodot ne prodolzuvaj natamu dodeka ne go izvrsis === blocking
//Asynchronous - koga ke stignes to toj del od kodot, pocni da go izvrsuvas, no prodolzi so izvrsuvanjeto === non blocking

//Verzii na javascript
// ES5 - Callbacks

// Callback hell - vgnezduvanje na poveke callbacks
// Primer
// function greetMe(callback){
//     if(callback){
//         fn1()
//             fn2()
//                 fn3()
//                      ...
//     }
// }

const { printMe } = require("./test");
//printMe();

// CRUD - Create, Read, Update, Delete

const fs = require("fs"); // file system - core module
//const {Validator} = require("node-input-validator"); // third party module

// ES6 - Promise

//Promises

//step 1 - prazna funkcija(funkcija so prazno telo)

const fileWrite1 = () => {

}

//step 2 - Promise e objekt, kogo go povikame so new keyword, odnosno instancirame nov objekt (Promise)

const fileWrite2 = () => {
    return new Promise();
}

//step 3 - vnatre vo Promisot imame anonimna funkcija, kako prv parametar vraka funkcija

const fileWrite3 = () => {
    return new Promise(() => {});
}

//step 4 - sega stavame pak da vraka funkcija, ama ovie ke bidat success i fail (parametri sto ke se callback funkcii)

const fileWrite4 = () => {
    return new Promise((success, fail) => {});
}

//step 5 - vnatre zapisuvame nekoj fajl

const fileWrite5 = () => {
    return new Promise((success, fail) => {
        fs.writeFile("data.txt", "Node.js course", (err) => {
            if(err) console.log(err);
            console.log("File was written succesfully");
        })
    });
}

//step 6 - namesto racno da pecatime (hardcoded), gi povikuvame callback funkciite fail() i success()

const fileWrite6 = () => {
    return new Promise((success, fail) => {
        fs.writeFile("data.txt", "Node.js course", (err) => {
            if(err){
                return fail(err)
            }else{
                return success();
            }
            
        })
    });
}

// step 7 - gi zamenuvame hardkodiranite ime na fajlot i podatocite vnatre so filename i data , gi dodavame kako input parametri

const fileWrite7 = (filename, data) => {
    return new Promise((success, fail) => {
        fs.writeFile(filename, data, (err) => {
            if(err){
                return fail(err)
            }else{
                return success();
            }
            
        })
    });
}

fileWrite7("data.txt", "Node.js course Changed");
fileWrite7("finalFile.txt", "Casot za denes e zavrsen");

// Promise reponses can be:
// 1. fulfilled (positive)
// 2. rejected (negative)
// 3. pending (in progress)

// ES7