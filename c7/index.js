//Task 
// So express modulot:
// 1. kreirajte nov server
// 2. na home page ispiete "Hello students of SEMOS!"
// 3. na /hello ispisete "Hello world"
// OPTIONAL  na adresa "/hello/:name" ispisete na mestoto na (:name)
//vaseto ime i ispisete go vo browserot

//Struktura na programite spored MVC pattern:
// 1. UI (Frontend) - vo ovaa zadaca kaj nas toa ni se html files vo views folderot ->
// -> 2. Router (kaj nas toe e vo index.js, nemame potreba za poseben router file) ->
// -> 3. Controller (kaj nas toa e logikata vo calculator.js)->
// -> 4. Model (Vo ovaa zadaca nemame entity a so toa ni model) ->
// -> Database (kaj nas vo ovaa zadaca nema da imame, megutoa od narednite casovi toa ke ni bide fajlovite data.json)

const express = require("express");
const { getCalculator, postCalculator } = require("./controllers/calculator");

const app = express()

app.use(express.urlencoded({ extended: false}));

app.get("/", (req, res) => {
    res.send("Home page of the application");
});

app.get("/hello/:name", (req, res) => {
    //queryString starts from ?
    //req.params
    //req.query

    res.send(req.params);
});

app.get("/calculator/:op/:a/:b", (req, res) => {

    const {a, b, op} = req.params;

    let result;

    switch(op){
        case "sobiranje":
            result = Number(a) + Number(b);
            res.end(`${result}`);
            break;
        case "odzemanje":
            result = Number(a) - Number(b);
            res.end(`${result}`);
            break;
        case "mnozenje":
            result = Number(a) * Number(b);
            res.end(`${result}`);
            break;
        case "delenje":
            result = Number(a) / Number(b);
            res.end(`${result}`);
            break;
        default:
            res.end("OK");
    }
});

app.get("/calculator", getCalculator);
app.post("/calculator", postCalculator);

app.listen(8080, (err) =>{
    if (err) console.log("Greska", err);
    console.log("server listening on port 8080!");
});

//Homework

// 1. Home - display data for cars(/cars), books(/books), cites(/cities)... on a server with express
//Example: 
// const data = {
//    cars:  ['Car 1', 'Ferrari', 'Car 3'],
//    books: ['Book 1', 'Book 2', 'Book 3'],
//    cities: ['New York', 'Sydney', 'Ohrid']
//}
// 2. Cars, books, cities - route with query(Hint: req.query) display single car, book, city
//Example we have the cars on a route /cars
// const {query} = req.query;
// const car = `Car ${query}`
// 3. Fetch data from https://jsonplaceholder.typicode.com/users
// 4. Display users from this API (just the names)
// OPTIONAL - html and css

//---------------------------------------------------------------------------------------------------

// EJS (Embedded JavaScript), other simillar templating engines are Pug(Jade), Handlbars
// Templating rendering engine
// Partial views
// Syntex:
    // <% %> - Executes JavaScript code without outputting any HTML.
    // <%= %> - Outputs the result of JavaScript expression as HTML-escaped content.
    // <%- %> -  Outputs the result of the JavaScript expression as raw, unescaped content
    // <%# %> - Comments that are not included in the rendered output
    // <% include %> - Includes another EJS template file.