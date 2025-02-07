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
          src={image?.regular}
          alt={image?.description || "Selected image"}
        />
        <p>{image?.description}</p>
        <p>Author: {image?.user?.name}</p>
        <p>Likes: {image?.likes}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
