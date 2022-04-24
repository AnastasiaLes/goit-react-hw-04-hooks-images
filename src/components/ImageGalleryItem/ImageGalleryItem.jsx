import React from 'react';
import { GalleryItem, GalleryImage } from '../ImageGallery/ImageGallery.styled';

export const ImageGalleryItem = ({webformatURL, onClick, tag }) => {
  return (
   <GalleryItem>
      <GalleryImage
        src={webformatURL}
        alt={tag}
        onClick={onClick}
      />
    </GalleryItem>
  );
};
