import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Row, Col, Button, Form, Typography } from "antd";
import { requestLogin } from "redux/actions/Auth";
import { FormInput, FormInputPassword } from "helpers/FormField";
import { Formik } from "formik";
import { validationSchema } from "./validation";
import { setTokenToCookies, getAccessToken } from "helpers/Cookies";
import { isEmpty } from "lodash";

const { Title } = Typography;

const initialValues = {
   username: "",
   password: ""
};

function LoginContainer(props) {
   const { history } = props;
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      if (!isEmpty(getAccessToken())) {
         history.push("/");
      }
   }, [history]);

   const onSubmit = (data) => {
      setLoading(true);
      setTimeout(() => {
         var date = new Date();
         setTokenToCookies({
            token: "token",
            expired_at: date.setDate(date.getDate() + 1)
         });
         history.push("/");
         setLoading(false);
      }, 1000);
   };
   return (
      <Row
         className="h-100 login-content"
         justify="space-around"
         align="middle"
      >
         <Col span={8} align="center">
            <Title level={3}>Login</Title>
            <Formik
               initialValues={initialValues}
               validateOnMount
               onSubmit={onSubmit}
               validationSchema={validationSchema}
            >
               {(formik) => {
                  return (
                     <Form layout="vertical">
                        <FormInput name="username" label="Username" />

                        <FormInputPassword
                           name="password"
                           label="Password"
                           type="password"
                           autoComplete="on"
                        />
                        <Button
                           onClick={formik.submitForm}
                           block
                           type="primary"
                           htmlType="submit"
                           disabled={!formik.isValid}
                           loading={loading}
                        >
                           Submit
                        </Button>
                     </Form>
                  );
               }}
            </Formik>
         </Col>
      </Row>
   );
}

const mapStateToProps = (state) => ({
   auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
   loginHandle: (params, data) => dispatch(requestLogin(params, data))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
