import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type ColorDocument = Color & Document;

@Schema()
export class Color {
  @Prop({ required: true })
  @ApiProperty({
    title: 'ID',
  })
  id: number;

  @Prop({ required: true })
  @ApiProperty({
    title: 'Hexa_RGB',
  })
  hexa_rgb: string;

  @Prop({ required: true })
  @ApiProperty({
    title: 'Name',
  })
  name: string;
}

export const ColorSchema = SchemaFactory.createForClass(Color);
