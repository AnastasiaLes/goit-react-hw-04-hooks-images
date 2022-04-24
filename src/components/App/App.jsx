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
    console.log('Effect!');
    setStatus('pending');
          fetchImages(imageName, page)
            .then(images => {
              if (images.hits.length > 0) {
                setImageList(prevState => [...prevState, ...images.hits]);
                setStatus('resolved');
                return;
              }
              setStatus('rejected');
            }
            )
            .catch(error => {
              setStatus('rejected');
              setError( error )
            });
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

// class OldApp extends React.Component {
  // state = {
  //   page: 1,
  //   imageName: '',
  //   largeImage: '',
  //   tags: '',
  //   imageList: [],
  //   visible: false,
  //   status: 'idle',
  //   error: ''
  // };
  
  // componentDidUpdate(_, prevState) {
  //   if (prevState.imageName !== this.state.imageName || prevState.page !== this.state.page) {
  //     this.getImages()
  //     // console.log(prevState.imageName);
  //   } 
  // }
  
  // handleFormSubmit = (imageName) => {
  //     this.setState({ imageName, imageList: [], page: 1 })
  // }
  
  // getImages() {
  //   this.setState({ status: 'pending' });
  //         fetchImages(this.state.imageName, this.state.page)
  //           .then(images => {
  //            images.hits.length > 0 ? this.setState(prevState =>
  //         ({
  //           imageList: [...prevState.imageList, ...images.hits],
  //           status: 'resolved'
  //             })
  //            )
  //              : this.setState({ status: 'rejected' })
  //           }
  //           )
  //         .catch(error => this.setState({ error, status: 'rejected' }));
  //     }

  //  handleLoadMore = () => {
  //   this.setState(prevState => ({ page: prevState.page + 1 }));
  //   scroll.scrollToBottom();
  // }
  
  // handleImageClick = (largeImage, tags) => {
  //   this.setState({ largeImage, tags, visible: true });
  // }

  // componentDidMount() {
  //   window.addEventListener('keydown', this.handleKeyDown);
  // }

  // handleKeyDown = event => {
  //  if ( event.code === 'Escape') {
  //     this.setState({visible: false})
  //   }
  // }

  // onModalClose = event => {
  //   console.log(event.code);
  //   event.preventDefault();
  //   if (event.target === event.currentTarget) {
  //     this.setState({visible: false})
  //   }
  // }

  //   render() {
  //   return (
  //     <AppContainer>
  //       <Searchbar onSubmit={this.handleFormSubmit} />
  //       <ImageGallery
  //         imageName={this.state.imageName}
  //         status={this.state.status}
  //         imageList={this.state.imageList}
  //         onImageClick={this.handleImageClick}
  //         error={this.state.error} />
        
  //       {this.state.visible && 
  //         <Modal
  //         onClose={this.onModalClose}
  //         LargeImage={this.state.largeImage}
  //         tags={this.state.tags}/>
  //       }

  //       { this.state.imageList.length > 0 &&
  //         <LoadMoreButton onClick={this.handleLoadMore} />
  //       }
        
  //       <ToastContainer autoClose={3000} />
  //     </AppContainer>
  //   );
  // }
// }
