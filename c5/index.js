// Task
// koristejki kod od kade bilo, testirajte gi funkciite:
// getAllStudents
// getSingleStudent
// addNewStudent
// editStudent
// deleteStudent

// iskoristete gi site od ovie funkcii, na sledniot nacin:

// 1. prvo povikajte go getAllStudents
// 2. prvo povikajte go getSingleStudent
// 3. dodajte 3 novi studenti 
// 4. izbrisete 2 od niv
// 5. preostanatiot editirajte go
// HINT: posle sekoj od cekorite ispisuvajte so pomos na getAllStudents

const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((request, response) => {
    const url = request.url; // req["url"] go zema url-to
    const method = request.method; // ja zema metodata od requestot;

    console.log("url", url);
    console.log("method", method);

    if(url === "/"){ //HOME
        response.write("<html>");
        response.write("<head><title>Enter text </title></head>");
        response.write(`<body> <form action="/message" method="POST">
        <input type="text" name="message"> </input> 
        <button type="submit">Submit</button>
        </form>
        </body>`)
        response.write("</html");
    } 

    if(url === "/students"){
        response.write("Kako vi se cini dosega studenti ?");
    }

    if(url === "/test" &&  method === "GET"){
        console.log("test");
        response.write("<html>");
        response.write("<head><title>TEST</title></head>");
        response.write("<body>I OVA E TEST</body>");
        response.write("</html");
    }

    if (url === "/message" && method === "GET"){
        response.write("Dali e jasno ?");
    }

    if (url === "/message" && method === "POST"){
        
        const body = [];
        //gi preveduvame podatocite od masinski zapis vo za nas razbirliv zapis
        request.on("data", (chunk) => {
            body.push(chunk);
            console.log(body);
        });

        request.on("end", () => {

            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];

            fs.writeFileSync("data2.txt", parsedBody);

            console.log(parsedBody);
        })
    }

    // response.statusCode = 302;
    // response.setHeader("Location", "/");

    return response.end();
});

server.listen(8000);

//Homework
//1. CRUD module for cars, movies, books, cities...
//2. Add new entity (car, movie, book...) -> data.json
//3. Get all entities and get one entity by id -> Ex: getSingleCarById(5)
//4. Remove entity by id
//5. Edit entity by id
//BONUS: Try to use parameters instead of hardcoded string