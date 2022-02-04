import React from 'react';
import { Context } from "../../App";
import {Link} from 'react-router-dom';

export const BackButton = () => {
  const {page} = React.useContext(Context);
  let fatherPage = "";
  fatherPage = page === "CharactersDetail" ? "characters" : "houses"

  return <div className="backButton">
      <Link to={`/${fatherPage}`}><img src="/images/back.png" alt="back" /> Back</Link>
  </div>;
};
