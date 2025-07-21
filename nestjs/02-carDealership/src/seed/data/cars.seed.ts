import { Car } from "src/cars/interfaces/ca.interface";
import { v7 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla',
  },
  {
    id: uuid(),
    brand: 'Chevrolet',
    model: 'Aveo',
  },
  {
    id: uuid(),
    brand: 'Hyundai',
    model: 'Electra',
  },
];