import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HTMLReactParser from 'html-react-parser';
import './CardImage.css';

function CardImage(props) {
    const { text, attachments } = props;
    let video = null;
    let link = null;
    let photo = null;

    if (attachments && attachments.length > 0) {
        const firstAttachment = attachments[0];
        
        if (firstAttachment.type === 'video') {
            video = firstAttachment.video;
            link = attachments[1]?.link;
        } else if (firstAttachment.type === 'link') {
            link = firstAttachment.link;
        } else if (firstAttachment.type === 'photo') {
            link = attachments[1]?.link;
            photo = firstAttachment.photo;
        }
    } 

    const [showInfo, setShowInfo] = useState(false);

    const handleClick = () => {
        setShowInfo(!showInfo);
    };
    
    const formattedText = `${text?.replace(/&#8594;.*$/, link?.url ? `<a class="link-too" href="${link.url}">${link.url}</a>` : '')}`;
    let formattedDescription = null;
    if (link) {
        formattedDescription = `${link?.description?.replace("&#8594;", "\u2192")}${link?.url ? `<a href="${link.url}">${link.url}</a>` : ''}`;
    }

    return (
        <div className="card-image">
            <p className="card-text">{HTMLReactParser(formattedText)}</p>
            {video ? (
                <>
                    <a href={video.image?.url} target="_blank" rel="noopener noreferrer">
                            <img src={video.first_frame[0]?.url} className="card-img-top" alt={video.title} />
                    </a>
                    <span className="read-more" onClick={handleClick}>
                        {showInfo ? 'Скрыть' : 'Читать полностью'}
                    </span>
                    <div className="card-image-info" style={{ display: showInfo ? 'block' : 'none' }}>
                        <h5 className="card-image-title">{HTMLReactParser(formattedDescription)}</h5>
                        <a href={link.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">{link.url}</a>
                    </div>
                </>
                
            ) : (
                <>
                {photo && (
                    // Фото-ссылка
                    <div className="photo-wrapper">
                        <a href={photo.url} target="_blank" rel="noopener noreferrer">
                            <img src={photo.image?.url} className="card-img-top" alt={photo.title} />
                        </a>
                    </div>
                )}
                {link && (
                <div className="card-image-info">
                    <h5 className="card-image-title">{HTMLReactParser(link.description.replace("&#8594;", "\u2192"))}</h5>
                    <a href={link.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Читать новость</a>
                </div>
                )}

                </>
                )
            }
        </div>
    );
}

CardImage.propTypes = {
    attachments: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.oneOf(['video', 'link', 'photo']).isRequired,
            video: PropTypes.shape({
                image: PropTypes.arrayOf(
                    PropTypes.shape({
                        url: PropTypes.string.isRequired,
                        height: PropTypes.number.isRequired,
                        width: PropTypes.number.isRequired,
                        with_padding: PropTypes.number,
                    })
                ),
                first_frame: PropTypes.arrayOf(
                    PropTypes.shape({
                        url: PropTypes.string.isRequired,
                        height: PropTypes.number.isRequired,
                        width: PropTypes.number.isRequired,
                    })
                ).isRequired,
                title: PropTypes.string.isRequired,
                duration: PropTypes.number.isRequired,
                description: PropTypes.string.isRequired,
                date: PropTypes.number.isRequired,
                comments: PropTypes.number.isRequired,
                views: PropTypes.number.isRequired,
                width: PropTypes.number.isRequired,
                height: PropTypes.number.isRequired,
                is_favorite: PropTypes.bool.isRequired,
                id: PropTypes.number.isRequired,
                owner_id: PropTypes.number.isRequired,
                can_add: PropTypes.number.isRequired,
                track_code: PropTypes.string.isRequired,
                access_key: PropTypes.string.isRequired,
                type: PropTypes.string.isRequired,
            }),
            link: PropTypes.shape({
                url: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                target: PropTypes.string,
                is_favorite: PropTypes.bool,
            }),
        })
    ).isRequired,
};


export default CardImage;