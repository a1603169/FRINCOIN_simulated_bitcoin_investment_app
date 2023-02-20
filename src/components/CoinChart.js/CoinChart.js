import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

function CoinChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.bithumb.com/public/ticker/BTC_KRW")
      .then((response) => response.json())
      .then((data) => {
        // 데이터를 배열로 변환하여 최근 10개의 데이터 포인트만 유지
        const chartData = Object.entries(data.data)
          .map(([key, value]) => ({ time: key, price: value.closing_price }))
          .slice(0, 10);
        setData(chartData);
        console.log(chartData);
      });
    console.log(data);
  }, []);

  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="price" stroke="#8884d8" />
    </LineChart>
  );
}

export default CoinChart;
