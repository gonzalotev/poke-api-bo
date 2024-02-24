import httpService from './httpService';
import { Pokemon } from '@/lib/types';

export const getPokemons = async (limit?: number, offset?: number): Promise<Pokemon[]> => {
  try {
    const queryParams = new URLSearchParams();
    if (limit) queryParams.append('limit', limit.toString());
    if (offset) queryParams.append('offset', offset.toString());

    const url = `/api/?${queryParams.toString()}`;
    const data = await httpService.get<Pokemon[]>(url);
    console.log('data service ',data)
    return data;
  } catch (error) {
    console.error('Error fetching pokemons:', error);
    throw error;
  }
};

export const getPokemon = async (name: string): Promise<Pokemon> => {
  try {
    const url = `/api/${name}`;
    const data = await httpService.get<Pokemon>(url);
    return data;
  } catch (error) {
    console.error(`Error fetching pokemon with name ${name}:`, error);
    throw error;
  }
};

