import React, { useContext } from "react";
import AppContext from "../../store/AppContext";
import { Menu } from "antd";
import {
  GitlabFilled,
  BugFilled,
  QqOutlined,
  DingtalkOutlined,
  YuqueFilled,
} from "@ant-design/icons";
import "./Sidebar.css";

const Sidebar = () => {
  const state = useContext(AppContext);

  const cambiarVentana = (idVentana) => {
    state.seleccionContinente(idVentana);
    state.setVentanaInfoPais(false);
  };

  const menuItems = [
    {
      key: "0",
      icon: <GitlabFilled />,
      onClick: () => cambiarVentana("0"),
      label: "África",
    },
    {
      key: "1",
      icon: <BugFilled />,
      onClick: () => cambiarVentana("1"),
      label: "América",
    },
    {
      key: "2",
      icon: <QqOutlined />,
      onClick: () => cambiarVentana("2"),
      label: "Asia",
    },
    {
      key: "3",
      icon: <DingtalkOutlined />,
      onClick: () => cambiarVentana("3"),
      label: "Oceanía",
    },
    {
      key: "4",
      icon: <YuqueFilled />,
      onClick: () => cambiarVentana("4"),
      label: "Europa",
    },
  ];

  return (
    <div>
      <Menu items={menuItems} style={{ height: "100%" }}></Menu>
    </div>
  );
};

export default Sidebar;
