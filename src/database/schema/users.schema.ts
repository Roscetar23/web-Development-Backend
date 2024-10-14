import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type UsersDocument = Users & Document;

@Schema()
export class Users {
  @Prop({ unique: true })
  @ApiProperty({
    title: 'nameUser',
  })
  nameUser: string;

  @Prop({ unique: true })
  @ApiProperty({
    title: 'password',
  })
  password: string;

  @Prop({ unique: true })
  @ApiProperty({
    title: 'email',
  })
  email: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
