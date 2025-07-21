import { Car } from './interfaces/ca.interface';
import { CreateCarDto, UpdateCarDto } from './dto';
export declare class CarsService {
    private cars;
    findAll(): Car[];
    findOneById(id: string): Car;
    create(createCarDto: CreateCarDto): Car;
    update(id: string, updateCarDto: UpdateCarDto): Car;
    delete(id: string): void;
    fillCarsWithSeedData(car: Car[]): void;
}
