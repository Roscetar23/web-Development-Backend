import { Injectable, NotFoundException } from '@nestjs/common';
import { Size } from '../size.entity';

@Injectable()
export class SizeService {
    private sizes: Size[] = [
        {
            id: 125,
            num: 14
        }
    ];

    getSizes(): Size[] {
        return this.sizes;
    }

    getSize(id : number): Size {
        const material = this.sizes.find((item) => item.id === id);
        if(!material){
            throw new NotFoundException(`Material ${id} not found`);
        }
        return material;
    }

    createSize(num:number) : void {
        this.sizes.push({
            id: (Math.floor(Math.random() * 2000)+1),
            num: num,
        });
    }

    updateSize(id: number, num: number): Size {
        const size: Size = this.getSize(id);

        if(!size){
            throw new NotFoundException(`Size ${id} not found`);
        }


        size.num = num;
        return size;
    }

    removeSize(id: number): void {
        const index = this.sizes.findIndex((size) => size.id === id);
        if(index >= 0){
            this.sizes.splice(index, 1);
        } else {
            throw new NotFoundException(`Size ${id} not found`);
        }

    }
}
