import React, { useState, useEffect, Fragment } from "react";
import Fetching from "./components/Fetching";
import "./App.css";
import "./bootstrap.min.css";
import "./components/fetching.css";

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
    const GeneradorMeme = async () => {
      var form = new FormData();
      form.append("template_id", "181913649");
      form.append("username", "marcoluchi11");
      form.append("password", "eduardo11");
      form.append("text1", "tu mama");
      form.append("text0", "quasd tira la goma tu senora");
      const request = {
        method: "POST",

        body: form,
      };
      const rta = await fetch("https://api.imgflip.com/caption_image", request);
      const dato = await rta.json();
      console.log(dato);
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
      <div className="container centrado">
        <h1>Crea tu meme</h1>
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
    </Fragment>
  );
}

export default App;
