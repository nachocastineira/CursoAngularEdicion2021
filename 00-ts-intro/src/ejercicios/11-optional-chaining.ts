/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string,
    hijos?: string[]
}

const pasajero1 : Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Melissa',
    hijos: ['Natalia', 'Gabriel']
}

function imprimeHijos( pasajero: Pasajero ): void {

    //Evalua si tiene hijos, si tiene continua con lo siguiente sino lo trata como undefined
    const cuantosHijos = pasajero.hijos?.length || 0; 

    console.log( cuantosHijos );  
}

imprimeHijos( pasajero1 );
