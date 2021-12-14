/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

// Desestructuración de objetos - Evito hacer referencias al un dato especifico indicando el objeto
// Para desestructurar un objeto lo hago con llaves {}
const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;

console.log('El volumen actual es: ', volumen); //Sin la desestructuración tendria que poner repruductor.volumen
console.log('El segundo actual es: ', segundo);
console.log('La canción actual es: ', caches);
console.log('El autor es: ', autor); // sin la desest. seria 'reproductor.detalles.autor'


//------- 19. Desestructuración de Arreglos  ------------
// Para desestructurar un array lo hago con corchetes []

const dbz: string [] = ['Goku', 'Vegeta', 'Trunks'];
const [ p1, p2, p3 ] = dbz; // Se asignan el valor secuencial a como están en el array

console.log('Personaje 1: ', p1 );
console.log('Personaje 2: ', p2 );
console.log('Personaje 3: ', p3 );

