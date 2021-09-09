import React, { useState } from "react";

import Icon from "./fragments/Icon";

export default function HeaderNav({ theme }) {
  const [display, setDisplay] = useState(false);

  return (
    <div className={`navbar ${theme}`}>
      <div className={`brand ${theme}`}>
        {theme === "light" ? <Icon icon="mug-hot" /> : <Icon icon="star" />}
        <h1>
          <a href="#home">Jack Ryan Bentsen</a>
        </h1>
      </div>
      <div className={`navlinks ${theme}`}>
        <ul>
          <li>
            <a href="#work">My Work</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
