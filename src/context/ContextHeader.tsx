"use client";
import { ReactNode, createContext, useContext, useState } from "react";

type EntitiesProviderProps = {
  children: ReactNode;
};
type EntitiesContextProps = {
  searchActive: boolean;
  setSearchActive: (value: boolean) => void;
  movie: string;
  setMovie: (value: string) => void;
  text: string;
  setText: (value: string) => void;
};
const EntitiesContext = createContext<EntitiesContextProps>(
  {} as EntitiesContextProps
);

export function EntitiesProvider({ children }: EntitiesProviderProps) {
  const [searchActive, setSearchActive] = useState(false);
  const [movie, setMovie] = useState("");
  const [text, setText] = useState("");

  return (
    <EntitiesContext.Provider
      value={{ searchActive, setSearchActive, movie, setMovie, text, setText }}
    >
      {children}
    </EntitiesContext.Provider>
  );
}

export function useEntities() {
  const context = useContext(EntitiesContext);

  return context;
}
