import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { ISize } from '../interface/size.interface';
import { Size, SizeDocument } from '../schema/size.schema';

@Injectable()
export class SizeRepository {
  constructor(
    @InjectModel(Size.name)
    private readonly sizeModel: Model<SizeDocument>,
  ) {}

  async create(size: ISize): Promise<ISize> {
    const createdSize = new this.sizeModel(size);
    return createdSize.save();
  }

  async delete(id: string): Promise<ISize> {
    return await this.sizeModel.findByIdAndDelete({ id });
  }

  async findAll(): Promise<ISize[]> {
    return this.sizeModel.find().exec();
  }
}