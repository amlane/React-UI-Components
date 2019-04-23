import React from 'react';
import './Header.scss'; 

import Date from './Date';

const HeaderTitle = () => {
    return (
        <div className="header-title">
            <h1>Lambda School</h1>
            <p>@Lambda School</p>
            <Date />
        </div>
    )
};

export default HeaderTitle;