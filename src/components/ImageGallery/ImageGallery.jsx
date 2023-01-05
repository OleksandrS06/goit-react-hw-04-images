import PropTypes from 'prop-types';
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

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
