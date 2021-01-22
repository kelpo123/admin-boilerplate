import React, { memo } from "react";
import { Link } from "react-router-dom";
import IntlMessages from "helpers/IntlMessages";
import { Col } from "antd";

const Outlet = () => {
   return (
      <Col justify="center" align="middle">
         <Link
            to={"/login"}
            className="ant-btn ant-btn-primary ant-btn-round ant-btn-lg"
         >
            <IntlMessages id="home.slider.title" />
         </Link>
      </Col>
   );
};

export default memo(Outlet);
