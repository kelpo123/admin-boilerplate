import React, { useState } from "react";
import { connect } from "react-redux";
import Layout from "components/layout/Main";
import { Table, Col, Popover, Typography, Modal } from "antd";
import { data } from "./data";
import { formatNumber } from "helpers/Number";
import { CARD_LIMIT } from "constants/Data";
import { CaretDownOutlined } from "@ant-design/icons";
import FilterComponent from "components/sales/filter";
import ActionHeader from "components/sales/actionHeader";
import FormCreateSales from "components/sales/formCreateSales";

const { Link } = Typography;

const columns = [
   {
      title: "No",
      dataIndex: "no",
      width: 25,
      render: (item, record, index) => <span>{index + 1}</span>
   },
   {
      title: "Info Sales",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      width: "20%",
      render: (item, record) => (
         <span>
            <strong>{item}</strong>
            <br />
            {record?.phone}
            <br />
            {record?.email}
         </span>
      )
   },
   {
      title: "Kota/Kabupaten",
      dataIndex: "city",
      sorter: (a, b) => a.city.length - b.city.length,
      width: "10%"
   },
   {
      title: "Downline",
      dataIndex: "downline",
      sorter: (a, b) => a.downline - b.downline
   },
   {
      title: "Saldo",
      dataIndex: "saldo",
      sorter: (a, b) => a.saldo - b.saldo,
      render: (item) => <span>{formatNumber(item)}</span>
   },
   {
      title: "Limit Saldo",
      dataIndex: "limit_saldo",
      sorter: (a, b) => a.limit_saldo - b.limit_saldo,
      render: (item) => <span>{formatNumber(item)}</span>
   },
   {
      title: "Status",
      dataIndex: "status",
      sorter: (a, b) => a.status.length - b.status.length,
      render: (item) => <strong>{item}</strong>
   },
   {
      dataIndex: "id",
      render: (item) => (
         <Popover
            className="active-popover"
            placement="bottomRight"
            content={
               <div>
                  <h5 onClick={() => console.log("s")}>Ubah Data</h5>
                  <h5 onClick={() => console.log("s")}>Non-Aktifkan Akun</h5>
               </div>
            }
         >
            <Link onClick={() => console.log("s")}>
               Atur <CaretDownOutlined />
            </Link>
         </Popover>
      )
   }
];

function onChange(pagination, filters, sorter, extra) {
   console.log("params", pagination, filters, sorter, extra);
}

function SalesContainer(props) {
   const [modalCreate, setModalCreate] = useState(false);

   const handleSubmitCreate = (data) => {};

   const ModalCreate = () => {
      return (
         <Modal
            title="Tambah Sales"
            visible={modalCreate}
            onOk={handleSubmitCreate}
            onCancel={() => setModalCreate(!modalCreate)}
            width={500}
            footer={null}
            bodyStyle={{ padding: 0 }}
         >
            <FormCreateSales toogleModal={() => setModalCreate(!modalCreate)} />
         </Modal>
      );
   };

   return (
      <>
         <Layout {...props} className="ant-content">
            <ModalCreate />
            <ActionHeader onCreateSales={() => setModalCreate(!modalCreate)} />
            <FilterComponent />
            <Col flex={1}>
               <Table
                  columns={columns}
                  dataSource={data}
                  onChange={onChange}
                  pagination={{
                     pageSize: CARD_LIMIT,
                     position: ["bottomLeft"]
                  }}
                  loading={false}
                  rowKey="id"
               />
            </Col>
         </Layout>
      </>
   );
}

const mapStateToProps = (state) => ({});

// const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, null)(SalesContainer);
