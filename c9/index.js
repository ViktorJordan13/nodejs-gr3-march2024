//Aplikacija za dodavanje i brisenje studenti so ime, prezime, prosek i fakultet
//Arhitektura:
// Frontend-UI (Kaj nas toa ke bide views (html ili ejs)) ->
// -> Router (Kaj nas nema da ima potreba za toa bidejki ke se malce ruti, nema da imame poseben router fajl, toa ke go stavime vo index.js) ->
// -> Controller (tuka ni e programerskata logika)->
// -> Model (Kako ke ni izgleda entitetot(student) i CRUD operaciite za istiot)->
// -> databaza (Kaj nas toe ke bide fajlot students.json)

const express = require("express");
const {
    getForm,
    postForm,
    getStudents,
    getDelete
} = require("./controllers/formular")

const app = express()

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true })); //body-parser
//It is used when we have req.body => POST, PUT, PATCH
//When extended is TRUE req.body can be any type (string, object, array, number, boolean, undefined, null)
//When extended is FALSE req.body can be only string or array
app.use(express.static("public")); //WIll understand it more when you get to React.js
// static assets refer to files that are served to the client without any modification by the server
// public folder contains data that the server will not process

app.get("/form", getForm);
app.post("/form", postForm);
app.get("/students", getStudents);
app.get("/delete", getDelete);

app.listen(8000, (err) => {
    if (err) console.log(err);
    console.log("Server started at port: 8000");
})