import PropTypes from 'prop-types';
import { Spiner } from 'components/Loader/Loader';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyles } from 'components/ImageGalleryItem/ImageGalleryItem.styled';

export function ImageGallery({ imageName, status, imageList, onImageClick }) {
  if (status === 'idle') {
    return <h2>Please, enter what you are looking for...</h2>;
  }
  if (status === 'pending') {
    return <Spiner />;
  }
  if (status === 'rejected') {
    return <h1> Can't find "{imageName}" images</h1>;
  }
  if (status === 'resolved') {
    return (
      <ImageGalleryStyles>
        {imageList.map(image => (
          <ImageGalleryItem
            key={image.id.toString()}
            webformatURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
            tag={image.tags}
            onClick={() => onImageClick(image.largeImageURL, image.tags)}
          />
        ))}
      </ImageGalleryStyles>
    );
  }
}

ImageGallery.propTypes = {
  imageName: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  imageList: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
