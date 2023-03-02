import axios from "axios";
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

function CoinChart({ title }) {
  const [data, setData] = useState([]);
  const [krData, setKrData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const tempURL = `http://192.168.35.151:8080/cryptos/price/${title}/1/m`;
  const krURL = `https://api.bithumb.com/public/ticker/${title}_KRW`;

  // console.log(title);
  // set the request's mode to 'no-cors' and 'access-control-allow-origin' to make the request CORS-passthrough.
  const options = {
    mode: "no-cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(tempURL, options);
      setData(result.data);
    };
    fetchData();
    setIsLoading(false);
  }, [data]);

  return (
    <>
      <div>
        {data.result.price.map((price) => {
          return <p>{price}</p>;
        })}
      </div>
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
      </LineChart>
    </>
  );
}

export default CoinChart;
