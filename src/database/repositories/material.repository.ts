import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { IMaterial } from '../interface/material.interface';
import { Material, MaterialDocument } from '../schema/material.schema';

@Injectable()
export class MaterialRepository {
  constructor(
    @InjectModel(Material.name)
    private readonly materialModel: Model<MaterialDocument>,
  ) {}

  async create(material: IMaterial): Promise<IMaterial> {
    const createdMaterial = new this.materialModel(material);
    return createdMaterial.save();
  }
  async delete(id: string): Promise<IMaterial> {
    return await this.materialModel.findByIdAndDelete({ id });
  }
  async findAll(): Promise<IMaterial[]> {
    return this.materialModel.find().exec();
  }
}
