import React from 'react';
import { Rate } from 'antd';
import { HeartFilled, EnvironmentOutlined, CalendarOutlined } from '@ant-design/icons';

import thumbnail from "./../images/7eRAfZZ_T72cIsU-rJCpkw.jpg";

const EventCpnt = (props) => {
    let title = props.title ? props.title : '이벤트명입니다. 생일카페 이벤트명입니다.';
    let date = props.date ? props.date : '23.11.01 ~ 23.11.03';
    let location = props.location ? props.location : '장소(카페상호명)';
    let heart = props.heart ? props.heart : 1;
    return (
        <div className="event-component">
            <div className="event-image">
                <img src={thumbnail} alt="thumbnail"/>
            </div>
            <div className="event-content">
                <span className="event-title">{title}</span>
                <p className="event-date"><CalendarOutlined/> {date}</p>
                <p className="event-location"><EnvironmentOutlined/> {location}</p>
            </div>
            <div className="event-like">
                <Rate 
                    character={<HeartFilled />} 
                    count={1} 
                    defaultValue={heart}
                />
            </div>
        </div>
    );
};

export default EventCpnt;