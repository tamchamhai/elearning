import React from "react";
import { Bar } from "react-chartjs-2";
import "./style.scss";

function BarChartjs() {
  return (
    <div className="chart">
      <Bar
        data={{
          labels: ["January", "February", "March", "April", "May"],
          datasets: [
            {
              label: "Total views per month",
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                "rgba(255, 99, 132, 0.5)",
                "rgba(54, 162, 235, 0.5)",
                "rgba(255, 206, 86, 0.5)",
                "rgba(75, 192, 192, 0.5)",
                "rgba(153, 102, 255, 0.5)",
                "rgba(255, 159, 64, 0.5)",
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
        }}
        height={500}
        width={700}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "Total Views Per Month",
            fontSize: 35,
            color: "red",
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}

export default BarChartjs;
