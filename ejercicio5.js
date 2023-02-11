const readLineSync = require("readLine-Sync")

let palabra = readLineSync.question("Por favor introduzca una palabra: ")
a=palabra.split("");
nuevaPalabra = a.reverse();
for(i=0; i<=palabra.length; i++){
    
console.log(nuevaPalabra[i]);
}