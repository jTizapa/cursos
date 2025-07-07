import { type Move, type PokeapiResponse } from '../interfaces/pokeapi-response.interface';
import { PokeApiAdapter, PokeApiAdapterFech, type httpAdapter } from '../api/pokeApi.adapter';

export class Pokemon {

    public id:number;
    public name: string;
    private readonly http: httpAdapter
    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }

  
    constructor(id: number, name: string,  http: httpAdapter  // Todo: inyectar dependencias
    
    ) {
        this.id = id;
        this.name = name;
        this.http = http;
    }

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves(): Promise<Move[]> {
        const data = await this.http.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/4`);
        console.log( data.moves[0].move.name);
        
        return data.moves;
    }

}

const pokeApiAxios = new PokeApiAdapter();
const PokeApiFech = new PokeApiAdapterFech();

export const charmander = new Pokemon( 4, 'Charmander', PokeApiFech);
