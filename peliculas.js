const fs= require("fs")
const peliculasJSON = fs.readFileSync("./fs/json/peliculas.json","utf-8")

console.log(peliculasJSON);