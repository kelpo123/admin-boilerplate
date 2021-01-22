import React from "react";

const SalesContainer = React.lazy(() => import("containers/sales"));
export default [
   {
      path: "/sales",
      name: "Sales",
      component: SalesContainer
   }
];
