import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';
export declare class SeedService {
    private readonly CarsService;
    private readonly BrandsService;
    constructor(CarsService: CarsService, BrandsService: BrandsService);
    populateDB(): string;
}
