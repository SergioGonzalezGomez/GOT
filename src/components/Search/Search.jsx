import React from 'react';
import "./Search.scss"

export const Search = ({changeSearch}) => {  
  
const handleInput = (ev) => {
  const {value} = ev.target;
  changeSearch(value);
};
  return <div className="form">
<img className="img-search" src="/images/search.png" alt="search" />
  <form>
    
    <input
      type="text" onChange={handleInput} placeholder="Buscar..."
    />
  </form>
</div>;
};
