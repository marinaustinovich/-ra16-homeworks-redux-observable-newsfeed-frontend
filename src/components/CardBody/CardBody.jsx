import React from 'react';
import PropTypes from 'prop-types';
import './CardBody.css';
import CardImage from '../CardImage/CardImage';

function CardBody(props) {
    const { likes, comments, reposts, views } = props;

    return (
        <div className="card-body">
        <CardImage {...props}></CardImage>

        <div className="card-interactions">
            <div className="card-interacrions-wrapper">
                <div className="interaction">
                    <span className="count">{likes.count}</span>
                    <i className="far fa-heart"></i>
                </div>
                <div className="interaction">
                    <span className="count">{comments.count}</span>
                    <i className="far fa-comment"></i>
                </div>
                <div className="interaction">
                    <span className="count">{reposts.count}</span>
                    <i className="far fa-share-square"></i>
                </div>
            </div>
            
            <div className="interaction">
                <span className="count">{views.count}</span>
                <i className="far fa-eye"></i>
            </div>
        </div>
        </div>
    );
}

CardBody.propTypes = {
    text: PropTypes.string.isRequired,
    likes: PropTypes.shape({
        count: PropTypes.number.isRequired,
    }).isRequired,
    comments: PropTypes.shape({
        count: PropTypes.number.isRequired,
    }).isRequired,
    reposts: PropTypes.shape({
        count: PropTypes.number.isRequired,
    }).isRequired,
    views: PropTypes.shape({
        count: PropTypes.number.isRequired,
    }).isRequired,
};


export default CardBody;
