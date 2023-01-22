import classes from "./ModalPopup.module.css";
import CoinChart from "../CoinChart.js/CoinChart";
function ModalPopup({ title, show, close, index, data }) {
  if (show === null) {
    return null;
  } else if (show === index) {
    return (
      <div className={classes.modal_popup_container}>
        <div className={classes.modal_popup}>
          <div className={classes.modal_popup_header}>
            <h2>{title}</h2>
          </div>
          <div className={classes.modal_popup_body}>
            <CoinChart selectedCoinData={data} />
          </div>
          <div className={classes.modal_popup_footer}>
            <button onClick={close}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalPopup;
