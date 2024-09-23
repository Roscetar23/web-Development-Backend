import { Module } from '@nestjs/common';

import { SizeController } from './size/size.controller';
import { SizeService } from './size/size.service';
import { MaterialService } from './material/material.service';
import { MaterialController } from './material/material.controller';
import { ColorController } from './color/color.controller';
import { ColorService } from './color/color.service';
import { ThemeController } from './theme/theme.controller';
import { ThemeService } from './theme/theme.service';

@Module({
  controllers: [SizeController, MaterialController, ColorController, ThemeController],
  providers: [SizeService, MaterialService, ColorService, ThemeService]
})
export class ProductModule {}
