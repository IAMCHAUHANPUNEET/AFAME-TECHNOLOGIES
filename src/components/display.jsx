import styles from "./display.module.css";
function Display({ displayvalue }) {
  return (
    <>
      <input
        className={styles.display}
        value={displayvalue}
        type="text"
        readOnly
      ></input>
    </>
  );
}
export default Display;
