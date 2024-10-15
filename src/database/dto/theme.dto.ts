import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateThemeDto{
    @IsNotEmpty()
    @IsNumber()
    readonly id: number;

    @IsNotEmpty()
    @IsString()
    readonly nameTheme: string;
}