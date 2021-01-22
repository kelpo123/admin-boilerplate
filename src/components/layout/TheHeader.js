import React from "react";
import { Layout, Menu, Avatar, Image, Badge, Popover } from "antd";
import { LogoutOutlined, BellOutlined } from "@ant-design/icons";
import "./Layout.less";
import { removeTokenFromCookies } from "helpers/Cookies";

const { Header } = Layout;

const content = (
   <div>
      <p>Notifikasi 1</p>
      <p>Notifikasi 2</p>
   </div>
);

const TheHeader = (props) => {
   const { history } = props;

   const profile = (
      <Menu>
         <Menu.Item>
            <span onClick={() => console.log("this")}>Edit Profile</span>
         </Menu.Item>
         <Menu.Item
            onClick={() => {
               removeTokenFromCookies();
               history.push("/login");
            }}
         >
            <span>
               <LogoutOutlined />
               Logout
            </span>
         </Menu.Item>
      </Menu>
   );

   return (
      <Header className="site-header">
         <Popover
            className="header-popover"
            placement="bottomRight"
            content={content}
         >
            <Badge count={5} dot offset={[-10, 10]} className="iconButton">
               <BellOutlined className="iconFont" />
            </Badge>
         </Popover>
         <Popover
            className="header-popover"
            placement="bottomRight"
            content={profile}
         >
            <Avatar
               src={
                  <Image
                     src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                     preview={false}
                  />
               }
            />
         </Popover>
      </Header>
   );
};

export default TheHeader;
