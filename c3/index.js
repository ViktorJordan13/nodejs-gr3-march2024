//npm init -y : vi gi inicijalizira core modules vo Node.js vo package.json
//npm i : vi gi instalira tie moduli sto gi imate vo package.json i vi go kreira

const { error } = require("console");
const fs = require("fs");

const fileWrite = (filename, data) => {
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


//Ako na fajlot mu treba poveke vreme da se zapise, vo toj slucaj "File written succesfully"
//ke ni se ispise bes toa vsusnot da e izvrseno i so toa tocno
// fileWrite("data.txt", "test");
// console.log("File written succesfully");



// fs.readFile("data.txt", 'utf-8');

// Promises can be done with then/catch i finally

//then -> when the result of the Promise is succesfull
//catch -> when the result of the Promise has failed
//finally -> will always be executed, no matter if the result of the Promise is succesfull or not

// fileWrite("test.txt", "test")
//     .then(() => {
//         console.log("File written succesfully");
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log("This will always be executed");
//     });

// ES 7 async/await with try/catch ("Syntactical sugar" === sintaksata e poubava/pocitliva)

//IIFE - immediately invoked function expression - se izvrsuva stom kodot so svoeto izvrsuvanje
// dojde do toj del od kodot

// (async() => {
//     await fileWrite("test1.txt", "this is a test 1");
//     await fileWrite("test2.txt", "this is a test 2");
//     await fileWrite("test3.txt", "this is a test 3");
//     await fileWrite("test4.txt", "this is a test 4");
// })();

const main = async() => {
    await fileWrite("test1.txt", "this is a test 1");
    await fileWrite("test2.txt", "this is a test 2");
    await fileWrite("test3.txt", "this is a test 3");
    await fileWrite("test4.txt", "this is a test 4");
};

// main();

//Sto ke se izvrsi prvo ?

// console.log("Izvrsi se prvo");

// //synchronous
// const fileContents = fs.readFileSync("test.txt", "utf-8");
// console.log(fileContents);

// console.log("Second");

// //asynchronous
// fs.readFile("test1.txt", "utf-8", (error, data) => {
//     if(error){
//         console.log(error);
//     }else{
//         console.log(data);
//     }
// });

// console.log("Treto");

//Task 
// 1. Write(Create if does not exist yet) a file with your: fullname, age, profession
// 2. Read that file and display the contents
// Bonus:
// Write and Read should be in local modules and imported

const writeFileModule = require("./writeFIle");
const readFileModule = require("./readFile");

const filename = 'personalInfo.txt';
const data = 'Full Name: Viktor Jordanoski\nAge: 29\nProfession: Software Engineer';

//writeFileModule.writeFile(filename, data);
//readFileModule.readFile(filename);

// Homework
// 1. write file with fs -> core module
// 2. make a function in another file (Simple hello world) and use it in another file -> local module
// 3. find whatever package (module) on npmjs.com and use -> third-party module

// ----------------------------------------------------------------------------------------------------

//Server - kompjuter sto cuva odredeni podatoci
//Client - kompjuter sto gi koristi tie podatoci od serverot

// http - klientot vika: daj mi gi podatocite === request, serverot vika: eve ti gi podatocite === response

// CRUD (Create, Read, Update, Delete)

//http request methods
// 1. GET (Read) -> no body, has path for requesting data from server -> READS EXISTING DATA
// 2. POST (Create) -> has body -> CREATES NEW ENTRY (pacientot od primerot)
// 3. PUT -> has body (Update-deletes old data, overwrites it with new data) -> UPDATES EXISTING ENTRY (pacientot)
// 4. PATCH -> has body (Update-doesn't delete the old data, only changes specific parts of it) -> UPDATES EXISTING ENTRY
// 5. DELETE (Delete) -> body is optional -> DELETES AN ENTRY

//example of body
    const account = {
        name: "Viktor",
        surname: "Jordanoski",
        age: 28
    }

//http response types

//100 - Information
//200 - Success
//300 - Redirect
//400 - Client error messages
//500 - Server error messages

const http = require("http");

//Primer 

// const server = http.createServer((req, res) => {
//     res.write("TestTESTtest");
//     res.end();
// })

// server.listen(8080);

const url = require("url");

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method // GET, POST, PUT, PATCH, DELETE

    if (url === "/"){ //Home endpoint
        res.write("Home");
        res.end();
    }
    if (url === "/student"){ 
        res.write("Uste malce studenti");
        res.end();
    }
});

server.listen(8080);