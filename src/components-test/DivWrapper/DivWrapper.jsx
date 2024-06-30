import PropTypes from "prop-types";
import React from "react";
import "./div-wrapper.css";

export const DivWrapper = ({
  className,
  textReview = "Будем лаконичны — мы довольны совместными результатами с компанией Struga.pro и собираемся дальше продолжить нашу продуктивную работу.",
  nameReviewer = "Иванов Иван",
  statusReviewer = "Директор Music Hall",
}) => {
  return (
    <div className={`div-wrapper ${className}`}>
      <p className="struga-pro">{textReview}</p>
      <div className="star-1" />
      <div className="star-2" />
      <div className="star-3" />
      <div className="star-4" />
      <div className="star-5" />
      <div className="ivan-ivanov" />
      <div className="text-wrapper">{nameReviewer}</div>
      <div className="music-hall">{statusReviewer}</div>
    </div>
  );
};

DivWrapper.propTypes = {
  textReview: PropTypes.string,
  nameReviewer: PropTypes.string,
  statusReviewer: PropTypes.string,
};
