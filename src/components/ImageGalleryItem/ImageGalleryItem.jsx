import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from '../ImageGallery/ImageGallery.styled';

export const ImageGalleryItem = ({ webformatURL, onClick, tag }) => {
  return (
    <GalleryItem>
      <GalleryImage src={webformatURL} alt={tag} onClick={onClick} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
