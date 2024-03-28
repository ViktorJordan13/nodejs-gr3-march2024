const { list, add, remove } = require("../models/student");

const getForm = (req, res) => {
    res.render("formular");
}

const postForm = async(req, res) => {
    let studentData = {
        ime: req.body.ime,
        prezime: req.body.prezime,
        prosek: req.body.prosek
    };
    await add(studentData);
    res.redirect("/students"); // will navigate the client(user) to /students
    //by default the user is sent to GET page of /students
}

const getStudents = async (req, res) => {
    let data = await list();
    res.render("students", { data });
};

const getDelete = async(req, res) => {
    console.log("req query", req.query);
    await remove(req.query.studentIndex); //how will we name the varaible in the ejs file
    res.redirect("/students");
}

module.exports = {
    getForm,
    postForm,
    getStudents,
    getDelete
}