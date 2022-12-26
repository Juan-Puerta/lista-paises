import React from "react";
import FlagName from "../../components/FlagName/FlagName";
import InfoCountry from "../../components/InfoCountry/InfoCountry";
import { Col, Row } from "antd";
import "./ViewCountry.css";

const ViewCountry = () => {
  return (
    <div className="viewConuntryContainer">
      <div className="viewCountry">
        <Row className="divRow" gutter={20} justify="space-between">
          <Col
            className="columnFlag"
            xs={{ order: 1 }}
            sm={{ order: 2 }}
            md={{ order: 2 }}
            lg={{ order: 2 }}
          >
            <FlagName />
          </Col>
          <Col
            xs={{ order: 1 }}
            sm={{ order: 2 }}
            md={{ order: 2 }}
            lg={{ order: 2 }}
          >
            <InfoCountry />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ViewCountry;
