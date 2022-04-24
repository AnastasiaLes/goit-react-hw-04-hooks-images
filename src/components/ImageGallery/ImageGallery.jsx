
import { Spiner } from 'components/Loader/Loader';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'
import { ImageGalleryStyles } from 'components/ImageGalleryItem/ImageGalleryItem.styled';


export function ImageGallery(imageName, status, imageList, onImageClick, error) {
  if (status === 'idle') {
      return <h2>Please, enter what you are looking for...</h2>
    }
  if (status === 'pending') {
    console.log(imageList);
      return <Spiner />
    }
    if (status === 'rejected') {
      return <h1> Can't find "{imageName}" images</h1>
    }
    if (status === 'resolved') {
      return (
          <ImageGalleryStyles>
          {
            imageList.map(image =>
          (
            <ImageGalleryItem
              key={image.id.toString()}
              webformatURL={image.webformatURL}
              largeImageURL={image.largeImageURL}
              tag={image.tags}
              onClick={() => onImageClick(image.largeImageURL, image.tags)} />
            ))}
          
        </ImageGalleryStyles>
      );
    }
}

// class oldImageGallery extends React.Component {

//   render() {
//     if (this.props.status === 'idle') {
//       return <h2>Please, enter what you are looking for...</h2>
//     }
//     if (this.props.status === 'pending') {
//       return <Spiner />
//     }
//     if (this.props.status === 'rejected') {
//       return <h1> Can't find "{this.props.imageName}" images</h1>
//     }
//     if (this.props.status === 'resolved') {
//       return (
//           <ImageGalleryStyles>
//           {this.props.imageList.map(image =>
//           (
//             <ImageGalleryItem
//               key={image.id.toString()}
//               webformatURL={image.webformatURL}
//               largeImageURL={image.largeImageURL}
//               tag={image.tags}
//               onClick={() => this.props.onImageClick(image.largeImageURL, image.tags)} />
//             ))}
          
//         </ImageGalleryStyles>
//       );
//     }
//  } 
// }
  

