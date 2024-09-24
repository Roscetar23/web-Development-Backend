import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { IColor } from '../interface/color.interface';
import { Color, ColorDocument } from '../schema/color.schema';

@Injectable()
export class ColorRepository {
  constructor(
    @InjectModel(Color.name)
    private readonly colorModel: Model<ColorDocument>,
  ) {}

  async create(color: IColor): Promise<IColor> {
    const createdColor = new this.colorModel(color);
    return createdColor.save();
  }

  async delete(id: string): Promise<IColor> {
    return await this.colorModel.findByIdAndDelete({ id });
  }

  async findAll(): Promise<IColor[]> {
    return this.colorModel.find().exec();
  }
}