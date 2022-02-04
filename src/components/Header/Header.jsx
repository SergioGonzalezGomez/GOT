import React from "react";
import { Context } from "../../App";
import { BackButton } from "../BackButton/BackButton";
import { Search } from "../Search/Search";
import "./Header.scss";

export const Header = () => {
  const { page } = React.useContext(Context);
  console.log(page);

  return (
    <div className="header">
      <div className="search">
        {page === "Characters" || (page === "Houses" && <Search />)}
      </div>

      <div className="back">
        {page === "CharactersDetail" ||
          (page === "HousesDetail" && <BackButton />)}
      </div>

      <div className="header_flags">
        {page !== "Home" && <img src="./images/home.png" alt="home" />}
        <img src="./images/spain.png" alt="spain flag" />
        <img src="./images/united-kingdom.png" alt="united-kingdom flag" />
      </div>
    </div>
  );
};
