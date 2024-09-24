import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type MaterialDocument = Material & Document;

@Schema()
export class Material {
  @Prop({ required: true })
  @ApiProperty({
    title: 'ID',
  })
  id: number;

  @Prop({ required: true })
  @ApiProperty({
    title: 'Name',
  })
  name: string;

  @Prop({ required: true })
  @ApiProperty({
    title: 'Price',
  })
  price: number;
}

export const MaterialSchema = SchemaFactory.createForClass(Material);
