import { IsNotEmpty, IsString } from 'class-validator';

export class CreateColorDto {
  @IsNotEmpty()
  @IsString()
  readonly id: string;

  @IsNotEmpty()
  @IsString()
  readonly hexa_rgb: string;

  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
