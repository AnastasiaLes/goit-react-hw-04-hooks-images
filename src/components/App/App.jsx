import {useEffect, useState} from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import { Modal } from 'components/Modal/Modal';
import { AppContainer } from './App.styled';
import { fetchImages } from 'Services/api';
import { LoadMoreButton } from 'components/Button/Button';
import * as Scroll from 'react-scroll';

const scroll = Scroll.animateScroll;

export function App() {
  const [page, setPage] = useState(1);
  const [imageName, setImageName] = useState('');
  const [largeImage, setLargeImage] = useState('');
  const [tags, setTags] = useState('');
  const [imageList, setImageList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    if (imageName.length !== 0) {
     setStatus('pending');
          fetchImages(imageName, page)
            .then(images => {
              if (images.hits.length > 0) {
                console.log('Resolved');
                setImageList(prevState => [...prevState, ...images.hits])
                setStatus('resolved')
                return;
              };
              setStatus('rejected');
            }
            )
            .catch(error => {
              setStatus('rejected');
              setError(error);
            });
   }
  }, [imageName, page])
  
  const handleFormSubmit = (imageName) => {
    setImageName(imageName);
    setImageList([]);
    setPage(1);
}
  
  const handleLoadMore = () => {
    setPage(prevState =>  prevState + 1);
    scroll.scrollToBottom();
  }
  
  const handleImageClick = (largeImage, tags) => {
    setLargeImage(largeImage);
    setTags(tags);
    setVisible(true);
  }

  const onModalClose = event => {
    console.log(event.code);
    event.preventDefault();
    if (event.target === event.currentTarget) {
      setVisible(false);
    }
  }

return (
      <AppContainer>
        <Searchbar onSubmit={handleFormSubmit} />
        <ImageGallery
          imageName={imageName}
          status={status}
          imageList={imageList}
          onImageClick={handleImageClick}
          error={error} />
        
        {visible && 
          <Modal
          onClose={onModalClose}
          LargeImage={largeImage}
          tags={tags}/>
        }

        { imageList.length > 0 &&
          <LoadMoreButton onClick={handleLoadMore} />
        }
        
        <ToastContainer autoClose={3000} />
      </AppContainer>
    );
}

