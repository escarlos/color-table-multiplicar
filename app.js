const { createTableTxt } = require(`./helpers/multiplier`);
const argv = require('./config/yargs')

console.clear();

createTableTxt( argv.b, argv.l, argv.h)
    .then( nombreArchivo => {
        console.log(nombreArchivo, `creado`)
    })
    .catch( err => console.log(err));