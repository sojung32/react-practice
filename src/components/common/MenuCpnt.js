import { Button, Drawer, Menu } from 'antd';
import { useState } from 'react';
import { MenuOutlined, CloseOutlined, GiftOutlined, SearchOutlined, CalendarOutlined, CarryOutOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const logo = process.env.PUBLIC_URL + '/celebring.png';

const MenuCpnt = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onClick = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="logo">
        <Link to={'/main'}>
          <img src={logo} alt="logo" onClick={onClick}/>
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
          <div className="button-list">
            <Button block size="large"><GiftOutlined/> 일정 등록</Button>
            <Button block size="large"><CalendarOutlined/> 이벤트 등록</Button>
          </div>
          <Button type="text" block size="large" style={{textAlign: 'left'}}><SearchOutlined/> 검색</Button>
          <Button type="text" block size="large" style={{textAlign: 'left'}}><CarryOutOutlined/> 이벤트</Button>
          <Button type="text" block size="large" style={{textAlign: 'left'}}><UserOutlined/> 마이페이지</Button>
        </div>
      </Drawer>
    </>
  );
};
export default MenuCpnt;