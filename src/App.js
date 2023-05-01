import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import "./styles/style.scss";

import Menu from "./components/common/MenuCpnt";
import Swiper from "./components/SwiperCpnt";
import Tab from "./components/TabCpnt";
import Main from './pages/Main';
import Detail from './pages/Detail';
import Character from './pages/Character';
import EventDetail from './pages/EventDetail';

const App = () => {
  return (
    <Router>
      <header>
        <div className="header-wrap">
          <Menu/>
        </div>
      </header>
      <div className="main">
        <main>
          <Switch>
            <Route path="/test" exact>
              <Swiper/>
              <Tab/>
            </Route>
            <Route path="/main" exact>
              <Main/>
            </Route>
            <Route path="/detail" exact>
              <Detail/>
            </Route>
            <Route path="/character" exact>
              <Character/>
            </Route>
            <Route path="/event" exact>
              <EventDetail/>
            </Route>
            <Redirect to="/main"/>
          </Switch>
        </main>
        <footer>
          <div>
            <p>celebring</p>
            <p>©2023</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;