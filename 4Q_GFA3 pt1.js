//gets the value
let userInput;
while (true) {
    userInput = prompt("Enter a number:");

    if (!isNaN(userInput) && userInput.trim() !== "") {
        userInput = Number(userInput);
        break;
    }

    alert("Invalid input. Please enter a number.");
}

let output = "";

if (userInput % 2 !== 0) {
    //prints a rectangle
    for (let i = userInput; i > 0; i--) {
        let row = "";
        for (let j = 1; j <= userInput; j++) {
            row += i + " ";
        }
        output += row + "<br>";
    }
} else {
    //prints a triangle
    for (let i = userInput; i > 0; i--) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += i + " ";
        }
        output += row + "<br>";
    }
}
document.getElementById("demo").innerHTML = output;
