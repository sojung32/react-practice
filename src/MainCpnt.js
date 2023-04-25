import React from 'react';

import Swiper from "./components/SwiperCpnt";
import { CelebList } from './components/Celeb';
import EventCpnt from './components/EventCpnt';

const MainCpnt = () => {
    return (
        <React.Fragment>
            <Swiper/>
            <div className="list-celeb">
                <h3>타이틀을 입력하세요</h3>
                <CelebList/>
            </div>
            <div className="list-event">
                <h3>타이틀을 입력하세요</h3>
                <EventCpnt/>
                <EventCpnt/>
                <EventCpnt/>
                <EventCpnt/>
            </div>
        </React.Fragment>
    );
};

export default MainCpnt;