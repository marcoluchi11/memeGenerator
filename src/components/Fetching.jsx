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
          <div className="row">
            <div className="col-12 mb-5">
              {clickSubmit ? (
                <img
                  className="seleccionada"
                  src={linkImagen[0].url}
                  alt={linkImagen[0].id}
                />
              ) : (
                <Memecreado meme={memeCreado} />
              )}
            </div>
            <div className="col-12 mb-5">
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
