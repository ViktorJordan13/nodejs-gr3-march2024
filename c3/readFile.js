const fs = require("fs");

// tuka kazuvame koj e fajlot sto sakame da go procitame (filename - imetoa na fajlot)
// a kako izlezen parametar ni se podatocite sto se zapisani vo toj fajl (data)
function readFile(filename){
    fs.readFile(filename, 'utf-8', (err, data) => {
        if(err){
            console.log("An error occured while reading the file", err);
        }else{
            console.log("File contents", data);
        }
    });
}

module.exports = {
    readFile,
}