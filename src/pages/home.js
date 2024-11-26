import React, { useState } from "react";
import "./Home.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Home = () => {
  const [fromDate, setfromDate] = useState(new Date());
  const [toDate, settoDate] = useState(new Date());

  const [result, setResult] = useState(null);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [dayofWeek, setDayofWeek] = useState(null);

  const [nDays, setNDays] = useState(0);

  const [calculatedDate, setCalculatedDate] = useState(null);

  const [calculatedDay, setCalculatedDay] = useState(null);
  const [activeSection, setactiveSection] = useState(null);

  const calculateTimeDifference = () => {
    const diffTime = Math.abs(toDate - fromDate);

    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const diffYears = Math.floor(diffDays / 365);

    const remainingDaysAfterYears = diffDays - diffYears * 365;
    const diffMonths = Math.floor(remainingDaysAfterYears / 30);
    const diffRemainingDays = remainingDaysAfterYears - diffMonths * 30;

    setResult({
      years: diffYears,
      months: diffMonths,
      days: diffRemainingDays,
      onlydays: diffDays,
    });
  };

  const findDayofWeek = () => {
    const day = selectedDate.toLocaleString("en-US", { weekday: "long" });

    setDayofWeek(day);
  };

  const calculatedDateAfterNDays = () => {
    const newDate = new Date();

    newDate.setDate(newDate.getDate() + parseInt(nDays));

    const day = newDate.toLocaleString("en-US", { weekday: "long" });

    const date = newDate.toLocaleDateString("en-US");

    setCalculatedDate(date);
    setCalculatedDay(day);
  };

  return (
    <div className="home-container">
      <h1 className="title">Welcome to time calculator</h1>

      <div className="types-container">
        <div className="content-container">
          <div className="image-container">
            <img src="/sheona.jpeg" alt="Sheona" />
          </div>
          <div className="buttons-and-active-container">
            <div className="button-group">
              <button onClick={() => setactiveSection("dateDifference")}>
                Calculate Date Difference
              </button>
              <button onClick={() => setactiveSection("dayofweek")}>
                Find Day of Week
              </button>
              <button onClick={() => setactiveSection("nDaysCalculation")}>
                Calculate Date After N Days
              </button>
            </div>

            {activeSection === "dateDifference" && (
              <div className="active-content">
                <div className="date-picker-wrapper">
                  <div className="date-section">
                    <h2>From</h2>
                    <DatePicker
                      selected={fromDate}
                      onChange={(date) => setfromDate(date)}
                      dateFormat="MM/dd/yyyy"
                    />
                  </div>
                  <div className="date-selection">
                    <h2>To</h2>
                    <DatePicker
                      selected={toDate}
                      onChange={(date) => settoDate(date)}
                      dateFormat="MM/dd/yyyy"
                    />
                  </div>
                </div>
                <button
                  className="count-button"
                  onClick={calculateTimeDifference}
                >
                  Calculate diffTime
                </button>
                {result && (
                  <div className="day-of-week">
                    <h3>Results</h3>
                    <p>
                      {result.years} Years, {result.months} Months,{" "}
                      {result.days} Days
                    </p>
                    <h3>Days Count</h3>
                    <p> {result.onlydays} Days</p>
                  </div>
                )}
              </div>
            )}
            {activeSection === "dayofweek" && (
              <div className="active-content">
                <h2>Find day of the week</h2>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="MM/dd/yyyy"
                />
                <button className="find-day-button" onClick={findDayofWeek}>
                  Find Day
                </button>
                {dayofWeek && (
                  <div className="day-of-week">
                    <h3>The day of the week is: {dayofWeek}</h3>
                  </div>
                )}
              </div>
            )}
            {activeSection === "nDaysCalculation" && (
              <div className="active-content">
                <h2>Calculate Date After/Before N Days</h2>
                <input
                  type="number"
                  value={nDays}
                  onChange={(e) => setNDays(e.target.value)}
                  placeholder="Enter number of days"
                />
                <button
                  className="find-day-button"
                  onClick={calculatedDateAfterNDays}
                >
                  Calculate Date
                </button>
                {calculatedDate && (
                  <div className="calculate-date">
                    <h3>
                      {calculatedDay}, {calculatedDate}
                    </h3>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
