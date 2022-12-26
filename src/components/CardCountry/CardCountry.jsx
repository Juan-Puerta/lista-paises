import React, { useContext } from "react";
import { Card } from "antd";
import AppContext from "../../store/AppContext";
import "./CardCountry.css";

const CardCountry = ({
  urlImagen,
  nombrePais,
  capitalPais,
  subregion,
  pais,
}) => {
  const state = useContext(AppContext);

  return (
    <div src={state.algo}>
      <Card
        onClick={() => state.changeCountrySelected(pais)}
        hoverable={true}
        title={nombrePais}
        bordered={false}
        cover={<img alt="example" src={urlImagen} />}
        size="small"
        style={{
          width: 240,
        }}
      >
        <div className="infoCard">
          <div>
            <div></div>
            <div></div>
            <h3>Sub-región:</h3>
            <h5>{subregion}</h5>
          </div>
          <div>
            <h3>Capital:</h3>
            <h5>{capitalPais}</h5>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CardCountry;
