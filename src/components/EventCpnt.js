import React from 'react';
import { Rate } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import thumbnail from "./../images/7eRAfZZ_T72cIsU-rJCpkw.jpg";

const EventCpnt = (props) => {
    return (
        <div className="event-component">
            <div className="event-image">
                <img src={thumbnail} alt="thumbnail"/>
            </div>
            <div className="event-content">
                <span className="event-title">이벤트명입니다. 생일카페 이벤트명입니다.</span>
                <span className="event-date">23.11.01 ~ 23.11.03</span>
                <span className="event-location">장소(카페상호명)</span>
            </div>
            <div className="event-like">
                <Rate 
                    character={<HeartFilled />} 
                    count={1} 
                    defaultValue={1}
                />
            </div>
        </div>
    );
};

export default EventCpnt;