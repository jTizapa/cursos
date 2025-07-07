// la clase adapter es la que se encarga de adaptar la respuesta de la API a un formato que pueda ser utilizado por el resto de la aplicación
// se recomienda utilizar adapters para evitar acoplar la lógica de negocio a la API, y así poder cambiar la API sin afectar al resto de la aplicación

import axios from 'axios';

export interface httpAdapter{

    get<T>( url: String): Promise <T>    

}

export class PokeApiAdapterFech implements httpAdapter{

    async get <T> (url: string): Promise<T>{
        const resp = await fetch(url);
        const data: T = await resp.json();
        return data;
    }

    async post (url: string, data: any) {
        return;
    }

    async path (url: string, data: any) {
        return;

    }

    async delete (url: string) {
        return;
    }

}

export class PokeApiAdapter implements httpAdapter{

    private readonly axios = axios;

    async get <T> (url: string) {
        const { data } = await this.axios.get<T>( url);
        return data;
    }

    async post (url: string, data: any) {
        return;
    }

    async path (url: string, data: any) {
        return;

    }

    async delete (url: string) {
        return;
    }

  
}