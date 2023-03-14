import React, { useState } from "react";

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="search">
      <input
        onChange={inputHandler}
        placeholder="請輸入英文關鍵字"
        type="text"
      />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;
