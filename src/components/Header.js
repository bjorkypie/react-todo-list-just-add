import React from "react";
//passing in properties to header 
const Header = (props) => {
  return (
    <div>
      <h1 style={headerStyle}>{props.title}</h1>
    </div>
  );
};
//declaring headerStyle variable with styling
const headerStyle = {
  fontSize: "40px",
  textDecoration: "underline",
};

export default Header;
