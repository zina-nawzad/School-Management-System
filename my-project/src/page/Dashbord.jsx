import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoInvertMode } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiStudentFill } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";

import Chart from "chart.js/auto";

const Dashboard = () => {
  const chartRef = useRef(null);
  const chartRef2 = useRef(null);
  const chartRef3 = useRef(null);

  useEffect(() => {
    const commonData = {
      datasets: [
        {
          data: [70, 30],
          backgroundColor: ["rgb(35, 50, 85)", "rgb(246,173,43)"],
          hoverOffset: 4,
        },
      ],
    };

    const lineChartData = {
      labels: ["mon", "tus", "wed", "thu", "fri", "sat", "sun"],
      datasets: [
        {
          label: "$ 90,000",
          data: [30, 40, 25, 45, 35, 80, 65],

          borderColor: "rgb(127, 189, 228)",
          backgroundColor: "rgba(127, 189, 228, 0.2)",
        },
        {
          label: "$75,000",
          data: [10, 25, 55, 25, 28, 35, 54],

          borderColor: "rgb(218, 165, 32)",
          backgroundColor: "rgba(218, 165, 32, 0.2)",
        },
        {
          label: "$ 90,000",
          data: [15, 5, 28, 15, 5, 15, 43],

          borderColor: "rgb(112, 130, 56)",
          backgroundColor: "rgba(112, 130, 56, 0.2)",
        },
      ],
    };

    const commonConfig = {
      type: "doughnut",
      data: commonData,
    };

    const lineChartConfig = {
      type: "line",
      data: lineChartData,
      options: {
        animations: {
          tension: {
            duration: 1000,
            easing: "linear",
            from: 0,
            to: 0.5,
          },
        },
        scales: {
          y: {
            min: 0,
            max: 100,
          },
        },
      },
    };
    const lineChartConfig2 = {
      type: "line",
      data: lineChartData,
      options: {
        animations: {
          tension: {
            duration: 1000,
            easing: "linear",
            from: 0,
            to: 0.5,
          },
        },
        scales: {
          y: {
            min: 0,
            max: 100,
          },
        },
      },
    };

    const ctx = document.getElementById("myChart").getContext("2d");
    const ctx2 = document.getElementById("myChart2").getContext("2d");
    const ctx3 = document.getElementById("myChart3").getContext("2d");
    const ctxAtt = document.getElementById("myChartAtt").getContext("2d");
    const ctxAtt2 = document.getElementById("myChartAtt2").getContext("2d");

    if (chartRef.current) chartRef.current.destroy();
    if (chartRef2.current) chartRef2.current.destroy();
    if (chartRef3.current) chartRef3.current.destroy();
    const myChartAttElement = document.getElementById("myChartAtt");
    if (myChartAttElement) {
      const oldChart = Chart.getChart(myChartAttElement);
      if (oldChart) {
        oldChart.destroy();
      }
    }
    const myChartAttElement2 = document.getElementById("myChartAtt2");
    if (myChartAttElement) {
      const oldChart = Chart.getChart(myChartAttElement2);
      if (oldChart) {
        oldChart.destroy();
      }
    }

    chartRef.current = new Chart(ctx, commonConfig);
    chartRef2.current = new Chart(ctx2, commonConfig);
    chartRef3.current = new Chart(ctx3, commonConfig);
    new Chart(ctxAtt, lineChartConfig);
    new Chart(ctxAtt2, lineChartConfig2);

    return () => {
      if (chartRef.current) chartRef.current.destroy();
      if (chartRef2.current) chartRef2.current.destroy();
      if (chartRef3.current) chartRef3.current.destroy();
    };
  }, []);

  return (
    // Home Page
    <div className="flex flex-col dark:bg-primary-color px-10">
      <span className="text-4xl dark:text-white">Dashbord</span>
      <div className="flex flex-col justify-around items-center gap-y-20">
        <div className="flex w-full  gap-4">
          <div className="flex justify-around items-center cursor-pointer bg-white shadow-[0_4px_8px_rgb(0,0,0,0.1)] mt-10 rounded-lg w-full">
            <div className="flex justify-around items-center  m-3 ">
              <div className="flex justify-center items-center ">
                <canvas id="myChart" width="80"></canvas>
              </div>

              <div className="flex flex-col justify-around gap-3 mx-3 my-3">
                <div
                  className="flex justify-between items-center  
                "
                >
                  <p className="text-primary-color text-xl font-semibold">
                    Student
                  </p>
                  <p className="text-primary-color text-xl font-semibold">
                    404
                  </p>
                </div>

                <div
                  className="flex justify-between items-center 
                "
                >
                  <p className="border-4 rounded-full border-primary-color "></p>
                  <p className="text-sm ml-2">Male</p>
                  <p className="border-4 rounded-full border-yellow-color ml-3"></p>
                  <p className="text-sm ml-2">Female</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-around items-center cursor-pointer bg-white shadow-[0_4px_8px_rgb(0,0,0,0.1)] mt-10 rounded-lg w-full">
            <div className="flex justify-around items-center m-3 ">
              <div className="flex justify-center items-center ">
                <canvas id="myChart2" width="80"></canvas>
              </div>

              <div className="flex flex-col justify-around gap-3 mx-3 my-3">
                <div
                  className="flex justify-between items-center  
                "
                >
                  <p className="text-primary-color text-xl font-semibold">
                    Teacher
                  </p>
                  <p className="text-primary-color text-xl font-semibold">56</p>
                </div>

                <div
                  className="flex justify-between items-center 
                "
                >
                  <p className="border-4 rounded-full border-primary-color "></p>
                  <p className="text-sm ml-2">Male</p>
                  <p className="border-4 rounded-full border-yellow-color ml-3"></p>
                  <p className="text-sm ml-2">Female</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-around items-center cursor-pointer bg-white shadow-[0_4px_8px_rgb(0,0,0,0.1)] mt-10 rounded-lg w-full">
            <div className="flex justify-around items-center m-3 ">
              <div className="flex justify-center items-center ">
                <canvas id="myChart3" width="80"></canvas>
              </div>

              <div className="flex flex-col justify-around gap-3 mx-3 my-3">
                <div
                  className="flex justify-between items-center  
                "
                >
                  <p className="text-primary-color text-xl font-semibold">
                    Stuff
                  </p>
                  <p className="text-primary-color text-xl font-semibold">
                    100
                  </p>
                </div>

                <div
                  className="flex justify-between items-center 
                "
                >
                  <p className="border-4 rounded-full border-primary-color "></p>
                  <p className="text-sm ml-2">Male</p>
                  <p className="border-4 rounded-full border-yellow-color ml-3"></p>
                  <p className="text-sm ml-2">Female</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center w-full gap-6 ">
          <div className="flex flex-col justify-between items-center p-4 w-1/2 shadow-[0_4px_8px_rgb(0,0,0,0.1)] rounded-lg">
            <div className="flex justify-between items-center w-full">
              <p className="flex justify-between items-center text-primary-color dark:text-slate-300 font-semibold">
                Attendance Summary
              </p>
              <BsThreeDots className="text-gray-500 dark:text-slate-300  " />
            </div>
            <div className="flex justify-between my-4 w-full">
              <div className="flex  items-center">
                <p className="border-4 rounded-full border-tertiary-color "></p>
                <p className="text-sm font-medium text-gray-600 mx-1 dark:text-slate-300 ">
                  {" "}
                  Total Collections
                </p>
              </div>
              <div className="flex  items-center">
                <p className="border-4 rounded-full border-[#DAA520] "></p>
                <p className="text-sm font-medium text-gray-600 mx-1 dark:text-slate-300 ">
                  Fees Collections:
                </p>
              </div>
              <div className="flex  items-center">
                <p className="border-4 rounded-full border-[#708238] "></p>
                <p className="text-sm font-medium text-gray-600 mx-1 dark:text-slate-300 ">
                  Outstanding Fees:
                </p>
              </div>
            </div>

            <canvas id="myChartAtt"></canvas>
          </div>
          <div className="flex flex-col justify-between items-center p-4 w-1/2 shadow-[0_4px_8px_rgb(0,0,0,0.1)]">
            <div className="flex justify-between items-center w-full">
              <p className="text-sm font-medium ml-2 text-gray-600 dark:text-slate-300 ">
                Attendance Summary
              </p>
              <BsThreeDots className="text-gray-500 dark:text-slate-300 " />
            </div>
            <div className="flex justify-between my-4 w-full">
              <div className="flex  items-center">
                <p className="border-4 rounded-full border-tertiary-color "></p>
                <p className="text-sm font-medium ml-2 text-gray-600 dark:text-slate-300 ">
                  Total Collections:
                </p>
              </div>
              <div className="flex  items-center">
                <p className="border-4 rounded-full border-[#DAA520] "></p>
                <p className="text-sm font-medium text-gray-600 mx-1 dark:text-slate-300 ">
                  Fees Collections:
                </p>
              </div>
              <div className="flex  items-center">
                <p className="border-4 rounded-full border-[#708238] "></p>
                <p className="text-sm font-medium text-gray-600 mx-1 dark:text-slate-300 ">
                  Outstanding Fees:
                </p>
              </div>
            </div>

            <canvas id="myChartAtt2"></canvas>
          </div>
        </div>

        <div className="flex flex-col justify-between items-center p-4 w-full shadow-[0_4px_8px_rgb(0,0,0,0.1)] dark:shadow-slate-500">
          <div className="flex justify-between items-center w-full">
            <p className="flex justify-between items-center text-primary-color dark:text-white font-semibold">
              Recently registered users
            </p>
            <BsThreeDots className="text-gray-500 dark:text-slate-300 " />
          </div>
          <div className="w-full flex justify-between items-center ">
            <table className="table w-full mt-5 ">
              {/* head */}
              <thead className="shadow-[0_4px_8px_rgb(0,0,0,0.1)] dark:shadow-slate-500 p-5 text-primary-color dark:text-white">
                <tr>
                  <td className="text-lg font-semibold  p-5 ">Role</td>
                  <td className="text-lg font-semibold  p-5">ID</td>
                  <td className="text-lg font-semibold  p-5">Email</td>
                  <td className="text-lg font-semibold  p-5">Number</td>
                </tr>
              </thead>
              <tbody className="dark:text-white ">
                {/* row 1 */}
                <tr className="shadow-[0_4px_8px_rgb(0,0,0,0.1)] dark:shadow-slate-500 p-5">
                  <td className="p-5 shadow-[0_4px_8px_rgb(0,0,0,0.1)] dark:shadow-slate-500 ">
                    Admin
                  </td>
                  <td className="p-5 shadow-[0_4px_8px_rgb(0,0,0,0.1)]  dark:shadow-slate-500">
                    AET154-5671
                  </td>
                  <td className="p-5 shadow-[0_4px_8px_rgb(0,0,0,0.1)] dark:shadow-slate-500">
                    activedgetecnologies@gmail
                  </td>
                  <td className="p-5 shadow-[0_4px_8px_rgb(0,0,0,0.1)] dark:shadow-slate-500">
                    5
                  </td>
                </tr>
                {/* row 2 */}
                <tr className="shadow-[0_4px_8px_rgb(0,0,0,0.1)] p-5 dark:shadow-slate-500">
                  <td className="p-5 shadow-[0_4px_8px_rgb(0,0,0,0.1)] dark:shadow-slate-500 ">
                    Student
                  </td>
                  <td className="p-5 shadow-[0_4px_8px_rgb(0,0,0,0.1)] dark:shadow-slate-500">
                    AET154-5671
                  </td>
                  <td className="p-5 shadow-[0_4px_8px_rgb(0,0,0,0.1)] dark:shadow-slate-500">
                    activedgetecnologies@gmail
                  </td>
                  <td className="p-5 shadow-[0_4px_8px_rgb(0,0,0,0.1)] dark:shadow-slate-500">
                    404
                  </td>
                </tr>
                {/* row 3 */}
                <tr className="shadow-[0_4px_8px_rgb(0,0,0,0.1)] p-5 dark:shadow-slate-500">
                  <td className="p-5 shadow-[0_4px_8px_rgb(0,0,0,0.1)] ">
                    Parent
                  </td>
                  <td className="p-5 shadow-[0_4px_8px_rgb(0,0,0,0.1)] dark:shadow-slate-500">
                    AET154-5671
                  </td>
                  <td className="p-5 shadow-[0_4px_8px_rgb(0,0,0,0.1)] dark:shadow-slate-500">
                    activedgetecnologies@gmail
                  </td>
                  <td className="p-5 shadow-[0_4px_8px_rgb(0,0,0,0.1)] dark:shadow-slate-500">
                    150
                  </td>
                </tr>
                {/* row 4 */}
                <tr className="p-5">
                  <td className="p-5 shadow-[0_4px_8px_rgb(0,0,0,0.1)] dark:shadow-slate-500">
                    Teacher
                  </td>

                  <td className="p-5 shadow-[0_4px_8px_rgb(0,0,0,0.1)]  dark:shadow-slate-500">
                    AET154-5671
                  </td>
                  <td className="p-5 shadow-[0_4px_8px_rgb(0,0,0,0.1)] dark:shadow-slate-500">
                    activedgetecnologies@gmail
                  </td>
                  <td className="p-5 shadow-[0_4px_8px_rgb(0,0,0,0.1)] dark:shadow-slate-500">
                    50
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
