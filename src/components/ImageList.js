import React from 'react';

const ImageList = props => {
  return (
    <div className="ui two stackable cards" style={{ marginTop: '15px' }}>
      {props.images.map((image, i) => {
        const date = new Date(image.created_at).toLocaleDateString();
        const link = `https://www.instagram.com/${image.user.instagram_username}`;

        return (
          <div className="card" key={i}>
            <div className="content">
              <div className="right floated meta">{date}</div>
              <img
                className="ui avatar image"
                src={image.user.profile_image.large}
                alt={image.user.name}
              />{' '}
              {image.user.username}
            </div>
            <div className="image">
              <img src={image.urls.regular} alt={image.alt_description} />
            </div>
            <div className="content">
              <span className="right floated">
                <i className="red heart outline like icon"></i>
                {image.likes} likes
              </span>
              <a href={link} target="_blank">
                <i className="black instagram large icon"></i>
                {image.user.instagram_username}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageList;
