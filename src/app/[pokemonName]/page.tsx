"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import { PokemonImage, TypePokemon, Loading } from "@/components";
import { getPokemon } from "@/lib/services/pokeApi.services";
import { PokemonPageProps } from "@/lib/types";

import { BsArrowLeft } from "react-icons/bs";

const PokemonPage: React.FC<PokemonPageProps> = ({ params }) => {
  const { pokemonName } = params;
  const [pokemonObject, setPokemonObject] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPokemon(pokemonName);
        setPokemonObject(data);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchData();
  }, [pokemonName]);

  if (!pokemonObject) {
    return <Loading />;
  }

  return (
    <div className="text-center">
      <div className="mt-4 ml-4">
        <Link href="/PokeApi">
          <button className="inline-block bg-blue-500 text-white rounded-full px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-600 flex items-center">
            <BsArrowLeft className="mr-2" />
            PokeApi
          </button>
        </Link>
      </div>
      <h1 className="text-4xl font-bold pt-4">
        {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
      </h1>
      <div
        className="m-4"
        style={{
          position: "relative",
          width: "300px",
          height: "300px",
          margin: "auto",
        }}
      >
        <PokemonImage
          image={pokemonObject.sprites.other["official-artwork"].front_default}
          name={pokemonName}
        />
      </div>
      <h3 className="my-6 text-center">
        {pokemonObject.types.length === 1 ? (
          <div className="flex items-center justify-center mb-2">
            <TypePokemon type={pokemonObject.types[0].type.name} />
          </div>
        ) : (
          <div className="flex items-center flex-wrap justify-center">
            {pokemonObject.types.map((type: { type: { name: string } }) => (
              <div key={type.type.name} className="flex items-center mr-4 mb-2">
                <TypePokemon type={type.type.name} />
              </div>
            ))}
          </div>
        )}
      </h3>
      <div
        className="flex-col mt-4 max-w-md mx-auto  md:mx-16 "
        style={{ width: "100%", margin: "auto" }}
      >
        {pokemonObject.stats.map((statObject: any) => {
          const statName = statObject.stat.name;
          const statValue = statObject.base_stat;
          const maxValue = 255;
          const barWidth = `${(statValue / maxValue) * 100}%`;

          return (
            <div className="flex items-center mb-2 mx-2 sm:mx-8" key={statName}>
              <div className="w-1/4 pr-4">{statName}:</div>
              <div className="w-3/4">
                <div className="flex items-center">
                  <div className="w-full bg-gray-300 rounded overflow-hidden">
                    <div
                      style={{ width: barWidth }}
                      className="bg-blue-500 h-4 rounded"
                    ></div>
                  </div>
                  <div className="pl-2">{statValue}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonPage;
