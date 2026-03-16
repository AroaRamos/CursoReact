// Este componente se encarga de renderizar el formulario de búsqueda y manejar su estado local.
import React from "react";
import { useLocation } from "wouter";
import css from "./SearchForm.module.css";
import useForm from "./hook";

const RATINGS = ["g", "pg", "pg-13", "r"];

export default function SearchForm({
  initialKeyword = "",
  initialRating = "g",
}) {

  const { keyword, rating, times,  updateKeyword, updateRating } = useForm({initialKeyword, initialRating});

  const [, pushLocation] = useLocation();

  const handleChange = (evt) => {
    updateKeyword(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //Navegar a otra ruta
    pushLocation(`/search/${keyword}/${rating}`);
  };

  const handleRatingChange = (evt) => {
    updateRating(evt.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={css["c-search"]}>
      <button className={css["c-search__btn"]}>Buscar</button>
      <input
        className={css["c-search__input"]}
        placeholder="Search a gif here ..."
        onChange={handleChange}
        type="text"
        value={keyword}
      />
      <select value={rating} onChange={handleRatingChange} >  
        <option disabled value="">Rating type</option>
        {RATINGS.map((rating) => (
          <option key={rating} value={rating}> {rating}</option>
        ))}
      </select>
    </form>
  );
}
