//Homework 1.4 - explanation

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

//4. Градови подредени според групната висина на просек на студентите од нив.

const grupiraniStudenti = {};
for( let student of studenti){
    if(grupiraniStudenti[student.grad]){
        grupiraniStudenti[student.grad].push(student);
    } else{
        grupiraniStudenti[student.grad] = [student];
    }
}

const gradovi = [];
for(let grad in grupiraniStudenti){
    const studentiVoGrad = grupiraniStudenti[grad];
    const prosekVoGrad = studentiVoGrad.reduce((sum, student) => sum + student.prosek, 0) / studentiVoGrad.length;
    gradovi.push({ grad, prosek: prosekVoGrad});
}

gradovi.sort((a, b) => b.prosek - a.prosek);

// console.log( "Resenie na 4ta podzadaca: ", gradovi);

// asynchronous language -> non blocking on a request
// event driven -> reaction to an action iniated by a user or computer system
// it enables writing Javascript on server side
// V8 engine - chromium

const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type": "text/html"});
    res.end("<h1>This is contianuation of previous class about http module</h1>");
});

// server.listen(8001);

const url = require("url");

const serverWithURl = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type": "text/html"});
    const q = url.parse(req.url, true).query;
    const txt = q.year + " " + q.month +  " "  + q.quarter;
    res.end(txt);
});

// serverWithURl.listen(8000);
//To test, write something like this: http://localhost:8000/?year=2024&month=March&quarter=Q1

//Regular expressions - RegEx
// so pomos na regex ke proveram dali ova e validen mejl 
//viktor.email@gmail - ova ne e validen mejl
//viktorj560@gmail.com - ova e validen mejl

//RegExp, toa e vgraden object vo Javascript
const regex = /is/g; // ova vi e patternot, odnosno semata so koja sto gi sporeduvate vrednostite
const text = "This is an example text";
const result = regex.test(text);
console.log(result);

// Sintaksa od regularnite izrazi

//  ., ?, !... - odgovara na  poedinecen znak 
//  \d - odgovara na bilo koja znak sto e brojka
// \w - odgovara na bilo koj alfanumericen znak
// + - odgovara na ednaska ili poveke pati povtoren predhoden izraz
// * - odgovara na nula ili poveke pati povtoren predhoden izraz
// ? - oznacuva deka predhodniot izraz moze da bide prisuten ili otsuten
// [] - definira mnozestvo znakovi koe odgovara na eden od znakovite vo mnozestvoto
// () - grupira del od regularnot izraz

// Aplikacijata obicno se organizira na:
// 1. glaven/infrastrukturen (server) del -> konfiguracija i startuvanje na server, port, menadziranjeto na http/https requests - BACKEND
// 2. sporeden/aplikaciski (handler) del -> implementacija na razlcni routes(ruti), functions, handlers koi ja obrabotuvaat logikata i baranjata na klientite - FRONTEND

//Homework
// 1. Local module for file write and read
// 2. Use append to append data and then read the new data appended
// 3. Read the new data when change has been made with the append
// BONUS
// async/await shouled be wrapped in try/catch