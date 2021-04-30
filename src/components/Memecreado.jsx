import React from "react";
import { Fragment } from "react";
import "./Memecreado.css";
const Memecreado = ({ meme, setClickeado }) => {
  return (
    <Fragment>
      <div className="meme-creado">
        <img className="memardo" src={meme} alt="" />
        <h4>Listo, acá tenés tu meme!</h4>
      </div>
      <button onClick={() => setClickeado(false)}>Atrás</button>
    </Fragment>
  );
};

export default Memecreado;
