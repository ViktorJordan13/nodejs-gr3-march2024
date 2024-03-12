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
        await addNewStudent({ name: "Petar", surname: "Grujoski", year: "2024", id: "0"});
        //console.log(students);
        // let students = await getAllStudents();
        // console.log(students);

    }catch(err){
        console.log("Error", err);
    }finally{
        console.log("Code has finished executing");
    }

})();