import styles from "./btn.module.css";
function Buttoncontainer({ onBtnClick }) {
  let btnnames = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className={styles.btncontainer}>
        {btnnames.map((buttonName) => (
          <button
            className={styles.button}
            key={buttonName}
            onClick={() => onBtnClick(buttonName)}
          >
            {buttonName}
          </button>
        ))}
      </div>
    </>
  );
}
export default Buttoncontainer;
