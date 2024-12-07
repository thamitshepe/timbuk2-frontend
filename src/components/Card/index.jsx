import React from "react";
import "./Card.css";
import waves from '../../images/icons/waves.png';
import star from '../../images/icons/star.png';
import stardark from '../../images/icons/star-dark.png';

const Card = ({ infoText, itemText, isFavourite }) => {
  return (
    <div className="kanban-card">
      {/* Header with images */}
      <div className="header">
        <img src={waves} alt="Image 1" className="header-image" />
        <img
          src={isFavourite ? stardark : star}
          alt={isFavourite ? "Favourited Star" : "Star"}
          className="header-image"
        />
      </div>

      {/* Info section */}
      <div className="info">
        <span className="title">Timbuk2</span>
        <span className="bulletpoint">• 5 days ago</span>
      </div>

      {/* Item text */}
      <div className="item">
        <span>{itemText}</span>
      </div>

      {/* Actions */}
      <div className="actions">
        <button className="action-button download">Download</button>
        <button className="action-button view">View</button>
      </div>
    </div>
  );
};

export default Card;
