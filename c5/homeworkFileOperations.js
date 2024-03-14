const fs = require('fs');

//1
const read = (filename) => {
    return new Promise((resolve, reject) =>{
        fs.readFile(filename, 'utf-8', (error, data) =>{
            if(error){
                reject(error);
            }else{
                resolve(data);
            }
        });
    });
}

//SOLID
// S - single reponsibility

const write = (filename, data) => {
    return new Promise((resolve, reject) =>{
        fs.writeFile(filename, data, (error) =>{
            if(error){
                reject(error);
            }else{
                resolve();
            }
        });
    });
}

//2
const append = (filename, data) => {
    return new Promise((resolve, reject) =>{
        fs.appendFile(filename, data, (error) =>{
            if(error){
                reject(error);
            }else{
                resolve();
            }
        });
    });
}

module.exports = {
    read,
    write,
    append
}