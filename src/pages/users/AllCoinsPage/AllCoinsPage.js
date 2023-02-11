import Loading from "../../../components/Loading/Loading";
import classes from "./AllCoinsPage.module.css";
import { useState, useEffect, useRef } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import axios from "axios";
import ModalPopup from "../../../components/ModalPopup/ModalPopup";

function CoinsDetailsPage() {
  const [selectedTr, setSelectedTr] = useState(null);
  function closeModal() {
    setSelectedTr(null);
  }
  // console.log(selectedTr === null);
  // to get the index of the table row which is clicked and open the modal by changing the state
  // of the selectedTr

  const [favourite, setFavourite] = useState(false);
  // to decide to show filled star or unfilled start

  const inputRef = useRef("");
  // to get the input value from the input field and use it to filter the coins

  const tableRef = useRef(null);
  // to get the table element and use it to show the coin chart

  const [loading, setLoading] = useState(true);
  // to show the loading spinner₩

  const [datas, setDatas] = useState({});
  const getData = async () => {
    try {
      const response = await axios.get(krURL);
      setDatas(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // API call to get the overall coin data
  // api call to get all coins data

  useEffect(() => {
    getData();
  }, [datas]);

  const [coinName, setCoinName] = useState("");
  useEffect(() => {
    inputRef.current = coinName;
  }, [coinName]);

  // to filter the coins

  let filteredData = Object.entries(datas).filter((data) => {
    return data[0].toLowerCase().includes(coinName.toLowerCase());
  });

  // filter the coins based on the input value

  const option = {
    maximumFractionDigits: 0,
  };
  // to set the number of decimal places for the KR prices

  const krURL = "https://api.bithumb.com/public/ticker/ALL_KRW";
  // KR coin api url

  function favouriteHandler() {
    // check the login status
    // if not redirect to login
    // if yes post this to favourite and filter it
    // to decide to show filled star or unfilled star
    // currently just set as normal toggle without storage
    setFavourite(!favourite);
  }

  function selectedCoinDataHandler() {
    // I have to get the index of the table row and then get the data from the selectedCoinTitle array
    // and then compare the index of the table row with the index of the selectedCoinTitle array
    // and then change the state of the selectedCoinTitle array to show the chart which
    // is in the selectedCoinTitle array with the index of the table row which is clicked and then show the chart component
    // currently just set as normal toggle without storage
  }

  if (loading)
    return (
      <>
        <Loading />
      </>
    );

  return (
    <div className={classes.table_Outer_Container}>
      <div className={classes.filter_Container}>
        <div className={classes.btns_Container}>
          {/* <button className={classes.category_Btn}>KRW MARKET</button>
          <button className={classes.category_Btn}>BTC MARKET</button> */}
          {/* <button className={classes.category_Btn}>MY COINS</button> */}
        </div>
        <div className={classes.btns_Container}>
          <button className={classes.category_Btn}>FAVOURITES</button>
          <button className={classes.category_Btn}>MAJOR</button>
          <button className={classes.category_Btn}>GENERAL</button>
          <button className={classes.category_Btn}>NEW</button>
        </div>
        <div className={classes.input_Container}>
          <h1 className={classes.searchBar_text}>COIN: </h1>
          <input
            ref={inputRef}
            type="text"
            onChange={(e) => setCoinName(e.target.value)}
            className={classes.searchBar}
            placeholder="COIN NAME"
          />
        </div>
      </div>

      <center>
        <div className={classes.table_Container}>
          {filteredData.length === 0 ? (
            <center>
              <div className={classes.coin_not_found}>
                COIN NOT EXIST, PLEASE TYPE THE NAME OF THE COIN CODE PROPERLY
              </div>
            </center>
          ) : (
            <table className={classes.table_Inner_Container}>
              <thead className={classes.table_header}>
                <tr className={classes.table_row}>
                  <th className={classes.table_head}>
                    <div className={[classes.table_title_name]}>{":)"}</div>
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
              <tbody className={classes.table_body} ref={tableRef}>
                {filteredData.map((data, index) => {
                  const title = data[0];

                  const closing_price = data[1]["closing_price"];
                  const prev_closing_price = data[1]["prev_closing_price"];
                  const price_dif = closing_price - prev_closing_price;
                  const rate_dif = (price_dif / closing_price) * 100;
                  const acc_trade_value_24H = +data[1]["acc_trade_value_24H"];
                  const tableIndex = index;
                  const indexReturn = () => {
                    if (selectedTr === null) setSelectedTr(index);
                    else setSelectedTr(null);
                  };

                  if (title !== "date") {
                    return (
                      <>
                        <tr
                          key={title + 0}
                          className={classes.table_row}
                          onClick={indexReturn}
                          index={tableIndex}
                          style={
                            selectedTr === index
                              ? {
                                  backgroundColor: "black",
                                  opacity: "0.8",
                                  color: "rgb(151,90,208)",
                                }
                              : null
                          }
                        >
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
                              {(+closing_price).toLocaleString("ko-KR")} KRW
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
                              </span>
                            </div>
                          </td>
                          <td
                            className={classes.table_data}
                            keys={title + acc_trade_value_24H}
                          >
                            {acc_trade_value_24H.toLocaleString(
                              "ko-KR",
                              option
                            )}{" "}
                            KRW
                          </td>
                        </tr>
                        <ModalPopup
                          title={title}
                          show={selectedTr}
                          close={closeModal}
                          index={tableIndex}
                          data={filteredData}
                        />
                      </>
                    );
                  }
                })}
              </tbody>
            </table>
          )}
        </div>
      </center>
    </div>
  );
}

export default CoinsDetailsPage;
