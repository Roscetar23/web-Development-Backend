import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { MaterialService } from '../service/material.service';
import { CreateMaterialDto } from 'src/database/dto/material.dto';
import { IMaterial } from 'src/database/interface/material.interface';

@Controller('material')
export class MaterialController {
  constructor(private readonly materialService: MaterialService) {}

  @Post()
  async createMaterial(
    @Body() createMaterialDto: CreateMaterialDto,
  ): Promise<IMaterial> {
    return await this.materialService.create(createMaterialDto);
  }

  @Get('ViewAllMaterials')
  async getAllMaterials(): Promise<IMaterial[]> {
    return await this.materialService.getAllMaterials();
  }
  @Delete('DeleteMaterial')
  async DeleateMaterial(@Body('id') id: number): Promise<IMaterial> {
    return await this.materialService.deleteMaterial(id);
  }
}
