const fs= require("fs");
const rutaDelArchivo = './mensaje.txt';
const rutaDelArchivo2 = "./mensaje2.txt"

let contenidoMensaje = fs.readFileSync (rutaDelArchivo,"utf-8");
let contenidoMensaje2 = fs.readFileSync (rutaDelArchivo2,"utf-8");


// console.log(contenidoMensaje2);

contenidoMensaje= "hola mundo";

fs.writeFileSync(rutaDelArchivo,"hola mundo","utf-8");
// en este fs se sobre escribe en el texto del archivo original

// console.log(contenidoMensaje);

console.log(fs.existsSync("./mensaje2.txt"));
// nos devuelve true o falsesi esta o no el archivo en esa diraccion

fs.existsSync("./mensaje3.txt") && fs.unlinkSync("./mensaje3.txt")

// fs.existsSync verifica si existe
// fs.unlinkSync elimina
