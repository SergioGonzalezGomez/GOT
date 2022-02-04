import React from 'react';
import { Context } from "../../App";

export const Chronology = () => {
  const {page, setPage} = React.useContext(Context);
  
  React.useEffect(() => {
    setPage("Chornology");
    console.log(page);
    page === "Home"
    ? document.body.classList.add("home")
    : document.body.classList.length !== 0 &&
      document.body.classList.remove("home");
  }, [page]);
  
  return <div>Chronology</div>;
};
