//Task
// 1. Install axios or any simmilar module to get the data from https://jsonplaceholder.typicode.com/users
// 2. Display the data from that API - usernames
// 3. Dislplay the data from that API - their phone numbers and websites
// HTML

const express = require("express");

const app = express();

//EJS
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    let data = {
        fullName: "Trajce Trajceski",
        ime: "Gjoko",
        prezime: "Trpeski",
        array: [{imeNaElementot: "Element1"}, {imeNaElementot: "Element2"}],
        books: [{author: "JK Rowling", year: 2000}, {author: "George Lucas", year: 1977}],
    };

    res.render("index", data);
});

app.listen(8000, (err) => {
    if(err) console.log(err)
    console.log("Server started");
});

//Homework 
//1. na route /analiza (app.get, metodata da bide GET)
//2. treba da se pojavuva formular vo koj ke ima textarea input vo koj ke se vnesuva text
//3. pri pravenje na submit na formularot, podatocite ke se isprakaat na /analiza (istiot url, samo metodata ke bide POST-postback)
//4. Logika:
// Tekstot vnesen vo text-area-ta ke bide analiziran i ispisan po slednive tocki:
    //vkupen broj na karakteri
    //vkupen broj na zborovi pomali od 5 karakteri
    //vkupen broj na zborovi pogolemi od 5 karakteri
    //vkupen broj na zborovi ednakvi na 5 karakteri
    //vkupen broj na recenici
    //vkupen broj na zborovi
    //BONUS broj na zborovi koi pocnuvaat na edna od slednive karakteri a, o, u, i, e (i so mali i so golemi)

//Hints
//1. povikajte gi vo index.js modulite express i ejs, napravete edna ruta /analiza i edna post ruta /analiza
//2. vo controllers napisete eden kontroler(handler) i vo nego vi  vazno da imate 2 funkcii getAnalysis i postAnalysis
//3. napravete vo views folder UI-to da vi bide ili so html formi (so parseTemplate) kako na cas 7, ili so ejs kako na ovoj cas sto napravivme
//4. Prikazete so bilo koj od niv vnesot na tekstot i rezultatot
//Final hint: pri getAnalysis vratete res.render("get-forma(ili html ili ejs tip na fajl)")
// pri postANalysus vratete res.render("post-forma(html ili ejs tip na fajl), ...data")