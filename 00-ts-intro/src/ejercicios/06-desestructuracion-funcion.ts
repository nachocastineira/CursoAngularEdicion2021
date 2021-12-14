/*
    ===== Código de TypeScript =====
*/
export interface Producto { // Tambien exporto la interfaz para poder utilizarla en otro lado
    descripcion: string;
    precio: number;
}


const telefono: Producto = {
    descripcion: 'Nokia A1',
    precio: 150
}

const tablet: Producto = {
    descripcion: 'iPad Air',
    precio: 550
}

//Función que calculará el IVA de un producto que devolveerá el precio total y el importe de IVA desglosado
export function calcularIVA( productos: Producto[] ):[number, number] { //exporto la funcion

    let total = 0;

    // se realiza una Desestructuración de argumentos, sin esto deberia poner producto.precio
    productos.forEach( ({precio})  => {
        total += precio;  
    });

    return [total, total * 0.21];
}

const articulos = [ telefono, tablet];
const [ total, iva ] = calcularIVA( articulos );

console.log('Total:', total);
console.log('IVA:', iva);

