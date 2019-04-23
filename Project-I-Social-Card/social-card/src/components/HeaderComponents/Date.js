import React from 'react';
import moment from 'moment';

const Date = () => {
    return (
        <div className="date">
            <p>{moment().format('D MMMM')} </p>
        </div>
    )
}

export default Date;