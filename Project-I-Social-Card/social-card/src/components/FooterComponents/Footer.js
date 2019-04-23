import React from 'react';
import './Footer.scss';

import Comment from './Comment';
import Retweet from './Retweet';
import Heart from './Heart';

const Footer = () => {
    return (
        <div className="footer">
            <Comment />
            <Retweet />
            <Heart />
            <i className="far fa-envelope"></i>
        </div>
    )
}

export default Footer;