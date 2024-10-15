import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { ITheme } from '../interface/theme.interface';
import { Theme, ThemeDocument } from '../schema/theme.schema';


@Injectable()
export class ThemeRepository{
    constructor(
        @InjectModel(Theme.name)
        private readonly themeModel: Model<ThemeDocument>,
      ) {}
    
      async create(theme: ITheme): Promise<ITheme> {
        const createdTheme = new this.themeModel(theme);
        return createdTheme.save();
      }
    
      async delete(id: number): Promise<ITheme> {
        return await this.themeModel.findOneAndDelete({ id });
      }
    
      async findAll(): Promise<ITheme[]> {
        return this.themeModel.find().exec();
}
}