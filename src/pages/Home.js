import React from "react";
import Cocktail from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

export default function Home() {
  return (

   <main>
     <SearchForm />
     <Cocktail />
   </main>

  )
}
