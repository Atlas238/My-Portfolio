import React, { useState } from "react";

import Icon from "./fragments/Icon";

export default function HeaderNav({ theme }) {
  const [display, setDisplay] = useState(false);

  return (
    <div className={`navbar ${theme}`}>
      <div className="brand">
        <Icon icon="mug-hot" />
        <h1>Jack Ryan Bentsen</h1>
      </div>
      <div className="navlinks"></div>
    </div>
  );
}
