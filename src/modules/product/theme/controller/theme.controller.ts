import { Body, Controller, Delete, Get, Post , Param, Req} from '@nestjs/common';
import { ThemeService } from '../service/theme.service';
import { ITheme } from 'src/database/interface/theme.interface';
import { CreateThemeDto } from 'src/database/dto/theme.dto';

@Controller('theme')
export class ThemeController {
    constructor (private readonly ThemeService: ThemeService) {}

    @Post()
    async createTheme(@Body() createThemeDTO: CreateThemeDto): Promise <ITheme>{
        return await this.ThemeService.create(createThemeDTO);
    }

    @Get('ViewAllThemes')
    async getAllThemes(): Promise<ITheme[]> {
    return await this.ThemeService.getAllThemes();
    }
    @Delete('DeleteTheme')
    async DeleateTheme(@Body('id') id: number): Promise<ITheme> {
    return await this.ThemeService.deleteTheme(id);
  }
}
