const readLineSync = require("readline-sync")

let num = readLineSync.question("Escribe un numero");
let icon = "*";
for(i=0; i<num; i++){
    
    console.log(icon);
    icon = icon + "*";

}