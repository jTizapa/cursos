import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service'; 
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
//test
@Controller('cars')

//@UsePipes(ValidationPipe) otra menera de usar pipe 
export class CarsController {
    
    constructor( private readonly carsService: CarsService){}

    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    @Get('/:id')
    getCarById( @Param('id', new ParseUUIDPipe({version: '7'})) id: string ) {
        console.log(id)
        return this.carsService.findOneById(id)
    }

    @Post()
    //@UsePipes(ValidationPipe) una manera de usar pipe
    createCar(@Body() createDataDto: CreateCarDto){
        return this.carsService.create(createDataDto)
    }

    @Patch(':id')
    updateCar(
        @Param('id',  ParseUUIDPipe) id: string,
        @Body() updateCarDto:UpdateCarDto){
        return this.carsService.update(id,updateCarDto)
    }

    /* The `@Delete(':id')` decorator in the `CarsController` class is defining a route for deleting a
    specific car based on its ID. When a DELETE request is made to the endpoint `/cars/:id`, the
    `deleteCar` method is called. The `@Param('id', ParseIntPipe) id: number` decorator is used to
    extract the `id` parameter from the request URL and parse it as an integer using the
    `ParseIntPipe`. */
    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string){
        return this.carsService.delete(id)
    }
}
