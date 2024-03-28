const getAnalysis = async(req, res) => {
    try{

        res.render("analisys-form");
    }catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
};

//Primer input
//Nie sme studenti vo SEMOS. Ucime Nodejs vo 19:30 sekoj Vtornik i Cetvrtok. Vo ponedelnik i sreda ne ucime.

const postAnalysis = async(req, res) => {
    const { txt } = req.body;

    console.log(txt);

    if(!txt){
        res.status(400).send("Bad request!");
    }

    //vkupen broj na karakteri
    const charLength = txt.length;
    //vkupen broj na zborovi
    const words = txt.split(" ");
    //vkupen broj na zborovi pomali od 5 karakteri
    const wordsLessThanFive = words.filter((word) => word.length < 5).length;
    //vkupen broj na zborovi pomali od 5 karakteri
    const wordsMoreThanFive = words.filter((word) => word.length > 5).length;
    //vkupen broj na zborovi pomali od 5 karakteri
    const wordsWithFive = words.filter((word) => word.length === 5).length;

    const sentence = txt.split("."); //razmislete kako bi go resile ova i za ? i za !
    console.log("Sentence", sentence);

    const wordsStartingWithVowels = words.filter((word) => {
        if(
            word.startsWith("a") ||
            word.startsWith("o") ||
            word.startsWith("u") ||
            word.startsWith("i") ||
            word.startsWith("e")
        )
        return word;
    });

    const data = {
        numChars: charLength,
        lessThanFive: wordsLessThanFive,
        moreThanFive: wordsMoreThanFive,
        equalToFive: wordsWithFive,
        sentenceLength: sentence.length -1, //bidejki posle poslednata tocka racuna deka ima uste edna recenica
        wordLength: words.length,
        wordsVowels: wordsStartingWithVowels.length
    };

    try{
        res.render("analisys-result", {...data});
    }catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = {
    getAnalysis,
    postAnalysis
}