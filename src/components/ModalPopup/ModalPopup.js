import classes from "./ModalPopup.module.css";
import CoinChart from "../CoinChart.js/CoinChart";
import { AiFillCloseSquare } from "react-icons/ai";
import { useRef } from "react";
import axios from "axios";
function ModalPopup({ title, show, close, index, data }) {
  const inputSell = useRef();
  const inputBuy = useRef();

  const handleAdd1000k = (event) => {
    event.preventDefault();
    const buttonId = event.target.id;
    if (buttonId === "purchase_add") {
      if (!isNaN(inputBuy.current.value)) {
        let numbers = parseInt(inputBuy.current.value);
        numbers += +1000000;
        // console.log(typeof numbers);
        inputBuy.current.value = numbers;
        // console.log(inputSell.current.value);
      } else {
        inputBuy.current.value = +1000000;
      }
    } else {
      if (!isNaN(inputSell.current.value)) {
        let numbers = parseInt(inputSell.current.value);
        numbers += +1000000;
        // console.log(typeof numbers);
        inputSell.current.value = numbers;
        // console.log(inputSell.current.value);
      } else {
        inputSell.current.value = +1000000;
      }
    }
    return;
  };

  const handleAdd100k = (event) => {
    event.preventDefault();
    const buttonId = event.target.id;
    if (buttonId === "purchase_add") {
      if (!isNaN(inputBuy.current.value)) {
        let numbers = parseInt(inputBuy.current.value);
        numbers += +100000;
        // console.log(typeof numbers);
        inputBuy.current.value = numbers;
        // console.log(inputSell.current.value);
      } else {
        inputBuy.current.value = +100000;
      }
    } else {
      if (!isNaN(inputSell.current.value)) {
        let numbers = parseInt(inputSell.current.value);
        numbers += +100000;
        // console.log(typeof numbers);
        inputSell.current.value = numbers;
        // console.log(inputSell.current.value);
      } else {
        inputSell.current.value = +100000;
      }
    }
    return;
  };
  const handleAdd10k = (event) => {
    event.preventDefault();
    const buttonId = event.target.id;
    if (buttonId === "purchase_add") {
      if (!isNaN(inputBuy.current.value)) {
        let numbers = parseInt(inputBuy.current.value);
        numbers += +10000;
        // console.log(typeof numbers);
        inputBuy.current.value = numbers;
        // console.log(inputSell.current.value);
      } else {
        inputBuy.current.value = +10000;
      }
    } else {
      if (!isNaN(inputSell.current.value)) {
        let numbers = parseInt(inputSell.current.value);
        numbers += +10000;
        // console.log(typeof numbers);
        inputSell.current.value = numbers;
        // console.log(inputSell.current.value);
      } else {
        inputSell.current.value = +10000;
      }
    }
    return;
  };

  const handleBuy = (event) => {
    event.preventDefault();
    const buyAmount = inputBuy.current.value;
    // const buyPrice = data.quote.KRW.price;
    // const buyTotal = buyAmount * buyPrice;

    axios
      .post("example.com", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          buyAmount: buyAmount,
        }),
      })
      .then((response) => {
        console.log(response, "BUY RESPONSE");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSell = (event) => {
    event.preventDefault();
    const sellAmount = inputSell.current.value;
    // const sellPrice = data.quote.KRW.price;
    // const sellTotal = sellAmount * sellPrice;

    axios
      .post("example.com", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sellAmount: sellAmount,
        }),
      })
      .then((response) => {
        console.log(response, "SELL RESPONSE");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addToFavourite = (event) => {
    event.preventDefault();
    const favouriteCoin = title;
    axios
      .post("example.com", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          favouriteCoin: favouriteCoin,
        }),
      })
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  };

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
            <CoinChart title={title} />
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
                  ref={inputBuy}
                  min="0"
                  className={classes.modal_popup_buy_sell_form_input}
                  defaultValue="0"
                  type="number"
                  id="purchase"
                  placeholder="PURCHASE (KRW)"
                />
                <button
                  onClick={handleBuy}
                  className={classes.modal_popup_buy_sell_form_button}
                  type="submit"
                >
                  PURCHASE
                </button>
                <button
                  id="purchase_add"
                  onClick={handleAdd10k}
                  className={classes.modal_popup_buy_sell_form_button}
                >
                  + 10,000 ₩
                </button>
                <button
                  id="purchase_add"
                  onClick={handleAdd100k}
                  className={classes.modal_popup_buy_sell_form_button}
                >
                  + 100,000 ₩
                </button>
                <button
                  id="purchase_add"
                  onClick={handleAdd1000k}
                  className={classes.modal_popup_buy_sell_form_button}
                >
                  + 1,000,000 ₩
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
              <button
                onClick={addToFavourite}
                className={classes.modal_popup_buy_sell_form_button}
              >
                ADD FAVOURITE
              </button>
            </div>
            <div className={classes.modal_popup_buy_sell_inner_container}>
              <h1 className={classes.modal_popup_buy_sell_title}>SELL</h1>
              <div className={classes.modal_popup_buy_sell_price}>
                {/* {data[index].closing_price.toLocaleString("ko-KR")} KRW */}
              </div>

              <div className={classes.modal_popup_buy_sell_form}>
                <input
                  ref={inputSell}
                  min="0"
                  className={classes.modal_popup_buy_sell_form_input}
                  type="number"
                  id="sell"
                  defaultValue="0"
                  placeholder="SELL (KRW)"
                />
                <button
                  onClick={handleSell}
                  className={classes.modal_popup_buy_sell_form_button}
                  type="submit"
                >
                  SELL
                </button>
                <button
                  id="sell_add"
                  onClick={handleAdd10k}
                  className={classes.modal_popup_buy_sell_form_button}
                >
                  + 10,000 ₩
                </button>
                <button
                  id="sell_add"
                  onClick={handleAdd100k}
                  className={classes.modal_popup_buy_sell_form_button}
                >
                  + 100,000 ₩
                </button>
                <button
                  id="sell_add"
                  onClick={handleAdd1000k}
                  className={classes.modal_popup_buy_sell_form_button}
                >
                  + 1,000,000 ₩
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
