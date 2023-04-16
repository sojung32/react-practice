import { Breadcrumb, Layout } from 'antd';
// import { Menu } from 'antd';
import Logo from "./logo.png";
import "./styles/style.scss";
import { HomeOutlined } from '@ant-design/icons';

import Menu from "./components/common/MenuCpnt";
import Swiper from "./components/SwiperCpnt";
import Tab from "./components/TabCpnt";

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Layout className="layout">
      <Header>
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
      </Header>
      <Content>
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
      </Content>
      <Footer>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

export default App;