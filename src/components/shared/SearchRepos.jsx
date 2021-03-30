import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "../../styles/shared/Search.css";

const SearchRepos = ({ placeholder, setSearchRepos }) => {
  const [filter, setFilter] = useState("");
  const searchUser = (event) => {
    setFilter(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchRepos(filter);
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
export default SearchRepos;
