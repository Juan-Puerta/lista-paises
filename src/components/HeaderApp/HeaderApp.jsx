import React, { useContext } from "react";
import { Input } from "antd";
import AppContext from "../../store/AppContext";
import "./HeaderApp.css";

const HeaderApp = () => {
  const state = useContext(AppContext);
  const { Search } = Input;

  return (
    <div className="headerApp">
      <h1 className="textHeader">Countries in the world</h1>
      <Search
        //onChange={(event) => console.log(event.target.value)}
        onChange={(event) => state.buscarPais(event.target.value)}
        placeholder="Search country"
        style={{
          width: 150,
        }}
        disabled={state.ventanaInfoPais}
      />
    </div>
  );
};

export default HeaderApp;
