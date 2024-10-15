import { Module } from '@nestjs/common';

import { SizeController } from './size/controller/size.controller';
import { SizeService } from './size/service/size.service';
import { MaterialService } from './material/service/material.service';
import { MaterialController } from './material/controller/material.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Color, ColorSchema } from 'src/database/schema/color.schema';
import { ColorController } from './color/controller/color.controller';
import { ColorRepository } from 'src/database/repositories/color.repository';
import { Material, MaterialSchema } from 'src/database/schema/material.schema';
import { ColorService } from './color/service/color.service';
import { MaterialRepository } from 'src/database/repositories/material.repository';
import { Size, SizeSchema } from 'src/database/schema/size.schema';
import { SizeRepository } from 'src/database/repositories/size.repositorie';
import { UsersSchema, Users } from 'src/database/schema/users.schema';
import { UsersController } from './users/controller/users.controller';
import { UsersRepository } from 'src/database/repositories/users.repository';
import { usersService } from './users/service/users.service';
import { Theme, ThemeSchema } from 'src/database/schema/theme.schema';
import { ThemeController } from './theme/controller/theme.controller';
import { ThemeService } from './theme/service/theme.service';
import { ThemeRepository } from 'src/database/repositories/theme.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Color.name, schema: ColorSchema }]),
    MongooseModule.forFeature([
      { name: Material.name, schema: MaterialSchema },
    ]),
    MongooseModule.forFeature([{ name: Size.name, schema: SizeSchema }]),
    MongooseModule.forFeature([{ name: Theme.name, schema: ThemeSchema }]),
    MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }]),
  ],

  controllers: [
    ColorController,
    SizeController,
    MaterialController,
    UsersController,
    ThemeController,
  ],
  providers: [
    ColorService,
    SizeService,
    MaterialService,
    usersService,
    ThemeService,
    ColorRepository,
    MaterialRepository,
    SizeRepository,
    UsersRepository,
    ThemeRepository,
  ],
})
export class ProductModule {}
