import React, { Fragment } from "react";
import Formulario from "./Formulario";
import "./fetching.css";
import shortid from "shortid";
const Fetching = ({ linkImagen, setClickeado, setid, clickeado, setUrl }) => {
  let { id, url } = linkImagen;

  const clickMeme = (identifier) => {
    console.log(identifier);
    setClickeado(true);
    setid(identifier);
    setUrl(url);
  };
  return (
    <Fragment>
      {clickeado ? (
        <Fragment>
          <div className="row">
            <div className="col-12 mb-5">
              <img
                className="seleccionada"
                src={linkImagen[0].url}
                alt={linkImagen[0].id}
              />
            </div>
            <div className="col-12 mb-5">
              <Formulario id={linkImagen[0].id} setClickeado={setClickeado} />
            </div>
          </div>
        </Fragment>
      ) : (
        <img
          className="imagenesjuntas"
          onClick={() => {
            clickMeme(id);
          }}
          src={url}
          alt={id}
        />
      )}
    </Fragment>
  );
};

export default Fetching;
