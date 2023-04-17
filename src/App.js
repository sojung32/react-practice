import React from 'react';
import { Breadcrumb, Layout } from 'antd';
// import { Menu } from 'antd';
import Logo from "./logo.png";
import "./styles/style.scss";
import { HomeOutlined } from '@ant-design/icons';

import Menu from "./components/common/MenuCpnt";
import Swiper from "./components/SwiperCpnt";
import Tab from "./components/TabCpnt";

const App = () => {
  return (
    <React.Fragment>
      <header>
        <div className="header-wrap">
          <div className="logo">
            <img src={Logo} alt="logo"/>
          </div>
          {/* <Menu
            theme="dark"
            mode="horizontal"
            // defaultSelectedKeys={['2']}
            items={new Array(8).fill(null).map((_, index) => {
              const key = index + 1;
              return {
                key,
                label: `nav ${key}`,
              };
            })}
          /> */}
          <Menu/>
        </div>
      </header>
      <main>
        {/* <Breadcrumb separator=">"
          items={[
            {title: <HomeOutlined />},
            {title: 'List', href: ''},
            {title: 'App', href: ''},
          ]}>
        </Breadcrumb> */}
        <Swiper/>
        <Tab/>
        {/* <div className="site-layout-content">
          Content
        </div> */}
      </main>
      <footer>Ant Design ©2023 Created by Ant UED</footer>
    </React.Fragment>
  );
};

export default App;