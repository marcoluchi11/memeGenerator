import React, { Fragment } from "react";

const Fetching = ({ linkImagen }) => {
  return (
    <Fragment>
      <img src={linkImagen.url} alt={linkImagen.id} />
    </Fragment>
  );
};

export default Fetching;
