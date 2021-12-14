/*
    ===== Código de TypeScript =====
*/
class PersonaNormal {

    constructor( 
        public nombre: string,
        public direccion: string
    ){}

}
//Ejemplo de clase heredadas en ts
class Heroe extends PersonaNormal {
    // Estos no son necesarios si los agrego al constructor. Se ponen si son estrictamente necesarias
    // alterEgo: string;
    // edad: number;
    // nombreReal: number;

    constructor(
         public alterEgo: string,
         public edad: number,
         public nombreReal: string
    ) {
        super( nombreReal, 'NY, USA' );
    }
}

const ironman = new Heroe('Ironman', 45, 'Tony');

console.log(ironman);
