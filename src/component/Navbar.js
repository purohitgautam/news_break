import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({
  setCountry,
  setCategory,
  activeCountry,
  setActiveCategory,
  setActiveCountry,
  activeCategory
}) => {

  const countries = [
    {
      key: "us",
      value: "us",
    },
    {
      key: "india",
      value: "in",
    },
    {
      key: "australia",
      value: "au",
    },
    {
      key: "belgium",
      value: "be",
    },
    {
      key: "bulgaria",
      value: "bg",
    },
    {
      key: "canada",
      value: "ca",
    },
    {
      key: "china",
      value: "cn",
    },
    {
      key: "colombia",
      value: "co",
    },
    {
      key: "cuba",
      value: "cu",
    },
  ];

  const categories = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const hamburgerChecked = useRef()

  return (
    <div className="main-navbar">
      <h3 className="logo-mobile">Purohit-News</h3>      
      <label className="hamburger-menu" ref={hamburgerChecked}>
        <input type="checkbox" />
      </label>

      <div className="navbar">
        <ul className="countries">
          {countries.map((country, index) => {
            return (
              <li
                className={index === activeCountry ? "active-country" : ""}
                onClick={() => {
                  setCountry(country.value);
                  setActiveCountry(index);
                  hamburgerChecked.current.click()
                }}
                key={index}
              >
                {country.key}
              </li>
            );
          })}
        </ul>

        <div className="nav-items">
          <h3 className="logo-pc">NewsX</h3>
          <div className="nav-categories">
            <ul className="categories">
              {categories.map((value, index) => {
                return (
                  <NavLink
                    to={value === "general" ? "/" : `/${value}`}
                    key={index}
                    style={({ isActive }) => {
                      return {
                        textDecoration: "none",
                        borderBottom: isActive ? "1px solid rgb(201, 0, 201)" : "none"
                      };
                    }}
                  >
                    <li
                      className={
                        index === activeCategory ? "active-category" : ""
                      }
                      onClick={() => {
                        setCategory(value);
                        setActiveCategory(index);
                        hamburgerChecked.current.click()
                      }}
                      key={index}
                    >
                      {value}
                    </li>
                  </NavLink>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
