import React from "react";

const Categories = ({ fetchGloves, fetchMasks, fetchBeanies }) => {
  const handleFetchGloves = () => {
    fetchGloves();
  };
  const handleFetchMasks = () => {
    fetchMasks();
  };
  const handleFetchBeanies = () => {
    fetchBeanies();
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "50%",
        margin: "25px",
      }}
    >
      <button className="btnCategory" onClick={handleFetchGloves}>
        Gloves
      </button>
      <button className="btnCategory" onClick={handleFetchMasks}>
        Facemasks
      </button>
      <button className="btnCategory" onClick={handleFetchBeanies}>
        Beanies
      </button>
    </div>
  );
};

export default Categories;
