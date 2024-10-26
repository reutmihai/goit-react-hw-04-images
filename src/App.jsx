import { useState } from 'react'
import { Searchbar } from './components/Searchbar/Searchbar';
import { getImages } from "../src/services/imageService";
import './App.css'

function App() {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);

   const handleSearchSubmit = async (searchQuery) => {
     try {
       setIsLoading(true);
       const images = await getImages(searchQuery);
       if (images.length === 0) {
        setImages([]);
        setError('N-a fost gasit niciun rezultat.');
         return;
       }
       setImages(images);
     } catch (error) {
      setImages([]);
      setError('A aparut o eroare la cautare.');
     } finally {
       setIsLoading(false);
     }
   };



  return (
    <div>
      <Searchbar onFormSubmit={handleSearchSubmit}/>
    </div>
  )
}

export default App
