import React from "react";
import { Context } from "../../App";
import './Home.scss'

export const Home = () => {
  const {page, setPage, setSearch} = React.useContext(Context);
  
  React.useEffect(() => {
    setPage("Home");
    setSearch('');
    console.log(page);
    page === "Home"
    ? document.body.classList.add("home")
    : document.body.classList.length !== 0 &&
      document.body.classList.remove("home");
  }, [page]);
  
  
  return (
    <div className="home-container">
      <h1>GAME OFF THRONES</h1>
    </div>
  );
};
