import React from "react";
import "./Stats.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="stats-container" ref={ref}>
      <h2 className="stats-heading">OUR HOSPITAL STATS</h2>
      <div className="stats-cards">
        <div className="stat-card">
          <h3 className="stat-number">
            {inView && (
              <CountUp
                start={0}
                end={156972}
                duration={10}
                separator=","
                suffix="+"
              />
            )}
          </h3>
          <p className="stat-label">Patients Treated</p>
        </div>
        <div className="stat-card">
          <h3 className="stat-number">
            {inView && <CountUp start={0} end={107} duration={10} suffix="+" />}
          </h3>
          <p className="stat-label">Doctors Associated</p>
        </div>
        <div className="stat-card">
          <h3 className="stat-number">
            {inView && <CountUp start={0} end={8} duration={10} suffix="+" />}
          </h3>
          <p className="stat-label">Years of Experience</p>
        </div>
        <div className="stat-card">
          <h3 className="stat-number">
            {inView && <CountUp start={0} end={100} duration={10} suffix="+" />}
          </h3>
          <p className="stat-label">Dedicated Staff</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
