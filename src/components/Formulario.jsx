import React, { Fragment } from "react";

const Formulario = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <Fragment>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Coloca el texto aqui"
      />
    </Fragment>
  );
};

export default Formulario;
