import {pokemonTypesData} from "@/lib/constants";

export const getTypeColor = (type: string): string => {
  const typeData = pokemonTypesData.find((data: { type: string; }) => data.type.toLowerCase() === type.toLowerCase());
  return typeData ? typeData.color : "gray";
};

export const getTypeLogo = (type: string): string => {
  const typeData = pokemonTypesData.find((data: { type: string; }) => data.type.toLowerCase() === type.toLowerCase());
  return typeData ? typeData.image : "types/fire.png";
};