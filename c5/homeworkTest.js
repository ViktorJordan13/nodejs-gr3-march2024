const fileOperations = require('./homeworkFileOperations');

// 1 and 4
const read = async() => {
    try{
        const data = await fileOperations.read("homeworkExample.txt");
        console.log(data);
    }catch(error){
        console.error(error);
    }
}


// (async () => {
//     try{
//         await fileOperations.write("homeworkExample.txt", "test");

//         read();

//     }catch(error){
//         console.error(error);
//     }
// })();

// 2 and 4

(async () => {
    try{
        await fileOperations.append("homeworkExample.txt", " test3");

        read();

    }catch(error){
        console.error(error);
    }
})();