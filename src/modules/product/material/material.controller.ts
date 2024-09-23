import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MaterialService } from './material.service';
import { Material } from './material.entity';

@Controller('material')
export class MaterialController {

    constructor(private readonly materialService : MaterialService){}

    @Get()
    getAllMaterials() : Material[] {
        return this.materialService.getMaterials();
    }

    @Get(':id')
    getMaterialById(@Param('id') id : string) : Material {
        return this.materialService.getMaterial(parseInt(id));
    }

    @Post()
    createMaterial(@Body() body) : void {
        this.materialService.createMaterial(body.name, body.price);
    }

    @Patch(':id')
    updateMaterial(@Param('id') id : string, @Body() body) : Material {
        return this.materialService.updateMaterial(parseInt(id), body.name, body.price);
    }

    @Delete(':id')
    removeMaterial(@Param('id') id : string) : void {
        this.materialService.removeMaterial(parseInt(id));
    }
}
