/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);




const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Top Products",
    },
  },
  maintainAspectRatio: false,
};

const Style = {
  // position: "relative",
  margin: "50px 0",
  // width: "100%",
  // height: "150px",
  // background: "white",
  // borderRadius: "15px",
  // boxShadow: "rgba(0, 0, 0, 0.75) 0px 0px 6px -1px",
};

export const data = {
  labels: ["userId 1", "Others"],
  datasets: [
    {
      label: "Number of data",
      data: [12, 98],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)"
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = ({one, others}) => {
  data.datasets[0].data[0] = one; 
  data.datasets[0].data[1] = others; 
  return (
    <div style={Style}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default PieChart





