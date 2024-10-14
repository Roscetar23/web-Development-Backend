import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { ColorService } from '../service/color.service';
import { CreateColorDto } from 'src/database/dto/color.dto';
import { IColor } from 'src/database/interface/color.interface';

@Controller('color')
export class ColorController {
  constructor(private readonly ColorService: ColorService) {}

  @Post()
  async createColor(@Body() createColorDto: CreateColorDto): Promise<IColor> {
    return await this.ColorService.create(createColorDto);
  }

  @Get('ViewAllColors')
  async getAllColors(): Promise<IColor[]> {
    return await this.ColorService.getAllColors();
  }

  @Delete('DeleteColor')
  async DeleateColor(@Body('id') id: number): Promise<IColor> {
    return await this.ColorService.deleteColor(id);
  }
}
