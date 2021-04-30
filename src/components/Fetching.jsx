import React, { Fragment, useState } from "react";
import Formulario from "./Formulario";
import "./fetching.css";
import Memecreado from "./Memecreado";
const Fetching = ({ linkImagen, setClickeado, setid, clickeado, setUrl }) => {
  let { id, url, name } = linkImagen;
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
          <div>
            <div>
              {clickSubmit ? (
                <img
                  className=""
                  src={linkImagen[0].url}
                  alt={linkImagen[0].id}
                />
              ) : (
                <Fragment>
                  <Memecreado meme={memeCreado} />

                  <h4>Listo, acá tenés tu meme!</h4>
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
        <div
          className="card"
          onClick={() => {
            clickMeme(id);
          }}
        >
          <img src={url} alt={id} />
          <h3>{name}</h3>
        </div>
      )}
    </Fragment>
  );
};

export default Fetching;
