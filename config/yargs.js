const argv = require('yargs')
        .option('b',{
            alias: "base",
            type: "number",
            demandOption: true,
            describe: "Es la base de la multiplicacion"
        })
        .option('l',{
            alias: "listar",
            type: "boolean",
            default: false,
            describe: 'Permite mostrar la tabla generada, por defecto no la muestra'
        })
        .option('h',{
            alias: "hasta",
            type: "number",
            default: 10,
            describe: 'Permite poner un limite a la tabla generada, por defecto se crea hasta el 10'
        })
        .check( (argv, option) =>{
            if ( isNaN( argv.b) ){
                throw `La base tiene que ser un numero`;
            }
            return true;
        })
        .argv;

module.exports = argv;