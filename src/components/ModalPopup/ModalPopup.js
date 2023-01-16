import classes from "./ModalPopup.module.css";
import CoinChart from "../CoinChart.js/CoinChart";
function ModalPopup({ show, close, index, data }) {
  if (show === null) {
    return null;
  } else if (show === index) {
    return (
      <tr className={classes.modal_popup_container}>
        <div className={classes.modal_popup}>
          <div className={classes.modal_popup_header}>
            <h2>Modal Popup</h2>
          </div>
          <div className={classes.modal_popup_body}>
            <CoinChart selectedCoinData={data} />
          </div>
          <div className={classes.modal_popup_footer}>
            <button onClick={close}>Close</button>
          </div>
        </div>
      </tr>
    );
  }
}

export default ModalPopup;
