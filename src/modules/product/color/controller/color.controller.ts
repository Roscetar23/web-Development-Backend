import { Body, Controller, Delete, Get, Post, Req } from '@nestjs/common';
import { ColorService } from '../service/color.service';
import { CreateColorDto } from 'src/database/dto/color.dto';
import { IColor } from 'src/database/interface/color.interface';

@Controller('color')
export class ColorController {
  constructor(private readonly ColorService: ColorService) {}

  @Post()
  async createColor(@Body() CreateColorDto: CreateColorDto): Promise<IColor> {
    return await this.ColorService.create(CreateColorDto);
  }

  @Get('ViewAllColors')
  async getAllColors(): Promise<IColor[]> {
    return await this.ColorService.getAllColors();
  }

  @Delete('DeleteColor')
  async DeleateColor(@Req() req): Promise<IColor> {
    const { id } = req.id;
    const DeleateColor = await this.ColorService.deleteColor(id);
    return await this.ColorService.deleteColor(id);
  }
}
