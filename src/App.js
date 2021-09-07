import React, { useState } from "react";
import HeaderNav from "./components/HeaderNav";

import "./assets/css/style.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

import Me from "./components/fragments/Me";
import Greeting from "./components/Greeting";
import ThemeToggle from "./components/fragments/ThemeToggle";

library.add(fab, fas, faCheckSquare, faCoffee);

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <section>
      <HeaderNav theme={theme} />
      <div className={`main ${theme}`}>
        <Greeting theme={theme} />
        <Me />
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>
    </section>
  );
}

export default App;
