import { ReactPropTypes } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  console.log(images);
  return (
    <ul className="ImageGallery">
      {images.map(image => {
        return <ImageGalleryItem key={image.id} imageData={image} />;
      })}
    </ul>
  );
};
export default ImageGallery;
