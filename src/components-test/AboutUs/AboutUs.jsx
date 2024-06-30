import React from "react";
import { DivWrapper } from "../DivWrapper/DivWrapper";
import "./style.css";

export const AboutUs = () => {
  return (
    <div className="screen">
      <img className="img-2" alt="Img" src="image-2.png" />
      <div className="view">
        <div className="div">
          <div className="frame">
            <img className="group-2" alt="Group" src="group-3.png" />
            <img className="group-3" alt="Group" src="group.png" />
            <img className="group-4" alt="Group" src="image.png" />
            <img className="group-5" alt="Group" src="group-2.png" />
            <img className="group-6" alt="Group" src="group-4.png" />
          </div>
          <img className="left" alt="Left" src="left.svg" />
          <img className="right" alt="Right" src="right.svg" />
        </div>
        <div className="text-wrapper-2">Наши клиенты</div>
      </div>
      <div className="view-2">
        <div className="group-7">
          <DivWrapper className="component-80" />
          <DivWrapper
            className="component-80-instance"
            text="Будем лаконичны — мы довольны совместными результатами с компанией Struga.pro"
            text1="Алексей Ловков"
            text2="Владелец “Сыровар Ловков”"
          />
          <DivWrapper
            className="design-component-instance-node"
            text="Будем лаконичны — мы довольны совместными результатами с компанией Struga.pro и собираемся дальше продолжить нашу продуктивную работу."
            text1="Сергей Сергеев"
            text2="Владелец “ELIO PIZZA”"
          />
          <div className="vector-wrapper">
            <img className="vector" alt="Vector" src="image.svg" />
          </div>
          <div className="img-wrapper">
            <img className="vector-2" alt="Vector" src="vector-2.svg" />
          </div>
        </div>
        <div className="text-wrapper-2">Отзывы</div>
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <div className="text-wrapper-3">ОСТАВИТЬ ОТЗЫВ</div>
          </div>
        </div>
      </div>
    </div>
  );
};
