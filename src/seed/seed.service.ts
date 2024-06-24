import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios, { AxiosInstance } from 'axios';
import { PokeoResponse } from './interfaces/poke-response.interface';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel( Pokemon.name )
    private readonly pokemonModel: Model<Pokemon>
  ){}

  private readonly axios: AxiosInstance = axios;

  async executeSeed() {
    await this.pokemonModel.deleteMany({});
    const { data } = await this.axios.get<PokeoResponse>(`https://pokeapi.co/api/v2/pokemon?limit=650`);
    const pokemonToInsert: {name: string, no: number }[] = [];
    data.results.forEach(( {name, url} ) => {
      const segments = url.split('/');
      const no: number = +segments[ segments.length - 2];
      // const pokemon = await this.pokemonModel.create({name, no});
      // console.log( pokemon );
      pokemonToInsert.push({ name, no});

    });
    await this.pokemonModel.insertMany( pokemonToInsert );
    
    return 'Seed Executed!';
  }
}
