import { useState, useEffect } from "react";
import Axios from "axios";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

Chart.register(LineElement);
Chart.register(PointElement);
Chart.register(CategoryScale);
Chart.register(LinearScale);

const CoinChart = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios.get(
        "https://api.bithumb.com/public/ticker/ALL_KRW"
      );
      setData(result.data);
    };

    fetchData();
  }, []);

  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: "Price (KRW)",
        data: Object.values(data).map((datum) => datum.closing_price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      {Object.keys(data).length ? (
        <Line
          data={chartData}
          options={{
            maintainAspectRatio: false,
          }}
        />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
};

export default CoinChart;
