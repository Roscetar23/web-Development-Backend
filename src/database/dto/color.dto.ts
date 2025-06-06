import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateColorDto {
  @IsNotEmpty()
  @IsNumber()
  readonly id: number;

  @IsNotEmpty()
  @IsString()
  readonly hexa_rgb: string;

  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
