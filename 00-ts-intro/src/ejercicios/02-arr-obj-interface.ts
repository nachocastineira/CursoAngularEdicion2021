/*
    ===== Código de TypeScript =====
*/

// Arreglo con buenas practicas 
let habilidades: string[] = ['Bash', 'Counter', 'Healing']; //Siempre es recomendable ponerle el tipo

// Una interfaz con buenas practicas
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string; // el signo de pregunta le indica que el atributo es opcional
}

// Implemento la interfaz
const personaje: Personaje = {
    nombre: "Juan",
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Buenos Aires'; // ahora si asigno el valor opcional, puedo no hacerlo

console.table( personaje ); // Muestro el objeto en la consola del navegador, en formato tabla