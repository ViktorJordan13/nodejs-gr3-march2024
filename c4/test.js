const {
    getAllStudents,
    getSingleStudent,
    addNewStudent,
    editStudent,
    deleteStudent

} = require("./students");

//IIFE
( async () => {
    try{
        //await addNewStudent({ name: "Petar", surname: "Grujoski", year: 2024, id: 1});
        let students = await getAllStudents();
        //console.log(students);
        //await addNewStudent({ name: "Trajce", surname: "Trajceski", year: 2020, id: 2});
        //await deleteStudent(2);
        //let student = await getSingleStudent(2);
        //console.log(student);
        await editStudent(1, { year: 2025});

        //console.log(students);
        // let students = await getAllStudents();
        // console.log(students);

    }catch(err){
        console.log("Error", err);
    }finally{
        console.log("Code has finished executing");
    }

})();