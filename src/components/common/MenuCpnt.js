import { Button, Drawer, Menu } from 'antd';
import { useState } from 'react';
import { MenuOutlined, CloseOutlined, MailOutlined, AppstoreOutlined, SettingOutlined, SearchOutlined, CarryOutOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const logo = process.env.PUBLIC_URL + '/celebring.png';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  {
    type: 'divider',
  },
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
  getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
];

const MenuCpnt = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <>
      <div className="logo">
        <Link to={'/main'}>
          <img src={logo} alt="logo"/>
        </Link>
      </div>
      {open ? 
        <Button type="text" shape="circle" icon={<CloseOutlined/>} onClick={onClose}/> :
        <Button type="text" shape="circle" icon={<MenuOutlined/>} onClick={showDrawer}/>
      }
      <Drawer 
        title="Basic Drawer" 
        placement="top" 
        onClose={onClose} 
        open={open}
        bodyStyle={{
          padding: 0,
        }}
      >
        <div className="login-list">
          <h2 style={{marginLeft: 15, display: 'inline-block', marginBottom: 30}}>로그인</h2>
        </div>
        <div className="menu-list">
          <Button type="text" block size="large" style={{textAlign: 'left'}}><SearchOutlined/> 검색</Button>
          <Button type="text" block size="large" style={{textAlign: 'left'}}><CarryOutOutlined/> 이벤트</Button>
          <Button type="text" block size="large" style={{textAlign: 'left'}}><UserOutlined/> 마이페이지</Button>
        </div>
      </Drawer>
    </>
  );
};
export default MenuCpnt;