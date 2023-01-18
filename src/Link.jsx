import React from "react";

const Link = (props) => {
  return (
    <a href={props.link} target="_blank">
      <button>WATCH NOW</button>
    </a>
  );
};

export default Link;
