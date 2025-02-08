import PropTypes from "prop-types";
import Modal from "react-modal";
import styles from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      ariaHideApp={false}
    >
      <div className={styles.content}>
        <img
          src={image?.urls?.regular}
          alt={image?.description || "Selected image"}
        />
        <p>{image?.description || "No description available"}</p>
        <p>Author: {image?.user?.name || "Unknown"}</p>
        <p>Likes: {image?.likes || 0}</p>
      </div>
    </Modal>
  );
};
ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  image: PropTypes.shape({
    urls: PropTypes.shape({
      regular: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string,
    user: PropTypes.shape({
      name: PropTypes.string,
    }),
    likes: PropTypes.number,
  }),
};

export default ImageModal;
