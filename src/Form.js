import React from "react";
import handleChange from "./Main";
import changeCity from "./Main";

export default function Form() {
  return (
    <form className="row" onSubmit={handleChange}>
      <input
        type="search"
        className="col-sm-8 input-form text-capitalize"
        placeholder="Type a city"
        onChange={changeCity}
      />
      <input
        type="submit"
        value="Search"
        className="btn btn-primary col-sm-3"
      />
    </form>
  );
}
