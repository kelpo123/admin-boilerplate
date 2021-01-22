import React, { Suspense } from "react";
import { Layout, Breadcrumb } from "antd";
import { Switch, Route } from "react-router-dom";
import routes from "../../routes";

const { Content } = Layout;

const TheContent = (props) => {
   const { location } = props;
   const breadcrumb = location.pathname.split("/");
   return (
      <Content className="site-main" style={{ margin: "0 16px" }}>
         <Breadcrumb style={{ margin: "16px 0" }}>
            {breadcrumb.map(
               (item, index) =>
                  item && (
                     <Breadcrumb.Item key={index}>
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                     </Breadcrumb.Item>
                  )
            )}
         </Breadcrumb>
         <div className="site-content" style={{ padding: 24 }}>
            <Suspense fallback={false}>
               <Switch>
                  {routes.map((route, idx) => {
                     return (
                        route.component && (
                           <Route
                              key={idx}
                              path={route.path}
                              exact={route.exact}
                              name={route.name}
                              render={(props) => <route.component {...props} />}
                           />
                        )
                     );
                  })}
               </Switch>
            </Suspense>
         </div>
      </Content>
   );
};

export default TheContent;
