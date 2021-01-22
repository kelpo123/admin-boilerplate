import React from "react";
import { Formik } from "formik";
import { Form, Select, Button, message } from "antd";
import { FormInput, FormSelect } from "helpers/FormField";
import { validationSchema } from "./validation";
const { Option } = Select;

const listArea = [
   { id: "1", name: "Malang" },
   { id: "2", name: "Surabya" },
   { id: "3", name: "Trenggalek" }
];

const initialValues = {
   name: "",
   phone: "",
   email: "",
   area: null,
   saldo: ""
};

const renderArea = () => {
   const outletList = listArea.map((data) => {
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

const CreateSales = (props) => {
   const { toogleModal } = props;

   const onSubmit = (values) => {
      toogleModal();
      message.success("Berhasil menambahkan sales");
   };
   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         validateOnMount
         onSubmit={onSubmit}
      >
         {(formik) => {
            return (
               <Form
                  layout="vertical"
                  className="small-form"
                  style={{ padding: 20 }}
               >
                  <FormInput
                     name="name"
                     label="Nama Lengkap"
                     placeholder="nama lengkap"
                  />
                  <FormInput
                     name="phone"
                     label="Nomor Hp"
                     placeholder="nomor hp"
                  />
                  <FormInput
                     name="email"
                     label="Alamat Email"
                     type="email"
                     placeholder="alamat@gmail.com"
                  />

                  <FormSelect
                     name="area"
                     label="Area Sales"
                     placeholder="Urutan"
                     onChange={(value) => formik.setFieldValue("area", value)}
                  >
                     {renderArea()}
                  </FormSelect>
                  <FormInput
                     name="saldo"
                     label="Limit Saldo"
                     placeholder="min. 10.000"
                  />
                  <Button
                     block
                     type="primary"
                     disabled={!formik.isValid}
                     loading={false}
                     onClick={formik.submitForm}
                  >
                     Simpan
                  </Button>
               </Form>
            );
         }}
      </Formik>
   );
};

export default CreateSales;
