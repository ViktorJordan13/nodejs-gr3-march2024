const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 8000;

//Task1

app.get('/', (req, res) => {

    const data = {
        cars: ["Mercedes-Benz", "Ferrari", "Toyota"],
        books: ["Harry Potter", "1984", "Tom Sawyer"],
        cities: ["Istanbul", "Paris", "Rome", "Ohrid", "Kumanovo"]
    };

    res.send(`
        <h1>Home</h1>
        <h2>Cars</h2>
        <u1>${data.cars.map(car => `<li>${car}</li>`).join('')}</u1>
        <h2>Books</h2>
        <u1>${data.books.map(book => `<li>${book}</li>`).join('')}</u1>
        <h2>Cities</h2>
        <u1>${data.cities.map(city => `<li>${city}</li>`).join('')}</u1>
    `);
});

//Task2
app.get('/cities', (req, res) => {

    const {baranje} = req.query;
    const city = `City ${baranje}`;

    res.send(`
    <h1>Single City</h1>
    <p>${city}</p>
    `);
})

//Task 3 and 4

app.get('/users', (req, res) => {

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(fetchedData => {
        const users = fetchedData.data;
        const userList = users.map(user =>  `<li>${user.name} - ${user.username} email: ${user.email}</li>`)

        res.send(`
            <h1>Users From the URL:</h1>
            <u1>${userList}<u1>
        `);
    })
    .catch(error => {
        res.send(`
        <h1>Error</h1>
        <p>Failed to fetch users</p>
        `);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});