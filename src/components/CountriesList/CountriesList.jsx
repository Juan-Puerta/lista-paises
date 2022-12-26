import React, { useContext } from "react";
import CardCountry from "../CardCountry/CardCountry";
import AppContext from "../../store/AppContext";
import { List } from "antd";
import "./CountriesList.css";

const CountriesList = () => {
  const state = useContext(AppContext);

  const capturarErrorCapital = (item) => {
    try {
      let capital = item.capital[0];
      return capital;
    } catch (err) {
      return "Don't capital";
    }
  };

  return (
    <List
      pagination={{
        simple: true,
        pageSize: 6,
        size: "small",
      }}
      grid={{
        xs: 1,
        sm: 2,
        md: 2,
        lg: 2,
        xl: 3,
        xxl: 3,
      }}
      dataSource={state.arrayContienenteSelesccionado}
      renderItem={(item) => (
        <List.Item key={item.name.official}>
          <div className="divCard">
            <CardCountry
              urlImagen={item?.flags.png}
              nombrePais={item?.name.official}
              capitalPais={capturarErrorCapital(item)}
              subregion={item?.subregion}
              pais={item}
            />
          </div>
        </List.Item>
      )}
    />
  );
};

export default CountriesList;
