import { useState } from 'react';

import Modal from 'components/Modal/Modal';

const ImageGalleryItem = ({
  imageData: { webformatURL, tags, largeImageURL },
}) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = e => {
    setShowModal(state => !state);
  };

  return (
    <li className="ImageGalleryItem">
      <img
        onClick={toggleModal}
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
      />
      {showModal && (
        <Modal url={largeImageURL} alt={tags} toggleModal={toggleModal} />
      )}
    </li>
  );
};

export default ImageGalleryItem;
