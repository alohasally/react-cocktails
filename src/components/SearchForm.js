import React from "react";
import { useGlobalContext } from '../context';

export default function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  return (  
  <div>
    <h2>searchform component</h2>;
  </div>

  )
}

