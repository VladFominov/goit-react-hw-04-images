import React, { useState} from 'react';
import PropTypes from 'prop-types';

import { Modal } from '../Modal/Modal';

export const GetImageGalleryItem = ({ id, webformatURL, largeImageURL }) => {

  const[isModalOpen, setIsModalOpen] = useState(false);

  const onClick = (e) => {
 setIsModalOpen(true);
  };

 const onModalClose = (e) => {
    e.stopPropagation();
    setIsModalOpen(!isModalOpen);
  }; 
    return (
      <li key={id} onClick={onClick} className="gallery-item">
        <img src={webformatURL} alt="" width="400px" />
        {isModalOpen && (
          <Modal onClose={onModalClose} largeImageURL={largeImageURL} />
        )}
      </li>
    );
  }


GetImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};