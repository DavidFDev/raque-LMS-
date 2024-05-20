import { useEffect, useState } from "react";
import { IoLogInOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const CountdownArea = () => {
  const [time, setTime] = useState(new Date());
  const [days, setDays] = useState(() => {
    // Initialize days from localStorage or default to 284
    const savedDays = localStorage.getItem("dayCount");
    return savedDays ? JSON.parse(savedDays) : 284;
  });
  const [lastChecked, setLastChecked] = useState(() => {
    // Initialize lastChecked from localStorage or default to current time
    const savedLastChecked = localStorage.getItem("lastChecked");
    return savedLastChecked ? new Date(savedLastChecked) : new Date();
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setTime(now);

      // Calculate the difference in hours between now and the last checked time
      const timeDifference = now - new Date(lastChecked);
      const hoursDifference = timeDifference / (1000 * 60 * 60);

      if (hoursDifference >= 24) {
        // If 24 hours or more have passed, decrement the days
        setDays(prevDays => {
          const newDays = prevDays - 1;
          localStorage.setItem("dayCount", JSON.stringify(newDays));
          return newDays;
        });
        setLastChecked(now);
        localStorage.setItem("lastChecked", now.toISOString());
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [lastChecked]);

  function padZero(number) {
    return number < 10 ? "0" + number : number;
  }

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <section className="countdown-area ptb-100 bg-altlemon">
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
