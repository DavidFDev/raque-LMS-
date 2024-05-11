import { useEffect, useState } from "react";
import { IoLogInOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const CountdownArea = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        let day = 284;

        hours >= padZero(0) ? day - 1 : day = 284;

        const dayString = JSON.stringify(day)

        localStorage.setItem("dayCount", dayString);

        const stringDay = localStorage.getItem("dayCount")

        const realDate = JSON.parse(stringDay);

        // hours = hours % 12 || 12;

        return `
            <div id="days">${hours >= padZero(0) && realDate - 1} <span>Days</span> <FaChevronDown className="chevron-icon"/>
            </div>

            <div id="hours">${padZero(hours)}<span>Hours</span> <FaChevronDown className="chevron-icon"/>
            </div>

            <div id="minutes">${padZero(minutes)} <span>Minutes</span> <FaChevronDown className="chevron-icon"/>
            </div>

            <div id="seconds">${padZero(seconds)} <span>Seconds</span> <FaChevronDown className="chevron-icon"/>
            </div>
        `
    }

    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }

  return (
    <section className="countdown-area ptb-100 bg-deepred">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="countdown-content text-center text-lg-start">
                        <h2>Hurry Up! Join Laravel Development Webinar in Dubai</h2>
                        <Link to="/" className="sign-up-btn d-inline-block" style={{ borderBottom: "2px dotted #fff" }}>Sign Up <IoLogInOutline/></Link>
                    </div> 
                </div>

                <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                    <div className="countdown-timer text-center">
                        <div id="timer" dangerouslySetInnerHTML={{__html: formatTime()}}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CountdownArea