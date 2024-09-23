import { Module } from '@nestjs/common';

import { SizeController } from './size/controller/size.controller';
import { SizeService } from './size/service/size.service';
import { MaterialService } from './material/material.service';
import { MaterialController } from './material/material.controller';
import { ThemeController } from './theme/controller/theme.controller';
import { ThemeService } from './theme/service/theme.service';

@Module({
  controllers: [SizeController, MaterialController, ThemeController],
  providers: [SizeService, MaterialService, ThemeService],
})
export class ProductModule {}
