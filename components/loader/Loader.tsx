import styles from "./Loader.module.css";
const Loader = () => {
  return (
    <div className="flex justify-center mt-6">
      <span className={styles.loader} />
    </div>
  );
};

export default Loader;
