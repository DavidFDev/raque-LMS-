import { useEffect, useState } from "react";
import { IoLogInOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const CountdownArea = () => {
  const [time, setTime] = useState(new Date());
  const [days, setDays] = useState(284);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setTime(now);

      const hours = now.getHours();
      setDays(hours >= 0 ? days - 1 : 284);

      localStorage.setItem("dayCount", JSON.stringify(days));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [days]);

  function padZero(number) {
    return number < 10 ? "0" + number : number;
  }

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <section className="countdown-area ptb-100 bg-deepred">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="countdown-content text-center text-lg-start">
              <h2>Hurry Up! Join Laravel Development Webinar in Dubai</h2>
              <Link
                to="/"
                className="sign-up-btn d-inline-block"
                style={{ borderBottom: "2px dotted #fff" }}
              >
                Sign Up <IoLogInOutline />
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
            <div className="countdown-timer text-center">
              <div id="timer">
                <div id="days">
                  {days} <span>Days</span> <FaChevronDown className="chevron-icon" />
                </div>
                <div id="hours">
                  {padZero(hours)} <span>Hours</span> <FaChevronDown className="chevron-icon" />
                </div>
                <div id="minutes">
                  {padZero(minutes)} <span>Minutes</span> <FaChevronDown className="chevron-icon" />
                </div>
                <div id="seconds">
                  {padZero(seconds)} <span>Seconds</span> <FaChevronDown className="chevron-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownArea;
