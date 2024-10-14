import { Body, Controller, Delete, Get, Post, Req } from '@nestjs/common';
import { SizeService } from '../service/size.service';
import { CreateSizeDto } from 'src/database/dto/size.dto';
import { ISize } from 'src/database/interface/size.interface';

@Controller('size')
export class SizeController {
  constructor(private readonly sizeService: SizeService) {}

  @Post()
  async createSize(@Body() createSizeDto: CreateSizeDto): Promise<ISize> {
    return await this.sizeService.create(createSizeDto);
  }

  @Get('ViewAllSizes')
  async getAllSizes(): Promise<ISize[]> {
    return await this.sizeService.getAllSizes();
  }
  @Delete('DeleteSize')
  async DeleteSyze(@Body('id') id: number): Promise<ISize> {
    return await this.sizeService.deleteSize(id);
  }
}
