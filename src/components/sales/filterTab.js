import React from "react";
import { Formik } from "formik";
import { Form, Tabs, Select } from "antd";
import { FormSelect } from "helpers/FormField";
import { listCity } from "../../containers/sales/data";
const { TabPane } = Tabs;
const { Option } = Select;

const initialValues = {
   city: ""
};

const RenderCity = () => {
   const cityList = listCity.map((data) => {
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
   return cityList;
};

const ModalFilter = () => {
   return (
      <Formik initialValues={initialValues}>
         {(formik) => {
            return (
               <Form layout="horizontal" className="small-form">
                  <Tabs tabPosition={"left"}>
                     <TabPane tab="Kota/Kabupaten" key="1">
                        <FormSelect
                           name="filter"
                           placeholder="Cari Kota/kabupaten"
                           mode="tags"
                           tokenSeparators={[","]}
                           onChange={null}
                        >
                           {RenderCity()}
                        </FormSelect>
                     </TabPane>
                     <TabPane tab="Kategori" key="2">
                        Content of Tab 2
                     </TabPane>
                     <TabPane tab="Sub-Kategori" key="3">
                        Content of Tab 3
                     </TabPane>
                     <TabPane tab="Brand" key="4">
                        Content of Tab 3
                     </TabPane>
                  </Tabs>
               </Form>
            );
         }}
      </Formik>
   );
};

export default ModalFilter;
