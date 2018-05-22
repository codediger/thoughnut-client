import React from "react";

const Image = ({ src, alt, style, onClick }) => (
  <img src={src} alt={alt} style={style} onClick={onClick} />
);

export default Image;
