/*
    ===== Código de TypeScript =====
*/

// función de suma con buenas practicas aplicando el tipado estricto en sus parametros y retorno
function sumar(a: number, b:number): number {
    return a + b;
}

// lo mismo pero usando una función flecha 
const sumarFlecha = (a: number, b:number):number => {
    return a + b;
}

const resultado1 = sumar(10, 20);


/* Función de multiplicación implementando el tipado estricto, un parametro opcional y un valor por defecto
otroNumero? es un parametro opcional, base es obligatorio pero tiene valor 2 por defecto si no se indica en la llamada
*/ 
function multiplicar(numero: number, otroNumero?: number, base:number = 2): number {
    return numero * base;
}

const resultado2 = multiplicar(5, 0, 10); // Se indican todos los parametros (resultado 50)
const resultado3 = multiplicar(5); // Se indican el primero, el tercero se llama pero usando el valor 2 por defecto (resultado 10)

//------------------------------------

// Genero mi intefaz con dos atributos y un metodo que retorne void - Estas interfaces me sirven para restringir como va a funcionar un objeto
interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar( personaje: PersonajeLOR, curarX:number ): void {
    personaje.pv += curarX;  // Igual que poner personaje.pv = personaje.pv + curarX
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp(){
        console.log( 'Puntos de vida: ', this.pv );
    }
}

curar( nuevoPersonaje, 20); // Llamo a la nueva función donde le paso el objeto personaje que creé y el parametro curarX
nuevoPersonaje.mostrarHp(); // Retorna 70. (puntos de vida 50 + curarX 20)