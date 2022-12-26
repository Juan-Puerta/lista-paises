import React from "react";
import { Typography } from "antd";
import "./FooterApp.css";

const FooterApp = () => {
  const { Text } = Typography;

  return (
    <div className="footerContainer">
      <Text className="footerText" italic>
        Juan Sebastián Puerta Ordóñez - Ingeniero de Sistemas
      </Text>
    </div>
  );
};

export default FooterApp;
