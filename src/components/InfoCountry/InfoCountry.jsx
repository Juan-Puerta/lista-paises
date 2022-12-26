import React, { useContext } from "react";
import AppContext from "../../store/AppContext";
import { Typography } from "antd";
import "./InfoCountry.css";

const InfoCountry = () => {
  const state = useContext(AppContext);
  const { Title, Text, Link } = Typography;

  const fronterasPais = (fronteras) => {
    let darFonteras = "";
    fronteras.map((frontera) => (darFonteras += frontera + ", "));
    return darFonteras;
  };

  const monedasPais = (monedas) => {
    let darMonedas = "";
    monedas.map((moneda) => (darMonedas += moneda.name + ", "));
    return darMonedas;
  };

  const capturarErrorFrontera = (item) => {
    try {
      let fronteras = fronterasPais(item.borders);
      return fronteras;
    } catch (err) {
      return "No borders";
    }
  };

  return (
    <div>
      <Title level={5}>Common name:</Title>
      <Text>{state.paisSeleccionado.name.common}</Text>
      <Title level={5}>Population:</Title>
      <Text>
        {state.paisSeleccionado.population.toLocaleString() + " people"}
      </Text>
      <Title level={5}>Geographic location:</Title>
      <Link href={state.paisSeleccionado.maps.googleMaps} target="_blank">
        {state.paisSeleccionado.maps.googleMaps}
      </Link>
      <Title level={5}>Area:</Title>
      <Text>{state.paisSeleccionado.area.toLocaleString() + " Km²"}</Text>
      <Title level={5}>Borders:</Title>
      <Text>{capturarErrorFrontera(state.paisSeleccionado)}</Text>
      <Title level={5}>Currencies:</Title>
      <Text>{monedasPais([state.paisSeleccionado.currencies])}</Text>
    </div>
  );
};

export default InfoCountry;
