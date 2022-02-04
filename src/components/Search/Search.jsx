import React from 'react';

export const Search = ({changeSearch}) => {  
  
const handleInput = (ev) => {
  const {value} = ev.target;
  changeSearch(value);
};
  return <div className="form">
  <form>
    <img src="/images/search.png" alt="back" />
    <input
      type="text" onChange={handleInput} placeholder="Search"
    />
  </form>
</div>;
};
