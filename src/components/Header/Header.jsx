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
      <div>
      {(page === "Characters" || page === "Houses") && <div className="search">
         <Search />
      </div>}

      {(page === "CharactersDetail" ||
          page === "HousesDetail") && <div className="back">
         <BackButton />
      </div>}
      </div>

      <div className="header_flags">
        {page !== "Home" && <img src="./images/home.png" alt="home" />}
        <img src="./images/spain.png" alt="spain" />
        <img src="./images/united-kingdom.png" alt="united-kingdom" />
      </div>
    </div>
  );
};
