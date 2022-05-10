// Rectangular Pattern
let sign = "";
let userInputRows = parseInt(prompt("Input a number so that it produces a rectangular shape (Row):"));
let userInputColumns = parseInt(prompt("Input a number so that it produces a rectangular shape (Column):"));

for(a = 0; a < userInputRows; ++a){
    for(b = 0; b < userInputColumns; ++b){
        sign += "*";
    }
    sign += "\n";
}
console.log(sign);