import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Material } from './material.entity';

@Injectable()
export class MaterialService {

    private materials : Material [] = [
        {
            id: 1,
            name: 'Lana',
            price: 30000
        }
    ];

    getMaterials(): Material[] {
        return this.materials;
    }

    getMaterial(id : number): Material {
        const material = this.materials.find((item) => item.id === id);
        if(!material){
            throw new NotFoundException(`Material ${id} not found`);
        }
        return material;
    }

    createMaterial(name: string, price: number) : void {
        if(!name || price<=0){
            throw new BadRequestException(`JSON Values not valid`);
        }
        this.materials.push({
            id: (Math.floor(Math.random() * 2000)+1),
            name: name,
            price: price
        });
    }

    updateMaterial(id: number, name: string, price: number): Material {
        const material: Material = this.getMaterial(id);

        if(!material){
            throw new NotFoundException(`Material ${id} not found`);
        }
        if(!name || price<=0){
            throw new BadRequestException(`JSON Values not valid`);
        }

        material.price = price;
        material.name = name;
        return material;
    }

    removeMaterial(id: number): void {
        const index = this.materials.findIndex((material) => material.id === id);
        if(index >= 0){
            this.materials.splice(index, 1);
        } else {
            throw new NotFoundException(`Material ${id} not found`);
        }
    }
}
