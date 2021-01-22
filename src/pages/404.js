import React from "react";

const Page404 = React.lazy(() => import("containers/page404/page404"));

export default [
   {
      path: "*",
      name: "404 Page",
      component: Page404
   }
];
