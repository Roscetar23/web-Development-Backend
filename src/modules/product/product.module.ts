import { Module } from '@nestjs/common';

import { SizeController } from './size/controller/size.controller';
import { SizeService } from './size/service/size.service';
import { MaterialService } from './material/service/material.service';
import { MaterialController } from './material/controller/material.controller';
import { ThemeController } from './theme/controller/theme.controller';
import { ThemeService } from './theme/service/theme.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Color, ColorSchema } from 'src/database/schema/color.schema';
import { ColorController } from './color/controller/color.controller';
import { ColorRepository } from 'src/database/repositories/color.repository';
import { Material, MaterialSchema } from 'src/database/schema/material.schema';
import { ColorService } from './color/service/color.service';
import { MaterialRepository } from 'src/database/repositories/material.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Color.name, schema: ColorSchema }]),
    MongooseModule.forFeature([
      { name: Material.name, schema: MaterialSchema },
    ]),
  ],

  controllers: [
    ColorController,
    SizeController,
    MaterialController,
    ThemeController,
  ],
  providers: [
    ColorService,
    SizeService,
    MaterialService,
    ThemeService,
    ColorRepository,
    MaterialRepository,
  ],
})
export class ProductModule {}
