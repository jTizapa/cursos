import axios from 'axios';
import  { type PokeapiResponse }  from '../interfaces/pokeapi-response.interface';

export class Pokemon { // las clases son una forma de definir un objeto con propiedades y métodos, similar a una interface pero con implementaciones
    // En TypeScript, las clases pueden tener propiedades y métodos, y pueden ser instanciadas para crear objetos concretos.
    // Las clases pueden tener un constructor, que es un método especial que se ejecuta cuando se crea una nueva instancia de la clase.
    // Las clases pueden tener modificadores de acceso como public, private y protected para controlar la visibilidad de las propiedades y methods.
    
    // es un método especial que se ejecuta cuando se crea una nueva instancia de la clase 
    public id: number 
    public name: string
    public age?: number
    public image?: string 

    constructor(   id: number,   name: string,  age?: number, image?: string)  // el constructor recibe los parámetros que se van a asignar a las propiedades de la clase
    {
        this.id = id;
        this.name = name;
        this.age = age; 
        this.image = image;
    }

    get getImageUrl(): String { // getter para obtener el id del pokemon
        return this.image || 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png';
    }
    
    scream(){
        console.log(`${this.name.toUpperCase}!!!`);
    }

    speak(){
        console.log(`${this.name}, ${this.name}`);
    }

    async getMoves(): Promise<PokeapiResponse['moves']> { // método asíncrono que obtiene los movimientos del pokemon desde la PokeAPI
        const {data} = await axios.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        console.log(data.moves[0].move.name.toUpperCase());
        return data.moves;
    }
}

export const bulbasaur = new Pokemon(1, 'Bulbasaur',30, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png');

console.log(bulbasaur.getMoves());