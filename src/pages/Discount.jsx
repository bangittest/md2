import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const endTime = new Date("September 30, 2023 12:00:00").getTime(); // Thay đổi thành ngày giờ đích của bạn

    const intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeDifference = endTime - currentTime;

      if (timeDifference > 0) {
        const seconds = Math.floor((timeDifference / 1000) % 60);
        const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
        const hours = Math.floor((timeDifference / 1000 / 60 / 60) % 24);
        const days = Math.floor(timeDifference / 1000 / 60 / 60 / 24);

        setCountdown({
          days: days.toString().padStart(2, "0"),
          hours: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0"),
        });
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="discount">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 p-0">
            <div className="discount__pic">
              <img src="img/discount.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <div className="discount__text">
              <div className="discount__text__title">
                <span>Discount</span>
                <h2>Summer 2023</h2>
                <h5>
                  <span>Sale</span> 50%
                </h5>
              </div>

              <div className="discount__countdown">
                <div className="countdown__item">
                  <span>{countdown.days}</span>
                  <p>Days</p>
                </div>
                <div className="countdown__item">
                  <span>{countdown.hours}</span>
                  <p>Hours</p>
                </div>
                <div className="countdown__item">
                  <span>{countdown.minutes}</span>
                  <p>Minutes</p>
                </div>
                <div className="countdown__item">
                  <span>{countdown.seconds}</span>
                  <p>Seconds</p>
                </div>
              </div>

              <Link to="/list-product">Shop now</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
