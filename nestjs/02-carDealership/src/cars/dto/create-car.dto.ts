import { IsString } from "class-validator"

export class CreateCarDto {

    // se aconseja que las propiedades de los tdo sean readonly para que no se pueda reasignar. y tambien se utilizan para realizar validaciones de la data 
    @IsString({message: "Marca requerido"})    
    readonly brand: string

    @IsString({message: "Modelo requerido"}) 
    readonly model: string



}