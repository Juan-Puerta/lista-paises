import React, { useContext, useState } from "react";
import AppContext from "../../store/AppContext";
import Sidebar from "../../components/Sidebar/Sidebar";
import HeaderApp from "../../components/HeaderApp/HeaderApp";
import CountriesContainer from "../../components/CountriesContainer/CountriesContainer";
import ViewCountry from "../ViewCountry/ViewCountry";
import FooterApp from "../../components/FooterApp/FooterApp";
import { Layout } from "antd";
import "./ViewHome.css";

const { Header, Footer, Sider, Content } = Layout;

const ViewHome = () => {
  const state = useContext(AppContext);
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout style={{ height: "100vh", padding: " 0px 0px 0px" }}>
      <Sider
        className="siderBar"
        breakpoint="lg"
        collapsedWidth={50}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Sidebar />
      </Sider>
      <Layout>
        <Header className="headerView">
          <HeaderApp />
        </Header>
        <Content>
          {state.ventanaInfoPais ? <ViewCountry /> : <CountriesContainer />}
        </Content>
        <Footer className="theFooter">
          <FooterApp />
        </Footer>
      </Layout>
    </Layout>
  );
};

export default ViewHome;
