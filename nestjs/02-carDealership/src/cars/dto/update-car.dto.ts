import {IsOptional, IsString, IsUUID } from "class-validator"

export class UpdateCarDto {

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?:    string

    // se aconseja que las propiedades de los tdo sean readonly para que no se pueda reasignar. y tambien se utilizan para realizar validaciones de la data 
    @IsString({message: "Marca requerido"})    
    @IsOptional()
    readonly brand?: string

    @IsString({message: "Modelo requerido"}) 
    @IsOptional() // se utiliza para poner que la propiedad sera opcional
    readonly model?: string



}