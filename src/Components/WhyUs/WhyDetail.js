import React, { useState } from "react";

const WhyDetail = (props) => {
  const { whyCause, whyDescription, whyImage, whyLogo } = props.whyUS;
  const [isCollapsed, setIsCollapsed] = useState(true);
  // const text = whyDescription.substring(0, 50)
  return (
    <div className="col-md-4">
      <div className="row">
        <div className="col-md-12 mt-3">
          {whyImage && (
            <img
              className="img-fluid p-2"
              src={require(`../../Image/${whyImage}`)}
              alt="d"
            />
          )}
        </div>
        <div className="col-md-12 px-4">
          <h5>
            {whyLogo && (
              <img
                style={{ width: "32px" }}
                className="img-fluid mr-2 mt-2"
                src={require(`../../Image/${whyLogo}`)}
                alt="d"
              />
            )}{" "}
            {whyCause}
          </h5>
          <p className="mt-0 mb-5" style={{ marginLeft: "40px" }}>
            {isCollapsed ? (
              <React.Fragment>
                {whyDescription.substring(0, 50)}...
                <button
                  onClick={() => setIsCollapsed(false)}
                  style={{ color: "#F91962" }}
                  className="btn see-button"
                >
                  see more <i className="fas fa-arrow-circle-right"></i>
                </button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {whyDescription}
                <button
                  onClick={() => setIsCollapsed(true)}
                  style={{ color: "#F91962" }}
                  className="btn see-button"
                >
                   <i className="fas fa-arrow-circle-left"></i> see less
                </button>
              </React.Fragment>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyDetail;
