import React, { Fragment, useState } from "react";
import Memecreado from "./Memecreado";
const Formulario = ({ setClickeado, id }) => {
  const [texto, setTexto] = useState({ texto1: "", texto2: "" });
  const [memeCreado, setMemeCreado] = useState("");
  const crearMeme = async (e) => {
    e.preventDefault();
    var form = new FormData();
    form.append("template_id", id);
    form.append("username", "marcoluchi11");
    form.append("password", "eduardo11");
    form.append("text1", texto.texto1);
    form.append("text0", texto.texto2);
    const request = {
      method: "POST",
      body: form,
    };
    const rta = await fetch("https://api.imgflip.com/caption_image", request);
    const dato = await rta.json();
    setMemeCreado(dato.data.url);

    setTexto({
      texto1: "",
      texto2: "",
    });
  };
  const handleChange = (e) => {
    setTexto({ ...texto, [e.target.name]: e.target.value });
  };
  return (
    <Fragment>
      <form onSubmit={crearMeme}>
        <input
          onChange={handleChange}
          name="texto2"
          type="text"
          placeholder="Coloca el texto2 aqui"
        />
        <input
          onChange={handleChange}
          name="texto1"
          type="text"
          placeholder="Coloca el texto1 aqui"
        />
        <Memecreado meme={memeCreado} />
        <div className="col-12">
          <button
            className="btn btn-primary"
            onClick={() => setClickeado(false)}
          >
            Atras
          </button>
          <button type="submit" className="btn btn-success ml-3">
            Confirmar
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default Formulario;
