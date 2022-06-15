import React from "react";
import sodaPepsi from "../../assets/pepsi.png";
import sodasevenUp from "../../assets/7up.png";
import sodaMirinda from "../../assets/mirinda.png";
import subwayLogo from "../../assets/subway.png";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import { Modal, Button } from "react-bootstrap";

import "./Subway.css";

const Subway = () => {

  // Getting Subway from LS
  useEffect(() => {
    const priceData = JSON.parse(localStorage.getItem('totalPrice'));
    const subwaysData = JSON.parse(localStorage.getItem('subways'));
    if (priceData) setTotalPrice(priceData);
    if (subwaysData) setSubways(subwaysData);
  }, []);

  // State Handling
  const [subways, setSubways] = useState(
    {
      lettuce: 0,
      tomato: 0,
      cheese: 0,
      chicken: 0,
      beef: 0,
      pepsi: 0,
      sevenUp: 0,
      mirinda: 0,
    }
  );
  const [totalPrice, setTotalPrice] = useState(0);

  // To set data in LS
  useEffect(() => {
    localStorage.setItem('subways', JSON.stringify(subways));
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
  }, [totalPrice, subways]);

  // Adding/Removing Function
  const addRemoveIngredient = (action, ingredient) => {
    let stateValue;
    let price;
    let finalPrice;

    // Switch Case For Each Ingredient
    switch (ingredient) {
      case "lettuce": {
        stateValue = subways.lettuce;
        finalPrice = totalPrice;
        price = 10;
        break;
      }
      case "tomato": {
        stateValue = subways.tomato;
        finalPrice = totalPrice;
        price = 20;
        break;
      }
      case "cheese": {
        stateValue = subways.cheese;
        finalPrice = totalPrice;
        price = 30;
        break;
      }
      case "chicken": {
        stateValue = subways.chicken;
        finalPrice = totalPrice;
        price = 50;
        break;
      }
      case "beef": {
        stateValue = subways.beef;
        finalPrice = totalPrice;
        price = 60;
        break;
      }

      case "pepsi": {
        stateValue = subways.pepsi;
        finalPrice = totalPrice;
        price = 200;
        break;
      }
      case "sevenUp": {
        stateValue = subways.sevenUp;
        finalPrice = totalPrice;
        price = 200;
        break;
      }
      case "mirinda": {
        stateValue = subways.mirinda;
        finalPrice = totalPrice;
        price = 200;
        break;
      }
      default:
        break;
    }
    if (action === "add") {
      if (stateValue < 1) {
        stateValue = stateValue + 1;
        finalPrice = finalPrice + price;
      }
    } else {
      stateValue = stateValue - 1;
      if (stateValue >= 0) {
        finalPrice = finalPrice - price;
      }
    }

    switch (ingredient) {
      case "lettuce": {
        setSubways({ ...subways, lettuce: stateValue >= 0 ? stateValue : 0 });
        break;
      }
      case "tomato": {
        setSubways({ ...subways, tomato: stateValue >= 0 ? stateValue : 0 });
        break;
      }
      case "cheese": {
        setSubways({ ...subways, cheese: stateValue >= 0 ? stateValue : 0 });
        break;
      }
      case "chicken": {
        setSubways({ ...subways, chicken: stateValue >= 0 ? stateValue : 0 });
        break;
      }
      case "beef": {
        setSubways({ ...subways, beef: stateValue >= 0 ? stateValue : 0 });
        break;
      }
      case "pepsi": {
        setSubways({ ...subways, pepsi: stateValue >= 0 ? stateValue : 0 });
        break;
      }
      case "sevenUp": {
        setSubways({ ...subways, sevenUp: stateValue >= 0 ? stateValue : 0 });
        break;
      }
      case "mirinda": {
        setSubways({ ...subways, mirinda: stateValue >= 0 ? stateValue : 0 });
        break;
      }
      default:
        break;
    }

    setTotalPrice(finalPrice);
  };



  // Graphical display of added ingredients
  // FUnction to add eithyer beef or chicken, one at a time
  const meatContent = (subway) => {
    if (subways.chicken < 0) {
      subway.push(<div className="chickenSide"></div>);
    }
    if (subways.beef < 0) {
      subway.push(<div className="beefSide"></div>);
    }
  };

  const subwayContent = () => {
    let subway = [];

    // Outputting the lettuce
    for (let i = 0; i < subways.lettuce; i++) {
      subway.push(<div className="lettuceSide"></div>);
    }
    // Outputting the tomato
    for (let i = 0; i < subways.tomato; i++) {
      subway.push(<div className="tomatoSide"></div>);
    }
    // Outputting the cheese
    for (let i = 0; i < subways.cheese; i++) {
      subway.push(<div className="cheeseSide"></div>);
    }
    // Outputting the meat
    for (let i = 0; i < subways.chicken; i++) {
      if (subways.beef === 0) {
        subway.push(<div className="chickenSide">{meatContent(subway)}</div>);
      }
    }
    for (let i = 0; i < subways.beef; i++) {
      if (subways.chicken === 0) {
        subway.push(<div className="beefSide">{meatContent()}</div>);
      }
    }
    if (subway.length === 0) subway.push();
    return subway;


  };


  //For Drink Display
  const drinkContent = () => {
    if (subways.pepsi > 0)
      return <img className="drinksImage" src={sodaPepsi} alt="pepsi"></img>;
    if (subways.sevenUp > 0)
      return <img className="drinksImage" src={sodasevenUp} alt="sevenup"></img>;
    if (subways.mirinda > 0)
      return <img className="drinksImage" src={sodaMirinda} alt="mirinda"></img>;
  };

  return (
    <>
      <nav className="navBar">
        <img className="subwayLogo" src={subwayLogo}></img>
        <h6 className="navText" >Create Your Own Subway</h6>
        <FontAwesomeIcon className="backIcon" icon={faLongArrowAltLeft} />
      </nav>

      {/* Rendering the entire page */}
      <div className="subwayContainer">
        {/* <h1 className="red">CREATE YOUR SUBWAY</h1> */}
        <div className="innerSubwayContainer">
          <div className="subwayDrinkContainer">
            <div className="subwayIngredients scrollbar">
              <div className="topSide"></div>
              {/* Rendering the subway */}
              {subwayContent()}
              <div className="bottomSide"></div>
            </div>
            <div className="drinkContainer">
              {/* Rendering the drink */}
              {drinkContent()}
            </div>
          </div>

          <div className="priceCounter">
            <strong>Total:</strong> Rs.{totalPrice}
          </div>

          <div className="form">
            <div className="ingredientsBlock">

              <div className="title">
                <p>Veggies</p>
              </div>

              <div className="ingredientsWithButtons">
                <p>LETTUCE</p>
                <div className="ingrBtns">
                  <button
                    className="ingrBtn"
                    onClick={() => addRemoveIngredient("add", "lettuce")}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <button
                    className="ingrBtn remove"
                    onClick={() => addRemoveIngredient("remove", "lettuce")}>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                </div>
              </div>

              <div className="ingredientsWithButtons">
                <p>TOMATO</p>
                <div className="ingrBtns">
                  <button
                    className="ingrBtn"
                    onClick={() => addRemoveIngredient("add", "tomato")}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <button
                    className="ingrBtn remove"
                    onClick={() => addRemoveIngredient("remove", "tomato")}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                </div>
              </div>

              <hr />

              <div className="ingredientsWithButtons">
                <p>CHEESE</p>
                <div className="ingrBtns">
                  <button
                    className="ingrBtn"
                    onClick={() => addRemoveIngredient("add", "cheese")}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <button
                    className="ingrBtn remove"
                    onClick={() => addRemoveIngredient("remove", "cheese")}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                </div>
              </div>

              <hr />

              <div className="title">
                <p>Meat</p>
              </div>

              <div
                className={
                  subways.beef === 0 ? `ingredientsWithButtons` : "none"

                }

              >
                <p>CHICKEN</p>
                <div className="ingrBtns">
                  <button
                    className="ingrBtn"
                    onClick={() => addRemoveIngredient("add", "chicken")}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <button
                    className="ingrBtn remove"
                    onClick={() => addRemoveIngredient("remove", "chicken")}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                </div>
              </div>



              <div
                className={
                  subways.chicken === 0 ? `ingredientsWithButtons` : "none"
                }
              >
                <p>BEEF</p>
                <div className="ingrBtns">
                  <button
                    className="ingrBtn"
                    onClick={() => addRemoveIngredient("add", "beef")}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <button
                    className="ingrBtn remove"
                    onClick={() => addRemoveIngredient("remove", "beef")}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                </div>

              </div>


              <hr />

              <div className="title">
                <p>Drinks</p>
              </div>

              <div
                className={
                  subways.mirinda === 0 && subways.sevenUp === 0 ? `ingredientsWithButtons` : "none"
                }
              >
                <p>PEPSI</p>
                <div className="ingrBtns">
                  <button
                    className="ingrBtn"
                    onClick={() => {
                      if (subways.sevenUp === 0 && subways.mirinda === 0)
                        addRemoveIngredient("add", "pepsi");
                    }}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <button
                    className="ingrBtn remove"
                    onClick={() => addRemoveIngredient("remove", "pepsi")}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                </div>
              </div>

              <div
                className={
                  subways.pepsi === 0 && subways.mirinda === 0 ? `ingredientsWithButtons` : "none"
                }
              >
                <p>7UP</p>
                <div className="ingrBtns">
                  <button
                    className="ingrBtn"
                    onClick={() => {
                      if (subways.pepsi === 0 && subways.mirinda === 0)
                        addRemoveIngredient("add", "sevenUp");
                    }}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <button
                    className="ingrBtn remove"
                    onClick={() => addRemoveIngredient("remove", "sevenUp")}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                </div>
              </div>

              <div
                className={
                  subways.pepsi === 0 && subways.sevenUp === 0 ? `ingredientsWithButtons` : "none"
                }
              >
                <p>MIRINDA</p>
                <div className="ingrBtns">
                  <button
                    className="ingrBtn"
                    onClick={() => {
                      if (subways.pepsi === 0 && subways.sevenUp === 0)
                        addRemoveIngredient("add", "mirinda");
                    }}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <button
                    className="ingrBtn remove"
                    onClick={() => addRemoveIngredient("remove", "mirinda")}>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                </div>
              </div>
            </div>
            <Button className="ingredientsButton">Done</Button>

          </div>



        </div>
      </div >

    </>

  );
};

export default Subway;
