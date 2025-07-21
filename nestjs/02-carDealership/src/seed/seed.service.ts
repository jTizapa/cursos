import { Injectable } from '@nestjs/common'; 
import { CARS_SEED } from './data/cars.seed';
import { BRANS_SEED } from './data/brans.seed';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {

  constructor(private readonly CarsService: CarsService, 
              private readonly BrandsService: BrandsService) {}

  populateDB() {
    //CARS_SEED
    //BRANS_SEED
    this.CarsService.fillCarsWithSeedData(CARS_SEED)
    this.BrandsService.fillBrandWithSeedData(BRANS_SEED)
    return "Seed executed successfully!";
  }
}
