import React from "react";
import { Button, Row, Col } from "antd";

import { PlusOutlined } from "@ant-design/icons";

const ActionHeader = (props) => {
   const { onCreateSales, onScheduleOff } = props;
   return (
      <Row style={{ position: "absolute", top: -48, right: 0 }} gutter={[5]}>
         <Col>
            <Button onClick={onScheduleOff} size="small">
               Jadwal Off Sales
            </Button>
         </Col>
         <Col>
            <Button
               onClick={onCreateSales}
               size="small"
               type="primary"
               icon={<PlusOutlined />}
            >
               Tambah Sales
            </Button>
         </Col>
      </Row>
   );
};

export default ActionHeader;
