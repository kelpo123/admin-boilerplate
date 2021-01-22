import React, { useState } from "react";
import PropTypes from "prop-types";
import {
   FormInputSearch,
   FormRangePicker,
   FormSelect
} from "helpers/FormField";
import { Formik } from "formik";
import { Form, Row, Col, Select, Modal } from "antd";
import { listUrutkan } from "../../containers/sales/data";
import FilterTab from "./filterTab";
const { Option } = Select;

const initialValues = {
   search: "",
   date: ""
};

const renderUrutkan = () => {
   const outletList = listUrutkan.map((data) => {
      return (
         <Option
            key={data.id}
            value={JSON.stringify({
               id: data.id,
               outlet_name: data.name
            })}
         >
            {data.name}
         </Option>
      );
   });
   return outletList;
};

const Filter = (props) => {
   const [isModalVisible, setModalVisible] = useState(false);

   const handleOk = () => {
      toogleModal();
   };

   const handleCancel = () => {
      toogleModal();
   };

   const toogleModal = () => {
      setModalVisible(!isModalVisible);
   };

   const ModalFilter = () => {
      return (
         <Modal
            title="Filter"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            width={700}
            bodyStyle={{ padding: 0 }}
         >
            <FilterTab />
         </Modal>
      );
   };

   return (
      <div>
         {ModalFilter()}
         <Formik initialValues={initialValues}>
            {(formik) => {
               return (
                  <Form layout="horizontal" className="small-form">
                     <Row gutter={[10]}>
                        <Col span={6}>
                           <FormInputSearch
                              name="search"
                              placeholder="Cari Sales"
                           />
                        </Col>
                        <Col span={6}>
                           <FormRangePicker
                              name="date"
                              type="date"
                              onChange={(value) =>
                                 formik.setFieldValue("date", value)
                              }
                           />
                        </Col>
                        <Col span={6}>
                           <FormSelect name="urutkan" placeholder="Urutan">
                              {renderUrutkan()}
                           </FormSelect>
                        </Col>
                        <Col span={6}>
                           <FormSelect
                              onClick={toogleModal}
                              name="filter"
                              placeholder="Filter"
                              open={false}
                           />
                        </Col>
                     </Row>
                  </Form>
               );
            }}
         </Formik>
      </div>
   );
};

Filter.propTypes = {};

export default Filter;
