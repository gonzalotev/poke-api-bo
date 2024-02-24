export interface Pokemon {
    name: string;
    sprites: {
      front_default: string;
      other: any;
    };
    image: string;
    types: [];
    stats: [];
}

export interface PokemonGridProps {
  pokemonList: Pokemon[];
}

export interface PokemonCardProps {
  name: string;
  image: string;
  types: string[];
}

export interface PokemonPageProps {
  params: { pokemonName: string };
}

export interface PaginationProps {
  currentPage: number;
  handlePageChange: (newPage: number) => void;
  isLoading: boolean;
}

export interface TypeBadgeProps {
  type: string | string[];
}

export interface PokemonContextState {
  currentPage: number;
  currentResults: Pokemon[];
}