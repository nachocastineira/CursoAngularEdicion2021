import { Producto, calcularIVA } from './06-desestructuracion-funcion';

/*
    ===== Código de TypeScript =====
*/

const carritoCompras: Producto[] = [
    {
        descripcion: 'Telefono 1',
        precio: 100
    },
    {
        descripcion: 'Telefono 2',
        precio: 250
    }
];

const [total, iva] = calcularIVA( carritoCompras );

console.log('Total: ', total);
console.log('IVA: ', iva);

