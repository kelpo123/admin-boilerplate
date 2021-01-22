import React from "react";

const OutletContainer = React.lazy(() => import("containers/outlet"));
export default [
   {
      path: "/outlet",
      name: "Outlet",
      component: OutletContainer
   }
];
