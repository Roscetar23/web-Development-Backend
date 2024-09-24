import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type SizeDocument = Size & Document;

@Schema()
export class Size {
  @Prop({ required: true })
  @ApiProperty({
    title: 'ID',
  })
  id: Number;

  @Prop({ required: true })
  @ApiProperty({
    title: 'Num',
  })
  num: number;

}

export const SizeSchema = SchemaFactory.createForClass(Size);