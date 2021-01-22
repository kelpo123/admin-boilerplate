import React from "react";
import { connect } from "react-redux";

import Layout from "components/layout/Main";
import OutletComponent from "components/outlet/Outlet";

function OutletContainer(props) {
   return (
      <>
         <Layout {...props} className="ant-content" centerMiddle>
            <div className="ant-col ant-col-xs-22 ant-col-sm-22">
               <OutletComponent />
            </div>
         </Layout>
      </>
   );
}

const mapStateToProps = (state) => ({});

// const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, null)(OutletContainer);
