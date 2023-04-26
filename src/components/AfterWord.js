import React from 'react';

import { Card } from 'antd';

const { Meta } = Card;

const AfterWord = (props) => {
    return (
        <div className="aw-item">
            <Card hoverable cover={<img alt="sek" src="https://pbs.twimg.com/media/FufOmIxWIAA_dNm?format=jpg" />}>
                <Meta title="후기" description="2023-03-07"/>
            </Card>
        </div>
    );
};

const AfterWordList = (props) => {
    return (
        <div className="aw-list">
            <AfterWord />
            <AfterWord />
            <AfterWord />
        </div>
    );
};

export { AfterWord, AfterWordList };