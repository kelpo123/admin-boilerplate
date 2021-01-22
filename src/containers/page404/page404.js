import React from "react";
import { connect } from "react-redux";
import { Result, Button } from "antd";

import Layout from "components/layout/Main";

function HomeContainer(props) {
   return (
      <>
         <Layout {...props} className="ant-content" centerMiddle>
            <Result
               status="404"
               title="404"
               subTitle="Sorry, the page you visited does not exist."
               extra={<Button type="primary">Back Home</Button>}
            />
         </Layout>
      </>
   );
}

const mapStateToProps = (state) => ({});

// const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, null)(HomeContainer);
