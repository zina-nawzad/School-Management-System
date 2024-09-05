import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoInvertMode } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import Diamond from "../Image/admin.jpg";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiStudentFill } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";

import Chart from "chart.js/auto";

const Dashboard = () => {
  const chartRef = useRef(null);
  const chartRef2 = useRef(null);
  const chartRef3 = useRef(null);
  const toggleTheme = () => {
    window.TogglderDarkModeLightMode();
  };

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
    <div className="flex flex-col">
      {/* Navbar */}
      <div className="flex justify-between items-center">
        <div className="text-2xl font-semibold text-primary-color cursor-pointer">
          <h1>Dashboard</h1>
        </div>

        <div className="flex flex-row justify-end items-center gap-10">
          <div className="flex flex-row justify-around items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-bell"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
            </svg>
            <div className="flex justify-center items-center w-5 h-5 bg-yellow-600 text-white rounded-md absolute -mt-6 -mr-4">
              4
            </div>
          </div>
          <div className="flex flex-row justify-around items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-chat-left-text"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
            </svg>
            <div className="flex justify-center items-center w-5 h-5 bg-yellow-600 text-white rounded-md absolute -mt-6 -mr-4">
              4
            </div>
          </div>
          <details>
            <summary className="flex flex-row justify-between items-center gap-3 w-full font-semibold cursor-pointer">
              <div className="flex flex-row gap-3 items-center text-[#232152] font-semibold">
                <img
                  src={Diamond}
                  className="w-12 h-12 rounded-full"
                  alt="Admin"
                />
                Admin Admin
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down right-0 text-[#232152]"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </summary>
          </details>
        </div>
      </div>

      <div className="flex flex-col justify-around items-center gap-y-20 w-2/3">
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
              <p className="flex justify-between items-center text-primary-color font-semibold">
                Attendance Summary
              </p>
              <BsThreeDots className="text-gray-500" />
            </div>
            <div className="flex justify-between my-4 w-full">
              <div className="flex  items-center">
                <p className="border-4 rounded-full border-tertiary-color "></p>
                <p className="text-sm font-medium text-gray-600 mx-1">
                  {" "}
                  Total Collections
                </p>
              </div>
              <div className="flex  items-center">
                <p className="border-4 rounded-full border-[#DAA520] "></p>
                <p className="text-sm font-medium text-gray-600 mx-1">
                  Fees Collections:
                </p>
              </div>
              <div className="flex  items-center">
                <p className="border-4 rounded-full border-[#708238] "></p>
                <p className="text-sm font-medium text-gray-600 mx-1">
                  Outstanding Fees:
                </p>
              </div>
            </div>

            <canvas id="myChartAtt"></canvas>
          </div>
          <div className="flex flex-col justify-between items-center p-4 w-1/2 shadow-[0_4px_8px_rgb(0,0,0,0.1)]">
            <div className="flex justify-between items-center w-full">
              <p className="text-sm font-medium ml-2 text-gray-600">
                Attendance Summary
              </p>
              <BsThreeDots className="text-gray-500" />
            </div>
            <div className="flex justify-between my-4 w-full">
              <div className="flex  items-center">
                <p className="border-4 rounded-full border-tertiary-color "></p>
                <p className="text-sm font-medium ml-2 text-gray-600">
                  Total Collections:
                </p>
              </div>
              <div className="flex  items-center">
                <p className="border-4 rounded-full border-[#DAA520] "></p>
                <p className="text-sm font-medium text-gray-600 mx-1">
                  Fees Collections:
                </p>
              </div>
              <div className="flex  items-center">
                <p className="border-4 rounded-full border-[#708238] "></p>
                <p className="text-sm font-medium text-gray-600 mx-1">
                  Outstanding Fees:
                </p>
              </div>
            </div>

            <canvas id="myChartAtt2"></canvas>
          </div>
        </div>

        <div className="flex flex-col justify-between items-center p-4 w-full shadow-[0_4px_8px_rgb(0,0,0,0.1)]">
          <div className="flex justify-between items-center w-full">
            <p className="flex justify-between items-center text-primary-color font-semibold">
              Recently registered users
            </p>
            <BsThreeDots className="text-gray-500" />
          </div>
          <div className="w-full flex justify-between items-center ">
            <table className="table w-full mt-5 ">
              {/* head */}
              <thead className="shadow-[0_4px_8px_rgb(0,0,0,0.1)] p-5">
                <tr>
                  <td className="text-lg font-semibold text-primary-color p-5 ">
                    Role
                  </td>
                  <td className="text-lg font-semibold text-primary-color p-5">
                    ID
                  </td>
                  <td className="text-lg font-semibold text-primary-color p-5">
                    Email
                  </td>
                  <td className="text-lg font-semibold text-primary-color p-5">
                    Number
                  </td>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="shadow-[0_4px_8px_rgb(0,0,0,0.1)] p-5">
                  <td className="p-5 shadow-[0_4px_8px_rgb(0,0,0,0.1)] ">
                    Admin
                  </td>
                  <td className="p-5 shadow-[0_4px_8px_rgb(0,0,0,0.1)] ">
                    AET154-5671
                  </td>
                  <td className="p-5 shadow-[0_4px_8px_rgb(0,0,0,0.1)] ">
                    activedgetecnologies@gmail
                  </td>
                  <td className="p-5 shadow-[0_4px_8px_rgb(0,0,0,0.1)] ">5</td>
                </tr>
                {/* row 2 */}
                <tr className="shadow-[0_4px_8px_rgb(0,0,0,0.1)] p-5">
                  <td className="p-5 shadow-[0_4px_8px_rgb(0,0,0,0.1)] ">
                    Student
                  </td>
                  <td className="p-5 shadow-[0_4px_8px_rgb(0,0,0,0.1)] ">
                    AET154-5671
                  </td>
                  <td className="p-5 shadow-[0_4px_8px_rgb(0,0,0,0.1)] ">
                    activedgetecnologies@gmail
                  </td>
                  <td className="p-5 shadow-[0_4px_8px_rgb(0,0,0,0.1)] ">
                    404
                  </td>
                </tr>
                {/* row 3 */}
                <tr className="shadow-[0_4px_8px_rgb(0,0,0,0.1)] p-5">
                  <td className="p-5 shadow-[0_4px_8px_rgb(0,0,0,0.1)] ">
                    Parent
                  </td>
                  <td className="p-5 shadow-[0_4px_8px_rgb(0,0,0,0.1)] ">
                    AET154-5671
                  </td>
                  <td className="p-5 shadow-[0_4px_8px_rgb(0,0,0,0.1)] ">
                    activedgetecnologies@gmail
                  </td>
                  <td className="p-5 shadow-[0_4px_8px_rgb(0,0,0,0.1)] ">
                    150
                  </td>
                </tr>
                {/* row 4 */}
                <tr className="p-5">
                  <td className="p-5 shadow-[0_4px_8px_rgb(0,0,0,0.1)] ">
                    Teacher
                  </td>

                  <td className="p-5 shadow-[0_4px_8px_rgb(0,0,0,0.1)]  ">
                    AET154-5671
                  </td>
                  <td className="p-5 shadow-[0_4px_8px_rgb(0,0,0,0.1)] ">
                    activedgetecnologies@gmail
                  </td>
                  <td className="p-5 shadow-[0_4px_8px_rgb(0,0,0,0.1)] ">50</td>
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
