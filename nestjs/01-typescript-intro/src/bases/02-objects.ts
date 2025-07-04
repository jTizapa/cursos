export const pokemonId: number[] =  [1,2,3,4,5,6,7,8,9,10];


export const pokemonName:  object = {
    id: 1,
    name: 'Bulbasaur',
}


interface Pokemon { // la diferencia entre interface y una clase es que una interface no puede tener implementaciones, solo define la estructura de un objeto
    id: number;
    name: string;
    age?: number; // optional property  

}

export const bulbasaur: Pokemon = {
    id: 1,
    name: 'Bulbasaur',
}

export const charmander: Pokemon = {
    id: 4,
    name: 'Charmander',
    age: 2, // optional property
}

export const pokemons: Pokemon[] = [] 

pokemons.push(bulbasaur, charmander);