import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @Type(() => Number) // se esta otra manera de realizar la conversion de tipo de dato
  limit?: number;

  @IsOptional()
  @Min(0)
  @Type(() => Number)
  offset?: number;
}
