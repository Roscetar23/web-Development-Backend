import { Injectable } from '@nestjs/common';
import { ISize } from 'src/database/interface/size.interface';
import { CreateSizeDto } from 'src/database/dto/size.dto';
import { SizeRepository } from 'src/database/repositories/size.repositorie';

@Injectable()
export class SizeService {
  constructor(private readonly SizeRepository: SizeRepository) {}

  async create(createSizeDto: CreateSizeDto): Promise<ISize> {
    return this.SizeRepository.create(createSizeDto);
  }

  async deleteSize(id: string): Promise<ISize> {
    return await this.SizeRepository.delete(id);
  }

  async getAllSizes(): Promise<ISize[]> {
    return this.SizeRepository.findAll();
  }
}
{
}