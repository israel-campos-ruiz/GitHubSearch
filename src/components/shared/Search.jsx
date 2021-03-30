import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { saveLocalStorage } from "../../helpers/storage";

import "../../styles/shared/Search.css";

const Search = ({ placeholder, setSearchUser }) => {
  const [filter, setFilter] = useState("");
  const searchUser = (event) => {
    setFilter(event.target.value);
  };
  useEffect(()=>{
      saveLocalStorage('user-name', 'israel-campos-ruiz')
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
      setSearchUser(filter);
      // saveLocalStorage('user-name', filter)
      localStorage.setItem('user-name', filter)
    if (filter.length === 0) return;
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input__container">
        <input
          className="form__input"
          value={filter}
          onChange={searchUser}
          placeholder={placeholder}
        />
        <BsSearch className="icon" onClick={handleSubmit} />
        {/* <button className="button" type="submit">enviar</button> */}
      </div>
    </form>
  );
};
export default Search;
