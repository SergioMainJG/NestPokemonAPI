import { IsInt, IsPositive, IsString, Min, MinLength} from 'class-validator';


export class CreatePokemonDto {

    // isInt, isPositive, min 1
    @IsInt()
    @IsPositive()
    @Min(1, {
        message: `el no debe tener un valor igual o superior a 1`
    })
    no: number;
    // isString, minLenght 1
    @IsString()
    @MinLength(3)
    name: string;

}2
