const TEST_ARRAY = ["ladder", "dealer", "leader", "read", "red", "quark"]

const lettersValue = ["a", "l", "d", "e", "r"];

document.getElementById("wordSearchForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let lettersValue = document.getElementById("letters").value.split("");
    let middleValue = document.getElementById("middle").value;
    let bonusValue = document.getElementById("bonus").value;
    console.log(lettersValue, middleValue, bonusValue);
    createArray(lettersValue, middleValue, bonusValue);
});

function createArray(lettersValue, middleValue, bonusValue) {
    if (!lettersValue.includes(middleValue)) {
        lettersValue.push(middleValue);
        console.log("My array did not contain " + middleValue + ". My new array contains " + lettersValue);
    };
    
    if (!lettersValue.includes(bonusValue)) {
        lettersValue.push(bonusValue);
        console.log("My array did not contain " + bonusValue + ". My new array contains " + lettersValue);
    } else {
        console.log("All values already in the array.");
    };
};

function testingConcept(lettersValue) {
    let goodArray = [];
    for (const word of TEST_ARRAY) {
        console.log("This word is " + word);
        let allLettersValid = true; // Flag to track if all letters are in lettersValue
        for (const letter of word) {
            if (!lettersValue.includes(letter)) {
                allLettersValid = false; // If any letter is not valid, set flag to false
                break;
            };
        };
        if (allLettersValid) {
            goodArray.push(word);
            console.log(goodArray);
        };
        // if (word.includes(!lettersValue.includes)) {
        //     continue;
        // } else {
        //     goodArray.push(word);
        //     console.log(goodArray);
        // }
    };
};



// let dictionary = [];
// for (let x of TEST_ARRAY) {
//     dictionary
// }


