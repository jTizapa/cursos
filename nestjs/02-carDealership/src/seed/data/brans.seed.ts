import { Brand } from "src/brands/entities/brand.entity";
import { v7 as uuid } from 'uuid';

export const BRANS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Toyota',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Chevrolet',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Hyundai',
    createdAt: new Date().getTime(),
  },
];