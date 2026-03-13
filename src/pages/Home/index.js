import React, { useCallback } from "react";
import { useLocation } from "wouter";
import { useGifs } from "hooks/useGifs";
import ListOfGifs from "components/ListOfGifs";
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";

export default function Home() {
  const [, pushLocation] = useLocation();
  const { gifs } = useGifs();

  const handleSubmit = useCallback(({ keyword }) => {
    //Navegar a otra ruta
    pushLocation(`/search/${keyword}`);
  }, [pushLocation]);

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category">
          <TrendingSearches />
        </div>
      </div>
    </>
  );
}
