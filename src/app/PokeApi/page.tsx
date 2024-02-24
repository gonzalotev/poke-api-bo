'use client';
import React, { useState, useEffect } from 'react';

import { PokemonCard, Pagination, Loading } from '@/components';
import { getPokemons } from '@/lib/services/pokeApi.services';
import { Pokemon } from '@/lib/types';
import { usePokemonContext } from '@/context/PokemonContext';

const PokeApi = () => {
  const [searchText, setSearchText] = useState('');
  const { state, dispatch } = usePokemonContext();
  const { currentPage, currentResults } = state;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPokemonsData(currentPage);
  }, [currentPage]);

  const fetchPokemonsData = async (page: number) => {
    try {
      setLoading(true);
      let data = await getPokemons(20, (page - 1) * 20);
      dispatch({ type: 'SET_CURRENT_RESULTS', payload: data });
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const searchFilter = (pokemonList: Pokemon[]) => {
    return pokemonList.filter((pokemon: Pokemon) =>
        pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const filteredPokemonList = searchFilter(currentResults);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1) {
      dispatch({ type: 'SET_CURRENT_PAGE', payload: newPage });
    }
  };

  return (
    <>
      <div className="text-center">
        <h3 className="text-2xl py-6">Search For Your Pokemon!</h3>
        <div className="grid w-full max-w-sm gap-1.5 mx-auto">
          <input
            type="text"
            value={searchText}
            autoComplete="off"
            id="pokemonName"
            placeholder="Charizard, Pikachu, etc."
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full py-2 px-4 border rounded-md"
          />
        </div>
        <h3 className="text-3xl pt-12 pb-6">Pokemon Collection</h3>
      </div>

      {loading && <Loading />}

      <div className="grid text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-16">
    {filteredPokemonList.map((pokemon: any) => (
      <div key={pokemon.name + 'Card'}>
        <PokemonCard
          name={pokemon.name}
          image={pokemon.image}
          types={pokemon.types}
        />
      </div>
    ))}
  </div>

      <Pagination
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        isLoading={loading}
      />
    </>
  );
};

export default PokeApi;