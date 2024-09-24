import { IsNotEmpty, IsNumber } from 'class-validator';


export class CreateSizeDto {
    @IsNotEmpty()
    @IsNumber()
    readonly id: number;

    @IsNotEmpty()
    @IsNumber()
    readonly num: number;
  }