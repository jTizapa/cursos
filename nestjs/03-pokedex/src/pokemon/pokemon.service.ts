import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Pokemon } from './entities/pokemon.entity';
import { isValidObjectId, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { IsUUID } from 'class-validator';

@Injectable()
export class PokemonService {

  constructor(@InjectModel(Pokemon.name) private readonly pokemonModel: Model<Pokemon>) {}

  async create(createPokemonDto: CreatePokemonDto) {
    createPokemonDto.name = createPokemonDto.name.toLowerCase();

    try {
      const pokemon = await this.pokemonModel.create(createPokemonDto)
      return  pokemon;
    } catch (error) {
      if( error.code === 11000){
        throw new BadRequestException(`Pokemon exists in db ${JSON.stringify(error.keyValue)}`)
      }
      throw new InternalServerErrorException(`Cant't create Pokemon - Check server logs `)
    }
  }

  findAll() {
    return `This action returns all pokemon`;
  }

  async findOne(id: string) {
    let pokemon: Pokemon;
   // try {
      if(!isNaN(+id)){
        pokemon = await this.pokemonModel.findOne({no: id});
      }

      if(!pokemon &&isValidObjectId(id)){
        pokemon = await this.pokemonModel.findById(id);
      }

      if(!pokemon){
        pokemon = await this.pokemonModel.findOne({name: id.toLowerCase().trim()})
      }

      if(!pokemon) throw new NotFoundException(`Pokemon with id, name or no "${id}" not found`)

      return pokemon;
   /* } catch (error) {
      console.log(error)
    }*/

    return 
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return `This action updates a #${id} pokemon`;
  }

  remove(id: number) {
    return `This action removes a #${id} pokemon`;
  }
}
