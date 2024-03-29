import React, { useEffect, useState } from "react";
import { setTheme } from "../utils/utils";

const Toggle = () => {
  //eslint-disable-next-line
  const [togClass, setTogClass] = useState("dark");
  let theme = localStorage.getItem("theme");

  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-light");
      setTogClass("light");
    } else {
      setTheme("theme-dark");
      setTogClass("dark");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTogClass("dark");
    } else {
      setTogClass("light");
    }
  }, [theme]);

  return (
    <div className="container--toggle">
      {togClass === "light" ? (
        <input
          type="checkbox"
          id="toggle"
          className="toggle--checkbox"
          onClick={handleOnClick}
          checked={true}
          readOnly
        />
      ) : (
        <input
          type="checkbox"
          id="toggle"
          className="toggle--checkbox"
          onClick={handleOnClick}
          checked={false}
          readOnly
        />
      )}
      <label htmlFor="toggle" className="toggle--label">
        <span className="toggle--label-background"></span>
      </label>
    </div>
  );
};

export default Toggle;
