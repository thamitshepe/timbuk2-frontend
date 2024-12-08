import React from 'react';
import "./Card.css";
import waves from '../../images/icons/waves.png';
import star from '../../images/icons/star.png';
import stardark from '../../images/icons/star-dark.png';
import Skeleton from 'react-loading-skeleton'; // Importing skeleton loader

const Card = ({ infoText, itemText, isFavourite, isLoading }) => {
  return (
    <div className="kanban-card">
      {/* Header with images */}
      <div className="header">
        {isLoading ? (
          <Skeleton height={50} width={50} borderRadius={12} /> // Square with rounded corners
        ) : (
          <img src={waves} alt="Image 1" className="header-image" />
        )}
        {isLoading ? (
          <Skeleton circle height={50} width={50} /> // Round image
        ) : (
          <img
            src={isFavourite ? stardark : star}
            alt={isFavourite ? "Favourited Star" : "Star"}
            className="header-image"
          />
        )}
      </div>

      {/* Info section */}
      <div className="info">
        {isLoading ? (
          <Skeleton width={120} />
        ) : (
          <span className="title">{infoText}</span>
        )}
        {isLoading ? (
          <Skeleton width={0} />
        ) : (
          <span className="bulletpoint">• 5 days ago</span>
        )}
      </div>

      {/* Item text */}
      <div className="item">
        {isLoading ? (
          <Skeleton width="100%" />
          
        ) : (
          <span>{itemText}</span>
        )}
      </div>

      {/* Actions */}
      <div className="actions">
        {isLoading ? (
          <Skeleton width={100} height={40} borderRadius={8} /> // Skeleton for the entire button
        ) : (
        <button className="action-button download">
          Download
        </button>
        )}
        
        {isLoading ? (
            <Skeleton width={100} height={40} borderRadius={8} /> // Skeleton for the entire button
          ) : (
        <button className="action-button view">
            View
        </button>
        )}
      </div>
    </div>
  );
};

export default Card;
