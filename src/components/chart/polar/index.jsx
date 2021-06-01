import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./style.scss";

function PolarChartJs() {
  return (
    <div className="chart">
      <Doughnut
        data={{
          labels: ["January", "February", "March", "April", "May"],
          datasets: [
            {
              //   label: "Total views per month",
              data: [109, 119, 103, 115, 205, 193],
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

export default PolarChartJs;
