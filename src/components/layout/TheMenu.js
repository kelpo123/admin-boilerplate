import React, { useState } from "react";
import { Menu, Layout } from "antd";
import _nav from "./_nav";
import { NavLink } from "react-router-dom";
const { Sider } = Layout;
const { SubMenu } = Menu;

const TheMenu = (props) => {
   const { location } = props;
   const [collapsed, setCollapsed] = useState(false);
   return (
      <Sider
         collapsible
         collapsed={collapsed}
         onCollapse={() => setCollapsed(!collapsed)}
      >
         <div className="logo"> Logo</div>
         <Menu
            theme="dark"
            defaultSelectedKeys={[location?.pathname]}
            mode="inline"
         >
            {_nav.map((item, index) => {
               return item.key === "MenuItem" ? (
                  <Menu.Item key={item?.to} icon={item?.icon}>
                     <NavLink to={item?.to}>{item?.name}</NavLink>
                  </Menu.Item>
               ) : (
                  <SubMenu
                     key={index.toString()}
                     icon={item?.icon}
                     title={item?.name}
                  >
                     {item?.children?.map((item, index) => (
                        <Menu.Item key={item?.to}>
                           <NavLink to={item?.to}>{item?.name}</NavLink>
                        </Menu.Item>
                     ))}
                  </SubMenu>
               );
            })}
         </Menu>
      </Sider>
   );
};

export default TheMenu;
