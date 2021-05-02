import React, { useState, useEffect } from "react";
import Fetching from "./components/Fetching";
import "./App.css";
import Footer from "./components/Footer";
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
    <div>
      {clickeado ? (
        <h1>Crea el meme a tu gusto</h1>
      ) : (
        <h1>Seleccioná el meme que quieras crear</h1>
      )}
      <div className="container">
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

      <hr />
      <Footer clickeado={clickeado} />
    </div>
  );
}

export default App;
