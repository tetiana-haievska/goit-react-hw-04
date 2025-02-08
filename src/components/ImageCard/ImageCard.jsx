import PropTypes from "prop-types";
import styles from "./ImageCard.module.css";

function ImageCard({ image, onImageClick }) {
  return (
    <div className={styles.card}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={styles.image}
        onClick={() => onImageClick(image)}
        // onClick={() => onImageClick(image.urls.regular)}
      />
    </div>
  );
}

ImageCard.propTypes = {
  image: PropTypes.shape({
    urls: PropTypes.shape({
      small: PropTypes.string.isRequired,
      regular: PropTypes.string.isRequired, // Додаємо regular для модального вікна
    }).isRequired,
    alt_description: PropTypes.string,
  }).isRequired,
  onImageClick: PropTypes.func.isRequired, // Переконайся, що це функція
};

export default ImageCard;