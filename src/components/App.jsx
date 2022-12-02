import React, {useState, useEffect} from 'react';
// import CircularProgress from '@mui/material/CircularProgress';
import Spinner from 'react-bootstrap/Spinner';
import { SearchbarForm } from './Searchbar/Searchbar';
import { getImages } from './Services/api';

import { ImageGalleryList } from './ImageGallery/ImageGallery';
import { ButtonLoadMore } from './Button/Button';

export const App = () => {
   const [page, setPage] = useState(1);
   const [imageName, setImageName] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const [images, setImages] = useState([]);
   

   useEffect(() => {
     if (
       imageName 
     ) {
    
         setIsLoading(true);

       getImages( imageName, page )
           .then(resp => {
             setImages([...images, ...resp.hits]);
           })
           .catch(error => {
             console.log(error)
           })
           .finally(() => {
             setIsLoading({ isLoading: false });
           });
     }
     // eslint-disable-next-line
   }, [imageName, page])

   
  // onSelectImage = imageName => {
  //   this.setState({ imageName: imageName, images: [], page:1 });
  // };
    const onSelectImage = imageName => {
      setImageName( imageName, images, page );
  };

  // loadMore = () => {
  //   this.setState(prevState => ({ page: prevState.page + 1 }));
  // };
   
    const loadMore = () => {
    setPage(prevState => (prevState + 1 ));
  };

    return (
      <div
        style={{
          height: '100vh',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <SearchbarForm onSelectImage={onSelectImage} />
        <Spinner animation="border" variant="success" />
        {/* {isLoading && <CircularProgress color="success" />} */}

        <ImageGalleryList images={images} />

        {imageName && <ButtonLoadMore onClick={loadMore} />}
      </div>
    );
  }

