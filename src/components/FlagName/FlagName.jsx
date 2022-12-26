import React, { useContext } from "react";
import { Image } from "antd";
import AppContext from "../../store/AppContext";
import "./FlagName.css";

const FlagName = () => {
  const state = useContext(AppContext);

  return (
    <div className="containerFlagName">
      <div>
        <Image width={300} src={state.paisSeleccionado.flags.png} />
      </div>
      <div className="nameFlag">
        <h3>{state.paisSeleccionado.name.official}</h3>
      </div>
    </div>
  );
};

export default FlagName;
