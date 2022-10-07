import React from "react";
import Cocktail from "cocktail";
import Loading from "loading";
import { useGlobalContext } from '../context';

export default function CocktailList() {
  const {cocktails, loading} = useGlobalContext();
  return <h1>cocktailList component</h1>;
}
