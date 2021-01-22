import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAccessToken } from "helpers/Cookies";
import { Layout } from "antd";
import { isEmpty } from "lodash";
import { IntlProvider } from "react-intl";
import flatten from "flat";
import { ConfigProvider } from "antd";
import AppLocale from "resources/lngProvider";
import TheMenu from "./TheMenu";
import TheHeader from "./TheHeader";
import TheContent from "./TheContent";
import TheFooter from "./TheFooter";

const TheLayout = (props) => {
   const { history, setting } = props;
   const [collapsed, setCollapsed] = useState(false);
   const [loading, setLoading] = useState(true);
   const currentAppLocale = AppLocale[setting.locale.locale];
   useEffect(() => {
      if (isEmpty(getAccessToken())) {
         history.push("/login");
      } else {
         history.push("/sales");
      }
      setLoading(false);
   }, [history]);

   if (loading) {
      return null;
   }
   return (
      <ConfigProvider locale={currentAppLocale.antd}>
         <IntlProvider
            locale={currentAppLocale.locale}
            messages={flatten(currentAppLocale.messages)}
         >
            <Layout style={{ minHeight: "100vh" }}>
               <TheMenu collapsed={collapsed} {...props} />
               <Layout className="site-layout">
                  <TheHeader
                     collapsed={collapsed}
                     setCollapsed={() => setCollapsed(!collapsed)}
                     history={history}
                  />
                  <TheContent {...props} />
                  <TheFooter />
               </Layout>
            </Layout>
         </IntlProvider>
      </ConfigProvider>
   );
};

const mapStateToProps = (state) => ({
   setting: state.setting
});

// const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, null)(TheLayout);
