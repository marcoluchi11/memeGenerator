import React, { Fragment, useState } from "react";
import Formulario from "./Formulario";
import "./Fetching.css";
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
                <div id="meme-elegido">
                  <img src={linkImagen[0].url} alt={linkImagen[0].id} />
                </div>
              ) : (
                <Fragment>
                  <Memecreado setClickeado={setClickeado} meme={memeCreado} />
                </Fragment>
              )}
            </div>
            <div>
              {clickSubmit ? (
                <Formulario
                  setMemeCreado={setMemeCreado}
                  setClickSubmit={setClickSubmit}
                  id={linkImagen[0].id}
                  setClickeado={setClickeado}
                />
              ) : null}
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
