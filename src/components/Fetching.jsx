import React, { Fragment } from "react";
import Formulario from "./Formulario";
import "./fetching.css";
const Fetching = ({ linkImagen, setClickeado, setid, clickeado, setUrl }) => {
  let { id, url, box_count } = linkImagen;

  const construirArray = (box) => {
    let arr = [];
    let pusher = 0;
    for (let i = 0; i < box; i++) {
      arr.push(pusher);
      pusher++;
    }
    console.log(arr);
  };

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

              <form>{construirArray(box_count)}</form>
            </div>

            <div className="col-12">
              <button
                className="btn btn-primary"
                onClick={() => setClickeado(false)}
              >
                Atras
              </button>
              <button className="btn btn-success ml-3">Confirmar</button>
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
