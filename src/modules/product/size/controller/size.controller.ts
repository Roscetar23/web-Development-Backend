import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { SizeService } from '../service/size.service';
import { Size } from '../size.entity';

@Controller('size')
export class SizeController {

    constructor(private readonly sizeService: SizeService){

    }
    @Get()
    getSizes(): Size[]{
        return this.sizeService.getSizes();
    }

    @Get(':id')
    getSize(@Param('id') id:string): Size{
        return this.sizeService.getSize(parseInt(id));
    }

    @Post()
    createSize(@Body() body) : void{
        this.sizeService.createSize(body.num);
    }
    
    @Patch(':id')
    updateSize(@Param('id') id:string, @Body() body): Size{
        return this.sizeService.updateSize(parseInt(id), body.num);
    }

    @Delete(':id')
    deleteSize(@Param('id') id:string): void{
        this.sizeService.removeSize(parseInt(id));
    }
}

