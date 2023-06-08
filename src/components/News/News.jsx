import React, { useEffect, Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import { lastNewsRequest, newsRequest } from '../../actions/actionCreators';
import './News.css';

function News() {
    const { news, loading } = useSelector(state => state.news);
    const dispatch = useDispatch();
    const [showButton, setShowButton] = useState(true);
    const [prevNewsLength, setPrevNewsLength] = useState(0);

    useEffect(() => {
        dispatch(newsRequest());
    }, [dispatch]);

    useEffect(() => {
        if (news.length !== prevNewsLength) {
            setShowButton(news.length - prevNewsLength >= 5);
            setPrevNewsLength(news.length);
        }
    }, [news, prevNewsLength]);    

    const handleLoadMore = () => {
        const lastId = news.length > 0 ? Math.min(...news.map(item => item.id)) : '';
        dispatch(lastNewsRequest(lastId)); 
    };

    return (
        <Fragment>
            {loading && <Loader/>}
            <div className="card-group" id={news.id}>
                {
                    news.map((item) => (
                        <Card key={item.id} {...item} />
                    ))
                }
                {showButton && (
                <button
                    className="btn btn-show-next"
                    onClick={handleLoadMore}
                    disabled={loading}
                >
                    {loading ? '...' : 'К предыдущим записям'}
                </button>
                )}
            </div>
        </Fragment>
    )
}

News.propTypes = {
    id: PropTypes.string
}

export default News
