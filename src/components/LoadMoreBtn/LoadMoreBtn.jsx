import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
