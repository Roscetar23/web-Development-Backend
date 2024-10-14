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
  async DeleateSyze(@Req() req): Promise<ISize> {
    const { id } = req.id;
    const deleteSyze = await this.sizeService.deleteSize(id);
    return await this.sizeService.deleteSize(id);
  }
}
