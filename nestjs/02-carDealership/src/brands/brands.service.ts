import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v7 as uuid} from 'uuid';

@Injectable()
export class BrandsService {

  private brands : Brand[] = [
    /*{
      id: uuid(),
      name: "Toyota",
      createdAt: new Date().getTime()
    }*/
  ]
  create(createBrandDto: CreateBrandDto) {
    const {name } =createBrandDto
    const brand: Brand = {
      id:uuid(),
      name,
      createdAt: new Date().getTime()
    }

      this.brands.push(brand)
    
    return  
  }

  findAll() {
    return this.brands
  }

  findOne(id: string) {
     const brand = this.brands.find(brand => brand.id === id)
     if( !brand) throw new NotFoundException(`Brand with id "${ id }" not found`)
      return brand
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    
    let brandDB = this.findOne(id)

    this.brands = this.brands.map(brand => {
      if(brand.id === id){
        brandDB.updatedAt = new Date().getTime()
        brandDB = {
          ...brandDB,
          ...updateBrandDto
        }
        return brandDB 
      }
      return brand
    })
    
    return brandDB 
  }

  remove(id: string) {
    this.findOne(id)
    this.brands = this.brands.filter(car => car.id == id)
  }

  fillBrandWithSeedData( brand: Brand[]){
          this.brands = brand
  }
}
