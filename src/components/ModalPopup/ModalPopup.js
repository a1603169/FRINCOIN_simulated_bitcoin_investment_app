import classes from "./ModalPopup.module.css";
import CoinChart from "../CoinChart.js/CoinChart";
import { AiFillCloseSquare } from "react-icons/ai";
function ModalPopup({ title, show, close, index, data }) {
  if (show === null) {
    return null;
  } else if (show === index) {
    return (
      <div className={classes.modal_popup_container}>
        <div className={classes.modal_popup}>
          <span className={classes.modal_popup_header}>
            <span>{title}</span>
          </span>
          <div className={classes.modal_popup_body}>
            <CoinChart selectedCoinData={title} />
          </div>
          <div className={classes.modal_popup_close_button}>
            <AiFillCloseSquare onClick={close} />
          </div>
          <div className={classes.modal_popup_buy_sell_outer_container}>
            <div className={classes.modal_popup_buy_sell_inner_container}>
              <h1 className={classes.modal_popup_buy_sell_title}>PURCHASE</h1>
              <div className={classes.modal_popup_buy_sell_price}>
                {/* {data[index].closing_price.toLocaleString("ko-KR")} KRW */}
              </div>
              <div className={classes.modal_popup_buy_sell_form}>
                <input
                  className={classes.modal_popup_buy_sell_form_input}
                  type="text"
                  id="purchase"
                  placeholder="PURCHASE (KRW)"
                />
                <button
                  className={classes.modal_popup_buy_sell_form_button}
                  type="submit"
                >
                  PURCHASE
                </button>
              </div>
            </div>

            <div className={classes.modal_popup_buy_sell_inner_container}>
              <div className={classes.user_money_amount_title}>
                <h1>USER NAME</h1>
              </div>
              <div className={classes.user_money_amount_amount}>
                <h1>USER MONEY AMOUNT</h1>
              </div>
            </div>
            <div className={classes.modal_popup_buy_sell_inner_container}>
              <h1 className={classes.modal_popup_buy_sell_title}>SELL</h1>
              <div className={classes.modal_popup_buy_sell_price}>
                {/* {data[index].closing_price.toLocaleString("ko-KR")} KRW */}
              </div>

              <div className={classes.modal_popup_buy_sell_form}>
                <input
                  className={classes.modal_popup_buy_sell_form_input}
                  type="text"
                  id="sell"
                  placeholder="SELL (KRW)"
                />
                <button
                  className={classes.modal_popup_buy_sell_form_button}
                  type="submit"
                >
                  SELL
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalPopup;
