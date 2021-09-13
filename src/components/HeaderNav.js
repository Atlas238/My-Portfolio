import React from "react";

import Icon from "./fragments/Icon";

export default function HeaderNav({ theme, setView, view }) {
  return (
    <div className={`navbar ${theme}`}>
      <div className={`brand ${theme}`}>
        {theme === "light" ? <Icon icon="mug-hot" /> : <Icon icon="star" />}
        <h1>
          <a
            href="#home"
            onClick={() => (view === "home" ? null : setView("home"))}
          >
            Jack Ryan Bentsen
          </a>
        </h1>
      </div>
      <div className={`navlinks ${theme}`}>
        <ul>
          {view === "resume" ? (
            <li>
              <a href="#timeline">Timeline</a>
            </li>
          ) : (
            <li>
              <a
                href="#work"
                onClick={() => (view === "home" ? null : setView("home"))}
              >
                My Work
              </a>
            </li>
          )}
          {view === "resume" ? (
            <li>
              <a href="#home" onClick={() => setView("home")}>
                Home
              </a>
            </li>
          ) : (
            <li>
              <a href="#home" onClick={() => setView("resume")}>
                My History
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
