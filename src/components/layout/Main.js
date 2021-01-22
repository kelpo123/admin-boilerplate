import React, { memo } from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";

const { Content } = Layout;

const MainLayout = memo(function MainLayout(props) {
   const { children, className, noPadding, centerMiddle, fullWidth } = props;

   const centerLayout = centerMiddle ? "center-middle" : "";
   const noPaddLayout = noPadding ? " no-padding" : "";
   const fullWidthLayout = fullWidth ? "w-100" : "";
   return (
      <Layout className={`${className} ${fullWidthLayout}`}>
         <Content
            className={`${centerLayout}${noPaddLayout}${fullWidthLayout}`}
         >
            {children}
         </Content>
      </Layout>
   );
});
MainLayout.propTypes = {
   children: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.object.isRequired,
      PropTypes.array.isRequired
   ]),
   className: PropTypes.string,
   noPadding: PropTypes.bool,
   centerMiddle: PropTypes.bool
};

export default MainLayout;
