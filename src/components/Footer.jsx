import React from "react";

const Footer = ({ clickeado }) => {
  let clase;
  if (clickeado) {
    clase = "d-flex mt-5 justify-content-center";
  } else {
    clase = "d-flex mt-5 justify-content-center ";
  }
  return (
    <footer className={clase}>
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
        &copy; - 2020
      </a>
    </footer>
  );
};
export default Footer;
