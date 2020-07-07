import React, { Fragment, useState } from "react";
import Formulario from "./Formulario";
import "./fetching.css";
import Memecreado from "./Memecreado";
const Fetching = ({ linkImagen, setClickeado, setid, clickeado, setUrl }) => {
  let { id, url } = linkImagen;
  const [clickSubmit, setClickSubmit] = useState(true);
  const [memeCreado, setMemeCreado] = useState("");
  const clickMeme = (identifier) => {
    setClickeado(true);
    setid(identifier);
    setUrl(url);
  };
  return (
    <Fragment>
      {clickeado ? (
        <Fragment>
          <div className="row d-flex justify-content-center">
            <div className="col-12 mb-5 d-flex flex-wrap justify-content-center">
              {clickSubmit ? (
                <img
                  className="seleccionada"
                  src={linkImagen[0].url}
                  alt={linkImagen[0].id}
                />
              ) : (
                <Fragment>
                  <Memecreado meme={memeCreado} />

                  <h4 className="mt-3">Listo aca tenes tu meme!</h4>
                </Fragment>
              )}
            </div>
            <div>
              <Formulario
                setMemeCreado={setMemeCreado}
                setClickSubmit={setClickSubmit}
                id={linkImagen[0].id}
                setClickeado={setClickeado}
              />
            </div>
          </div>
        </Fragment>
      ) : (
        <div className="row d-flex justify-content-center">
          <img
            className="imagenesjuntas"
            onClick={() => {
              clickMeme(id);
            }}
            src={url}
            alt={id}
          />
        </div>
      )}
    </Fragment>
  );
};

export default Fetching;
