import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <a
        href="https://cafecito.app/marcoluchi11"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          srcset="https://cdn.cafecito.app/imgs/buttons/button_4.png 1x, https://cdn.cafecito.app/imgs/buttons/button_4_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_4_3.75x.png 3.75x"
          src="https://cdn.cafecito.app/imgs/buttons/button_4.png"
          alt="Invitame un café en cafecito.app"
        />
      </a>
    </footer>
  );
};
export default Footer;
