import React, { useState } from "react";
import "./Formulario.css";
const Formulario = ({ setClickeado, id, setClickSubmit, setMemeCreado }) => {
  const [texto, setTexto] = useState({ texto1: "", texto2: "" });

  const crearMeme = async (e) => {
    e.preventDefault();
    var form = new FormData();
    form.append("template_id", id);
    form.append("username", "marcoluchi11");
    form.append("password", "eduardo11");
    form.append("text0", texto.texto1);
    form.append("text1", texto.texto2);
    const request = {
      method: "POST",
      body: form,
    };
    const rta = await fetch("https://api.imgflip.com/caption_image", request);
    const dato = await rta.json();
    setMemeCreado(dato.data.url);
    setClickSubmit(false);
    setTexto({
      texto1: "",
      texto2: "",
    });
  };
  const handleChange = (e) => {
    setTexto({ ...texto, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={crearMeme}>
      <div>
        <input
          autoComplete="off"
          onChange={handleChange}
          name="texto1"
          type="text"
          value={texto.texto1}
          placeholder="Coloca el texto1 aquí"
        />
        <input
          autoComplete="off"
          onChange={handleChange}
          name="texto2"
          type="text"
          value={texto.texto2}
          placeholder="Coloca el texto2 aquí"
        />
      </div>
      <div>
        <button className="btn btn-primary" onClick={() => setClickeado(false)}>
          Atrás
        </button>
        <button type="submit">Confirmar</button>
      </div>
    </form>
  );
};

export default Formulario;
