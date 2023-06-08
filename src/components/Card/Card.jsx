import React from 'react';
import './Card.css';
import CardBody from '../CardBody/CardBody';
import PropTypes from 'prop-types';
import { formatDate } from '../../utils/formatDate';


function Card(props) {
    const { date } = props;        
    return (
        <div className="w-30 d-flex align-items-end" >
            <div className="card">
                <div className="user-info-wrapper">
                    <img className="user-avatar" alt="profile" src="https://blog-prod-bucket.website.yandexcloud.net/uploads/2022/06/%D0%9B%D0%BE%D0%B3%D0%BE-%D0%9D%D0%B5%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B8.png"/>
                    <div className="user-info">
                        <div className="user-name">Университет интернет-профессий Нетология</div>
                        <div className="news-date">{formatDate(date)}</div>
                    </div>
                </div>
                <CardBody {...props}></CardBody>
            </div>
        </div>
    )
}

Card.propTypes = {
    image: PropTypes.string,  
}

export default Card
