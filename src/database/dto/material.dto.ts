import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMaterialDto {
  @IsNotEmpty()
  @IsNumber()
  readonly id: number;

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;
}
