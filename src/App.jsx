import { useState } from 'react'
import { Searchbar } from './components/Searchbar/Searchbar';
import { getImages } from "../src/services/imageService";
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import './App.css'
import { Loader } from './components/Loader/Loader';
import { LoadMore } from './components/LoadMore/LoadMore';

function App() {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [visible, setVisible] = useState(false);

   const handleSearchSubmit = async (searchQuery) => {
    setSearchQuery(searchQuery);
    setPage(1);
    setImages([]);
    setError("");
     try {
       setIsLoading(true);
       const images = await getImages(searchQuery, 1);
       if (images.length === 0) {
        setImages([]);
        setError('N-a fost gasit niciun rezultat.');
         return;
       }
       setImages(images);
       setVisible(true);
     } catch (error) {
      setImages([]);
      setError('A aparut o eroare la cautare.');
     } finally {
       setIsLoading(false);
     }
   };

   const loadMoreImages = async() => {
    setIsLoading(true);
    setPage(prevState => prevState+ 1);

    try {
      const newImages = await getImages(searchQuery, page + 1);
      setImages(prevImages => [...prevImages, ...newImages]);
    }catch(error){
      setError(`A aparut o eroare la incarcarea imaginilor: ${error}`);
    }finally {
      setIsLoading(false);
    }
   }



  return (
    <div className="flexbox">
      <Searchbar onFormSubmit={handleSearchSubmit} />
      <div>
        {isLoading && <Loader isLoading={isLoading} />}
        {error && <p className="error">{error}</p>}
        {images.length === 0 && !isLoading && !error && (
          <p>Nu exista nicio imagine</p>
        )}
        {images.length > 0 && <ImageGallery images={images} />}

        {visible && (
          <LoadMore
            onClick={loadMoreImages}
            visible={images.length > 0 && !isLoading}
          />
        )}
      </div>
    </div>
  );
}

export default App
