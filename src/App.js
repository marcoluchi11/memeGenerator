import React, { useState, useEffect, Fragment } from "react";
import Fetching from "./components/Fetching";
import "./App.css";
import "./bootstrap.min.css";
import "./components/fetching.css";
import Footer from "./components/Footer";
import header from "./header.png";
function App() {
  const [memeGenerator, setMemes] = useState({
    data: {
      memes: [
        {
          id: "",
          name: "",
          url: "",
          width: "",
          height: "",
          box_count: "",
        },
      ],
    },
  });
  const [clickeado, setClickeado] = useState(false);
  const [id, setid] = useState({});
  console.log(id);
  const [url, setUrl] = useState({});
  useEffect(() => {
    const traerDatos = async () => {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const jotason = await response.json();
      const jotason2 = jotason.data.memes.filter(
        (meme) => meme.box_count === 2
      );

      jotason.data.memes = jotason2;
      console.log(jotason);
      setMemes(jotason);
    };

    // GeneradorMeme();
    traerDatos();
  }, []);
  const filtrarArreglo = () => {
    const filtrado = memeGenerator.data.memes.filter(
      (meme) => meme.url === url
    );
    return filtrado;
  };

  return (
    <Fragment>
      <div className="container">
        <header>
          <img id="encabezado" src={header} alt="" />
        </header>
        {clickeado ? (
          <h5 className="mt-3">Edita el meme a tu gusto</h5>
        ) : (
          <h5 className="mt-3">Selecciona el meme que quieras editar</h5>
        )}
        <div className="row d-flex justify-content-center">
          {clickeado ? (
            <Fetching
              linkImagen={filtrarArreglo()}
              setClickeado={setClickeado}
              clickeado={clickeado}
            />
          ) : (
            memeGenerator.data.memes.map((meme) => (
              <Fetching
                key={meme.id}
                linkImagen={meme}
                setid={setid}
                setUrl={setUrl}
                setClickeado={setClickeado}
                clickeado={clickeado}
              />
            ))
          )}
        </div>
      </div>
      <Footer clickeado={clickeado} />
    </Fragment>
  );
}

export default App;
