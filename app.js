const argv = require('./config/yargs').argv;
var colors = require('colors');
//var colors = require('colors/safe');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ colors.red( archivo)}`))
            // .then(archivo => console.log(`Archivo creado:`, colors.red( archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando invalido');
        break;
}
// console.log(argv);
//let base = 'abc';

//console.log(process.argv);
//let argvcon = process.argv;

//console.log('Limite', argv.limite);

// let parametro = argvcon[2];
// let base = parametro.split('=')[1];