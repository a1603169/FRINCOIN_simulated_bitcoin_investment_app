import classes from "./AllCoinsPage.module.css";
import { useState, useEffect, useRef } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import axios from "axios";

function CoinsDetailsPage() {
  const [datas, setDatas] = useState({});
  const [favourite, setFavourite] = useState(false);
  const [coinName, setCoinName] = useState("");
  const inputRef = useRef("");

  useEffect(() => {
    inputRef.current = coinName;
  }, [coinName]);
  // const [loading, setLoading] = useState(false);

  const krURL = "https://api.bithumb.com/public/ticker/ALL_KRW";

  const option = {
    maximumFractionDigits: 0,
  };
  function favouriteHandler() {
    // check the login status
    // if not redirect to login
    // if yes post this to favourite and filter it
    // to decide to show filled star or unfilled star
    // currently just set as normal toggle without storage
    setFavourite(!favourite);
  }

  useEffect(() => {
    getData();
  }, [datas]);

  Object.entries(datas).map((key, value) => {
    return key, value;
  });

  const getData = async () => {
    try {
      // setLoading(true);
      const response = await axios.get(krURL);
      setDatas(response.data.data);
      // setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // if (loading) return <p>LOADING....</p>;

  return (
    <div className={classes.table_Outer_Container}>
      <div className={classes.filter_Container}>
        <div className={classes.btns_Container}>
          <button className={classes.category_Btn}>KRW MARKET</button>
          <button className={classes.category_Btn}>BTC MARKET</button>
          <button className={classes.category_Btn}>MY COINS</button>
          <button className={classes.category_Btn}>FAVOURITES</button>
        </div>
        <div className={classes.btns_Container}>
          <button className={classes.category_Btn}>MAJOR</button>
          <button className={classes.category_Btn}>GENERAL</button>
          <button className={classes.category_Btn}>NEW</button>
        </div>
        <div className={classes.input_Container}>
          <h1 className={classes.searchBar_text}>COIN: </h1>
          <input
            value={coinName}
            onChange={(e) => setCoinName(e.target.value)}
            className={classes.searchBar}
            placeholder="COIN NAME"
          />
          <p>
            {coinName} & {inputRef.current}
          </p>
        </div>
      </div>
      <center>
        <div className={classes.table_Container}>
          <table className={classes.table_Inner_Container}>
            <thead className={classes.table_header}>
              <tr className={classes.table_row}>
                <th className={classes.table_head}>
                  <div className={classes.table_title_name}> </div>
                </th>
                <th className={classes.table_head}>
                  <div className={classes.table_title_name}>NAME </div>
                </th>
                <th className={classes.table_head}>
                  <div className={classes.table_title_number}>PRICE </div>
                </th>

                <th className={classes.table_head}>
                  <div className={classes.table_title_number}>
                    RATE OF CHANGE
                  </div>
                </th>
                <th className={classes.table_head}>
                  <div className={classes.table_title_name}>
                    TRANSACTION AMOUNT(24H)
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className={classes.table_body}>
              {Object.entries(datas).map((data) => {
                const title = data[0];
                const closing_price = data[1]["closing_price"];
                const prev_closing_price = data[1]["prev_closing_price"];
                const price_dif = closing_price - prev_closing_price;
                const rate_dif = (price_dif / closing_price) * 100;
                const acc_trade_value_24H = +data[1]["acc_trade_value_24H"];

                if (data[0] !== "date") {
                  return (
                    <tr className={classes.table_row}>
                      <td className={classes.table_favourite}>
                        <span onClick={favouriteHandler}>
                          {!favourite ? <AiFillStar /> : <AiOutlineStar />}
                        </span>
                      </td>
                      <td className={classes.table_data} keys={title}>
                        <div>{title}</div>
                      </td>
                      <td
                        className={classes.table_data}
                        keys={title + closing_price}
                      >
                        <div>
                          {Number(closing_price).toLocaleString("ko-KR")} KRW
                        </div>
                      </td>
                      <td
                        className={classes.table_data}
                        keys={title + price_dif}
                      >
                        <div
                          className={
                            price_dif > 0
                              ? classes.red_plus_text
                              : classes.blue_plus_text
                          }
                        >
                          <span>
                            {Number.isInteger(price_dif)
                              ? price_dif.toLocaleString("ko-KR")
                              : price_dif.toFixed(2)}{" "}
                            KRW
                          </span>
                          <span>
                            {" ("}
                            {rate_dif.toFixed(2)}
                            {"%)"}
                            {/* 이게 변동률 */}
                          </span>
                        </div>
                      </td>

                      <td
                        className={classes.table_data}
                        keys={title + acc_trade_value_24H}
                      >
                        {acc_trade_value_24H.toLocaleString("ko-KR", option)}{" "}
                        KRW
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </center>
    </div>
  );
}

export default CoinsDetailsPage;
