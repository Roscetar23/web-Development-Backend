import { Injectable } from '@nestjs/common';
import { ITheme} from 'src/database/interface/theme.interface';
import { CreateThemeDto } from 'src/database/dto/theme.dto';
import {ThemeRepository} from 'src/database/repositories/theme.repository';

@Injectable()
export class ThemeService {
  constructor(private readonly themeRepository: ThemeRepository) {}

  async create(createThemeDto: CreateThemeDto): Promise<ITheme> {
    return this.themeRepository.create(createThemeDto);
  }

  async deleteTheme(id: number): Promise<ITheme> {
    return await this.themeRepository.delete(id);
  }

  async getAllThemes(): Promise<ITheme[]> {
    return this.themeRepository.findAll();
  }
}