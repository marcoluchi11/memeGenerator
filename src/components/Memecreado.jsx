import React from "react";
import { Fragment } from "react";
import "./Memecreado.css";
const Memecreado = ({ meme, setClickeado }) => {
  return (
    <Fragment>
      <div id="meme-creado">
        <img src={meme} alt="" />
        <h4>Listo, acá tenés tu meme!</h4>
      </div>
      <button onClick={() => setClickeado(false)}>
        {"<- "} Volver al menú principal
      </button>
    </Fragment>
  );
};

export default Memecreado;
