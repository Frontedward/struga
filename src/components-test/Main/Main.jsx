import React from "react";
import { DivWrapper } from "../DivWrapper/DivWrapper";
import { AboutUs } from '../AboutUs/AboutUs';
import "./style.css";

const Main = () => {
  return (
    <div className="main">
      <div className="div">
        {/* Header */}
        <div className="view-13">
          <div className="group-14">
            <div className="overlap-4">
              <p className="c">
                Cтиль и уют деревянных аксессуаров
                <br />в ваш дом, ресторан или кафе
              </p>
              <div className="overlap-5">
                <p className="text-wrapper-12">
                  Изделия из дерева на заказ
                  <br />с доставкой по России
                </p>
                <div className="group-15">
                  <div className="overlap-6">
                    <div className="group-16" />
                    <div className="linked-path-group">
                      <div className="overlap-7">
                        <div className="overlap-8">
                          <div className="overlap-9">
                            <div className="copy">к</div>
                            <div className="copy-2">р</div>
                            <div className="copy-3">а</div>
                            <div className="copy-4">т</div>
                            <div className="copy-5">к</div>
                            <div className="copy-6">о</div>
                            <div className="copy-7">е</div>
                          </div>
                          <div className="copy-8">{""}</div>
                        </div>
                        <div className="copy-9">в</div>
                      </div>
                      <div className="copy-10">и</div>
                      <div className="overlap-10">
                        <div className="copy-11">д</div>
                        <div className="overlap-11">
                          <div className="copy-12">е</div>
                          <div className="overlap-group-4">
                            <div className="copy-13">о</div>
                            <div className="copy-14">{""}</div>
                            <div className="copy-15">о</div>
                            <div className="copy-16">{""}</div>
                            <div className="copy-17">н</div>
                            <div className="copy-18">а</div>
                            <div className="copy-19">ш</div>
                            <div className="copy-20">е</div>
                            <div className="copy-21">й</div>
                            <div className="copy-22">{""}</div>
                            <div className="copy-23">м</div>
                            <div className="copy-24">а</div>
                            <div className="copy-25">с</div>
                          </div>
                          <div className="copy-26">т</div>
                        </div>
                        <div className="copy-27">е</div>
                      </div>
                      <div className="copy-28">р</div>
                      <div className="overlap-12">
                        <div className="copy-29">с</div>
                        <div className="overlap-13">
                          <div className="copy-30">к</div>
                          <div className="overlap-14">
                            <div className="copy-31">о</div>
                            <div className="copy-32">й</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="view-14">
              <div className="overlap-group-2">
                <button className="text-wrapper-10">ПЕРЕЙТИ В КАТАЛОГ</button>
              </div>
            </div>
          </div>
          <div className="group-17">
            <div className="overlap-15">
              <div className="rectangle" />
              <div className="navbar">
                <div className="text-wrapper-13">О НАС</div>
                <div className="ellipse" />
                <div className="text-wrapper-14">КАТАЛОГ</div>
                <div className="ellipse-2" />
                <div className="text-wrapper-15">ОТЗЫВЫ</div>
                <div className="text-wrapper-16">ОПЛАТА И ДОСТАВКА</div>
                <div className="ellipse-3" />
                <div className="text-wrapper-17">КОНТАКТЫ</div>
              </div>
              <div className="group-18" />
            </div>
          </div>
          <div className="frame-2">
            <div className="element">
              <div className="text-wrapper-18">14</div>
              <div className="text-wrapper-19">
                ЛЕТ
                <br />
                ОПЫТА
              </div>
            </div>
            <div className="element">
              <div className="text-wrapper-18">12 000</div>
              <div className="text-wrapper-19">
                ИЗДЕЛИЙ
                <br />
                ИЗГОТОВЛЕНО
              </div>
            </div>
            <div className="element">
              <div className="text-wrapper-18">700+</div>
              <div className="text-wrapper-19">
                ДОВОЛЬНЫХ
                <br />
                КЛИЕНТОВ
              </div>
            </div>
            <div className="element-2">
              <div className="text-wrapper-18">4.95</div>
              <div className="text-wrapper-19">
                СРЕДНИЙ
                <br />
                РЕЙТИНГ ЗАКАЗОВ
              </div>
            </div>
          </div>
        </div>

        {/* Catalog */}
        <div className="view-10">
          <div className="text-wrapper-2">Каталог</div>
          <div className="view-12">
            <div className="group-13" />
            <div className="mask-group" />
            <div className="mask-group-2" />
            <div className="mask-group-3" />
            <div className="mask-group-4" />
            <div className="mask-group-5" />
            <div className="mask-group-6" />
          </div>
          <p className="text-wrapper-8">
            Мы любим дерево, для нас важны детали, ценим профессиональный подход. Наши изделия изготовлены из отборной
            древесины и обработаны натуральными материалами. Мы гарантируем долговечность произведений мастерской.
          </p>
          <div className="view-11">
            <div className="overlap-group-3">
              <button className="text-wrapper-11">СМОТРЕТЬ ВЕСЬ КАТАЛОГ</button>
            </div>
          </div>
        </div>

        {/* About us */}
        <div className="view-5">
          {/* About - clients */}
          <div className="aboutus-foto" />
          <div className="view-6">
            <div className="text-wrapper-9">Наши клиенты</div>
            <div className="view-7">
              <div className="frame">
                <div className="group-7" />
                <div className="group-8" />
                <div className="group-9" />
                <div className="group-10" />
                <div className="group-11" />
              </div>
              <div className="left" />
              <div className="right" />
            </div>
          </div>

          {/* About - reviews */}
          <div className="view-8">
            <div className="group-12">
              <DivWrapper className="component-331" />
              <DivWrapper
                className="component-331-instance"
                textReview="Будем лаконичны — мы довольны совместными результатами с компанией Struga.pro"
                nameReviewer="Алексей Ловков"
                statusReviewer="Владелец “Сыровар Ловков”"
              />
              <DivWrapper
                className="design-component-instance-node"
                textReview="Будем лаконичны — мы довольны совместными результатами с компанией Struga.pro и собираемся дальше продолжить нашу продуктивную работу."
                nameReviewer="Сергей Сергеев"
                statusReviewer="Владелец “ELIO PIZZA”"
              />
              <div className="vector-left" />
              <div className="vector-right" />
            </div>
            <div className="text-wrapper-9">Отзывы</div>
            <div className="view-9">
              <div className="overlap-group-2">
                <button className="text-wrapper-10">ОСТАВИТЬ ОТЗЫВ</button>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="view-4">
          <div className="text-wrapper-2">Галерея работ</div>
          <p className="text-wrapper-8">
            Наши изделия изготовлены из отборной, хорошо высушенной древесины твердых пород, тщательно отшлифованы и
            пропитаны натуральными маслами. К каждому заказу мы подходим индивидуально, поэтому готовы воплотить в жизнь
            даже самые смелые идеи!
          </p>
          <div className="overlap-3">
            <div className="group-5">
              <div className="image-3" />
              <div className="image-4" />
              <div className="image-5" />
              <div className="image-6" />
              <div className="image-7" />
              <div className="image-8" />
              <div className="image-9" />
              <div className="subtract-wrapper">
                <div className="subtract" />
              </div>
              <div className="image-10" />
            </div>
            <div className="group-6" />
          </div>
        </div>

        {/* Feedback form */}
        <div className="view">
          <p className="p">
            Мы часто экспериментируем и увлекаемся новыми идеями - проваливаемся в творчество. Увидев что-то где-то -
            загораемся сотворить нечто подобное - только по своему. К каждому заказу мы подходим индивидуально, поэтому
            готовы воплотить в жизнь даже самые смелые идеи!
          </p>
          <div className="text-wrapper-2">Связаться с нами</div>
          <div className="image" />
          <div className="group-2">
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <input type="text" className="text-wrapper-3" placeholder="Ваше имя *" />
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-group">
                <input type="text" className="text-wrapper-3" placeholder="Номер телефона *" />
              </div>
            </div>
            <div className="view-2">
              <div className="overlap">
                <input type="text" className="text-wrapper-4" placeholder="Сообщение" />
              </div>
            </div>
            <div className="group-3">
              {/* <div className="group-4" /> */}
              <input type="checkbox" className="group-4" />
              <p className="text-wrapper-5">Согласен на обработку персональных данных</p>
            </div>
            <div className="view-3">
              <div className="overlap-2">
                <button className="text-wrapper-6">ОТПРАВИТЬ</button>
              </div>
            </div>
          </div>
          <div className="text-wrapper-7">+7 (917) 449-01-30</div>
          <div className="image-2" />
        </div>

        {/* Footer */}
        <div className="overlap-16">
          <div className="view-15">
            <div className="overlap-17">
              <div className="frame-3">
                <div className="text-wrapper-20">О нашей мастерской</div>
                <div className="text-wrapper-21">Каталог товаров</div>
                <div className="text-wrapper-21">Отзывы</div>
                <div className="text-wrapper-21">Галерея наших работ</div>
                <div className="text-wrapper-21">Оплата и доставка</div>
                <div className="text-wrapper-21">Контакты</div>
              </div>
              <div className="frame-4">
                <div className="text-wrapper-20">Мебель и интерьер</div>
                <div className="text-wrapper-21">Менажницы-орешницы</div>
                <div className="text-wrapper-21">Доски сервировочные</div>
                <div className="text-wrapper-21">Тарелки и блюда</div>
                <div className="text-wrapper-21">Доски разделочные</div>
                <div className="text-wrapper-22">Индивидуальные изделия для ресторанов</div>
              </div>
              <div className="text-wrapper-23">КАТАЛОГ</div>
              <div className="text-wrapper-24">НАВИГАЦИЯ</div>
              <div className="text-wrapper-25">КОНТАКТЫ</div>
              <div className="image-11" />
              <p className="text-wrapper-26">
                Struga.pro — творческая столярная мастерская. Работаем в Уфе, доставляем по всей России.
              </p>
              <div className="group-19">
                <div className="mask-group-7" />
                <div className="image-12" />
                <div className="group-20" />
              </div>
              <div className="frame-5">
                <div className="text-wrapper-27">+7 (917) 449-01-30</div>
                <div className="text-wrapper-28">+7 (927) 082-18-49</div>
                <div className="text-wrapper-28">struga.pro@yandex.ru</div>
              </div>
              <div className="image-13" />
            </div>
          </div>
          <div className="text-wrapper-29">struga.pro 2024</div>
          <div className="text-wrapper-30">Политика конфиденциальности</div>
        </div>
      </div>
    </div>
  );
};

export default Main;