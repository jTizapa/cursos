import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/ca.interface';
import { v7 as uuid } from 'uuid'
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
    private cars: Car [] = [
        {
            id: uuid(), 
            brand:'Toyota', 
            model:"Collora"
        },
       /* {
            id: uuid(), 
            brand:'Chevrolet', 
            model:"Aveo"
        },
        {
            id: uuid(), 
            brand:'Hyundai', 
            model:"Electra"
        }*/
    ];

    public findAll(){
        return this.cars;
    }

    public findOneById(id: string){
        const car = this.cars.find(car => car.id === id);
        if(!car) throw new NotFoundException(`Card with id '${id}' not found`) 
        return car;
    }

    create( createCarDto: CreateCarDto ){
        const car : Car = {
            id: uuid(),
            brand: createCarDto.brand,
            model: createCarDto.model,
            //...CreateCarDto otra manera
        }

        this.cars.push(car)

        return car 
    }

    update( id: string, updateCarDto: UpdateCarDto){
        
        let carDB = this.findOneById(id)

        this.cars = this.cars.map(car => {
            if(car.id === id){
                carDB ={
                    ...carDB,
                    ...updateCarDto,
                    id
                }
                return carDB
            }
            return car
        })

        return carDB
    }

    delete(id: string){
        let carDB = this.findOneById(id)

        this.cars = this.cars.filter(car =>  car.id != id) 
    }

    fillCarsWithSeedData( car: Car[]){
        this.cars = car
    }
}
