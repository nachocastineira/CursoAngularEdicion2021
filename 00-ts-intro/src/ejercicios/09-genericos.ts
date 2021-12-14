/*
    ===== Código de TypeScript =====
*/

// El <T> es un tipo de dato generico, le puedo mandar cualquier tipo en su argumento. Por convencion es usa esa letra pero puede ser otra
function queTipoSoy<T>(argumento: T){
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy( 100 );
let soyArreglo = queTipoSoy( [1, 2, 3 ,4 ,5] );

let soyExplicito = queTipoSoy<number>( 100 ); //Le especifico que tendrá que ser number