import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment" style={{ marginTop: "20px" }}>
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            placeholder={`Find video which inspire you 🤩`}
            value={term}
            onChange={onInputChange}
            type="text"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
