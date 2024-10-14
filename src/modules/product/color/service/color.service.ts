import { Injectable } from '@nestjs/common';
import { IColor } from 'src/database/interface/color.interface';
import { CreateColorDto } from 'src/database/dto/color.dto';
import { ColorRepository } from 'src/database/repositories/color.repository';

@Injectable()
export class ColorService {
  constructor(private readonly colorRepository: ColorRepository) {}

  async create(createColorDto: CreateColorDto): Promise<IColor> {
    return this.colorRepository.create(createColorDto);
  }

  async deleteColor(id: number): Promise<IColor> {
    return await this.colorRepository.delete(id);
  }

  async getAllColors(): Promise<IColor[]> {
    return this.colorRepository.findAll();
  }
}
