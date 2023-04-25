import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Logo from "./logo.png";
import "./styles/style.scss";

import Menu from "./components/common/MenuCpnt";
import Swiper from "./components/SwiperCpnt";
import Tab from "./components/TabCpnt";
import MainCpnt from './pages/Main';
import Detail from './pages/Detail';
import Character from './pages/Character';

const App = () => {
  return (
    <Router>
      <header>
        <div className="header-wrap">
          <div className="logo">
            <img src={Logo} alt="logo"/>
          </div>
          <Menu/>
        </div>
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Swiper/>
            <Tab/>
          </Route>
          <Route path="/main" exact>
            <MainCpnt/>
          </Route>
          <Route path="/detail" exact>
            <Detail/>
          </Route>
          <Route path="/character" exact>
            <Character/>
          </Route>
        </Switch>
      </main>
      <footer>Ant Design ©2023 Created by Ant UED</footer>
    </Router>
  );
};

export default App;