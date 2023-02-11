const readLineSync = require("readline-sync")

const numero = readLineSync.question("dime un numero entero positivo: ");
// if(Number(numero)<0){
//     console.log("vuelve a intentarlo")
// }else{
//     for(i=1; i<=numero;i=i+2){
//         console.log(i);
//     }
// }

for (i = 0; i <= numero; i++) {

    if (i % 2) {
      console.log( i );
    }
  
  }