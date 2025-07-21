import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    getAllCars(): import("./interfaces/ca.interface").Car[];
    getCarById(id: string): import("./interfaces/ca.interface").Car;
    createCar(createDataDto: CreateCarDto): import("./interfaces/ca.interface").Car;
    updateCar(id: string, updateCarDto: UpdateCarDto): import("./interfaces/ca.interface").Car;
    deleteCar(id: string): void;
}
