const fs = require('fs');
const color = require('colors');

const createTableTxt =async(base = 5, listar = false, hasta = 10) => {
    try {
    let salida, consola  = '';
    
    for(let i = 1 ; i <= hasta ; i++){
        salida +=`${base} x' ${i} = ${base * i}\n`;
        consola += `${base} ${ 'x'.cyan } ${i} = ${base * i}\n`;
    }
        
    if (listar) {
        console.log('========================'.blue);
        console.log(`   Tabla del ${base}    `.yellow);
        console.log('========================'.blue);
        console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `Tabla del ${base}`.rainbow;
    } catch(err){
        throw err;
    }
}


module.exports = {
    createTableTxt
}