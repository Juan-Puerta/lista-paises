import React, { useState, useEffect } from "react";
import axios from "../config/axios";

const AppContext = React.createContext();

export const AppContextWrapper = (props) => {
  const [paisesAfrica, setPaisesAfrica] = useState([]);
  const [paisesEuropa, setPaisesEuropa] = useState([]);
  const [paisesAsia, setPaisesAsia] = useState([]);
  const [paisesAmerica, setPaisesAmerica] = useState([]);
  const [paisesOceania, setPaisesOceania] = useState([]);
  const [continenteSeleccionado, setContinenteSeleccionado] = useState("0");
  const [arrayContienenteSelesccionado, setArrayContienenteSelesccionado] =
    useState([]);
  const [paisSeleccionado, setPaisSeleccionado] = useState({});
  const [ventanaInfoPais, setVentanaInfoPais] = useState(false);

  const cargarPaises = async () => {
    await axios.get("/europe").then((res) => setPaisesEuropa(res.data));
    await axios.get("/asia").then((res) => setPaisesAsia(res.data));
    await axios.get("/america").then((res) => setPaisesAmerica(res.data));
    await axios.get("/africa").then((res) => setPaisesAfrica(res.data));
    await axios.get("/oceania").then((res) => setPaisesOceania(res.data));
    console.log("Listo");
  };

  const changeCountrySelected = (country) => {
    setPaisSeleccionado(country);
    setVentanaInfoPais(true);
  };

  const seleccionContinente = (idVentana) => {
    if (idVentana === "0") {
      setContinenteSeleccionado("0");
      setArrayContienenteSelesccionado(paisesAfrica);
    } else if (idVentana === "1") {
      setContinenteSeleccionado("1");
      setArrayContienenteSelesccionado(paisesAmerica);
    } else if (idVentana === "2") {
      setContinenteSeleccionado("2");
      setArrayContienenteSelesccionado(paisesAsia);
    } else if (idVentana === "3") {
      setContinenteSeleccionado("3");
      setArrayContienenteSelesccionado(paisesOceania);
    } else {
      setContinenteSeleccionado("4");
      setArrayContienenteSelesccionado(paisesEuropa);
    }
  };

  const buscarPais = (texto) => {
    let paisesBuscados = [];
    if (continenteSeleccionado === "0") {
      paisesBuscados = paisesAfrica.filter((pais) =>
        pais.name.official.toLowerCase().includes(texto.toLowerCase())
      );
    } else if (continenteSeleccionado === "1") {
      paisesBuscados = paisesAmerica.filter((pais) =>
        pais.name.official.toLowerCase().includes(texto.toLowerCase())
      );
    } else if (continenteSeleccionado === "2") {
      paisesBuscados = paisesAsia.filter((pais) =>
        pais.name.official.toLowerCase().includes(texto.toLowerCase())
      );
    } else if (continenteSeleccionado === "3") {
      paisesBuscados = paisesOceania.filter((pais) =>
        pais.name.official.toLowerCase().includes(texto.toLowerCase())
      );
    } else {
      paisesBuscados = paisesEuropa.filter((pais) =>
        pais.name.official.toLowerCase().includes(texto.toLowerCase())
      );
    }
    setArrayContienenteSelesccionado(paisesBuscados);
  };

  useEffect(() => {
    cargarPaises();
  }, []);

  const state = {
    cargarPaises,
    paisSeleccionado,
    setPaisSeleccionado,
    changeCountrySelected,
    ventanaInfoPais,
    setVentanaInfoPais,
    seleccionContinente,
    arrayContienenteSelesccionado,
    buscarPais,
  };

  return (
    <AppContext.Provider value={state} displayName="AppContext">
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
