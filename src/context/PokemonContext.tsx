'use client'

import React, { createContext, useContext, ReactNode, useReducer, Dispatch } from 'react';
import { Pokemon, PokemonContextState } from '@/lib/types';

export interface PokemonContextProps {
  children: ReactNode;
}

type PokemonContextAction =
  | { type: 'SET_CURRENT_PAGE'; payload: number }
  | { type: 'SET_CURRENT_RESULTS'; payload: Pokemon[] };

type PokemonContextDispatch = Dispatch<PokemonContextAction>;

const initialState: PokemonContextState = {
  currentPage: 1,
  currentResults: [],
};

const pokemonContextReducer = (
  state: PokemonContextState,
  action: PokemonContextAction
): PokemonContextState => {
  switch (action.type) {
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload };
    case 'SET_CURRENT_RESULTS':
      return { ...state, currentResults: action.payload };
    default:
      return state;
  }
};

const PokemonContext = createContext<{ state: PokemonContextState; dispatch: PokemonContextDispatch } | undefined>(
  undefined
);

export const PokemonProvider: React.FC<PokemonContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(pokemonContextReducer, initialState);

  return <PokemonContext.Provider value={{ state, dispatch }}>{children}</PokemonContext.Provider>;
};

export const usePokemonContext = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error('usePokemonContext must be used within a PokemonProvider');
  }
  return context;
};
