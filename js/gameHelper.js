const TEST_ARRAY = ["Blaze", "Craft", "Flake", "Grasp", "Quirk", "Jolly", "Twist", "Shore", "Crave", "Plume"]

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



// let dictionary = [];
// for (let x of TEST_ARRAY) {
//     dictionary
// }


