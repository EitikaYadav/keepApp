import React from "react";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <React.Fragment>
      <div className="footer">
        <p>copyright ©️ {year}</p>
      </div>
    </React.Fragment>
  );
};
export default Footer;
