// import PropTypes from "prop-types";
// import ImageCard from "../ImageCard/ImageCard";
// import styles from "./ImageGallery.module.css";

// function ImageGallery ({ images, onImageClick }) {
//   return (
//     <ul className={styles.gallery}>
//       {images.map((image) => (
//         <li key={image.id} className={styles.item}>
//           <ImageCard image={image} onClick={() => onImageClick(image.urls.regular)} />
//         </li>
//       ))}
//     </ul>
//   );
// };

// ImageGallery.propTypes = {
//   images: PropTypes.arrayOf.isRequired,
//   onImageClick: PropTypes.func.isRequired,
// };

// export default ImageGallery;
import PropTypes from "prop-types";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard key={image.id} image={image} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      urls: PropTypes.shape({
        small: PropTypes.string.isRequired,
      }).isRequired,
      alt_description: PropTypes.string,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
