import React from "react";
import {
   UserOutlined,
   PieChartOutlined,
   TeamOutlined
} from "@ant-design/icons";
export default [
   {
      id: "sales",
      name: "Sales",
      icon: <PieChartOutlined />,
      key: "MenuItem",
      to: "/sales"
   },
   {
      id: "outlet",
      name: "Outlet",
      icon: <UserOutlined />,
      key: "MenuItem",
      to: "/outlet"
   },
   {
      id: "top-up",
      name: "Top Up",
      icon: <TeamOutlined />,
      key: "Submenu",
      children: [
         {
            name: "Outlet",
            key: "MenuItem",
            to: "/topup/outlet"
         },
         {
            name: "Sales",
            key: "MenuItem",
            to: "/topup/sales"
         }
      ]
   }
];
