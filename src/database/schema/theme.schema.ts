import { Prop,  Schema, SchemaFactory  } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

export type ThemeDocument = Theme & Document;

@Schema()
export class Theme {
    @Prop({ required: true })
    @ApiProperty({
      title: 'id'
    })
    id: number;
  
    @Prop({ required: true })
    @ApiProperty({
      title: 'nameTheme',
    })
    nameTheme: string;
  
}
export const ThemeSchema = SchemaFactory.createForClass(Theme);