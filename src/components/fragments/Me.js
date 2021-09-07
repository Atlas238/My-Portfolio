import React from "react";
import me from "../../assets/images/me.jpeg";
import Links from "./Links";

export default function Me() {
  return (
    <div className="avatar">
      <Links />
      <img
        className="meImg"
        alt="Jack Bentsen"
        src={me}
        width="125"
        style={{ borderRadius: 100 }}
      />
    </div>
  );
}
