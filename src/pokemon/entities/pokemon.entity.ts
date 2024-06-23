import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

@Schema()
export class Pokemon extends Document {

    @Prop({
        instance: true,
        unique: true
    })
    name: string;
    
    @Prop({
        instance: true,
        unique: true
    })
    no: number;
}

export const PokemonSchema = SchemaFactory.createForClass( Pokemon );