// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import styles from "./App.module.css";

const API_KEY = "1MbjWNk_IEv-Hz1iIYP0ye7iNNVKoKWWxUz7OSoQrCI";
const BASE_URL = "https://api.unsplash.com/search/photos";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(BASE_URL, {
          params: {
            query,
            page,
            per_page: 12,
            client_id: API_KEY,
          },
        });

        if (response.data.results.length === 0) {
          setError("No images found. Try another search.");
          return;
        }

        setImages((prevImages) =>
          page === 1
            ? response.data.results
            : [...prevImages, ...response.data.results]
        );
      } catch {
        setError("Failed to fetch images. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    if (newQuery.trim() === "") {
      setError("Enter a search query!");
      return;
    }
    if (newQuery === query) return;

    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (image) => {
    if (isModalOpen) return; // Prevent opening the modal if it's already open
    setModalImage(image);
    setIsModalOpen(true);
  };

  // const openModal = (image) => {
  //   setModalImage(image);
  // };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <div className={styles.app}>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {isModalOpen && (
        <ImageModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          image={modalImage}
        />
      )}
    </div>
  );
};

export default App;
