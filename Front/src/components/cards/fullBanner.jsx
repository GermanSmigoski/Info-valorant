import React from "react";

const FullBanner = ({ showBanner, displayBanner }) => {
  return (
    <div className="full-banner">
      <div
        className={`selected-agent ${showBanner ? "animated-slideIn" : ""}`}
        key={displayBanner.uuid}
      >
        <img src={displayBanner.agentBanner} alt="" />
        <h2>{displayBanner.name}</h2>
      </div>
    </div>
  );
};

export default FullBanner;
