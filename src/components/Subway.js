import React from "react";
import sodaPepsi from "../assets/pepsi.png";
import sodasevenUp from "../assets/7up.png";
import sodaMirinda from "../assets/mirinda.png";
import { useState } from "react";
import "./Subway.css";

const Subway = () => {
  const [lettuce, setlettuce] = useState(0);
  const [tomato, settomato] = useState(0);
  const [cheese, setcheese] = useState(0);
  const [chicken, setchicken] = useState(0);
  const [beef, setbeef] = useState(0);
  const [pepsi, setpepsi] = useState(0);
  const [sevenUp, setsevenUp] = useState(0);
  const [mirinda, setmirinda] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addRemoveIngredient = (action, ingredient) => {
    let stateValue;
    let price;
    let finalPrice;

    switch (ingredient) {
      case "lettuce": {
        stateValue = lettuce;
        finalPrice = totalPrice;
        price = 10;
        break;
      }
      case "tomato": {
        stateValue = tomato;
        finalPrice = totalPrice;
        price = 20;
        break;
      }
      case "cheese": {
        stateValue = cheese;
        finalPrice = totalPrice;
        price = 30;
        break;
      }
      case "chicken": {
        stateValue = chicken;
        finalPrice = totalPrice;
        price = 50;
        break;
      }
      case "beef": {
        stateValue = beef;
        finalPrice = totalPrice;
        price = 60;
        break;
      }

      case "pepsi": {
        stateValue = pepsi;
        finalPrice = totalPrice;
        price = 200;
        break;
      }
      case "sevenUp": {
        stateValue = sevenUp;
        finalPrice = totalPrice;
        price = 200;
        break;
      }
      case "mirinda": {
        stateValue = mirinda;
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
        console.log(finalPrice);
      }
    }

    switch (ingredient) {
      case "lettuce": {
        setlettuce(stateValue >= 0 ? stateValue : 0);
        break;
      }
      case "tomato": {
        settomato(stateValue >= 0 ? stateValue : 0);
        break;
      }
      case "cheese": {
        setcheese(stateValue >= 0 ? stateValue : 0);
        break;
      }
      case "chicken": {
        setchicken(stateValue >= 0 ? stateValue : 0);
        break;
      }
      case "beef": {
        setbeef(stateValue >= 0 ? stateValue : 0);
        break;
      }
      case "pepsi": {
        setpepsi(stateValue >= 0 ? stateValue : 0);
        break;
      }
      case "sevenUp": {
        setsevenUp(stateValue >= 0 ? stateValue : 0);
        break;
      }
      case "mirinda": {
        setmirinda(stateValue >= 0 ? stateValue : 0);
        break;
      }
      default:
        break;
    }

    setTotalPrice(finalPrice);
  };





  //Graphical display of added ingredients

  //For Meat Display
  const meatContent = (subway) => {
    if (chicken < 0) {
      subway.push(<div className="chickenSide"></div>);
    }
    if (beef < 0) {
      subway.push(<div className="beefSide"></div>);
    }
  };

  const subwayContent = () => {
    let subway = [];

    // outputting the lettuce
    for (let i = 0; i < lettuce; i++) {
      subway.push(<div className="lettuceSide"></div>);
    }
    // outputting the tomato
    for (let i = 0; i < tomato; i++) {
      subway.push(<div className="tomatoSide"></div>);
    }
    // outputting the cheese
    for (let i = 0; i < cheese; i++) {
      subway.push(<div className="cheeseSide"></div>);
    }
    //outputting the meat
    for (let i = 0; i < chicken; i++) {
      if (beef === 0) {
        subway.push(<div className="chickenSide">{meatContent(subway)}</div>);
      }

    }
    for (let i = 0; i < beef; i++) {
      if (chicken === 0) {
        subway.push(<div className="beefSide">{meatContent()}</div>);
      }
    }


    if (subway.length === 0) subway.push(<p></p>);
    return subway;
  };




  //For Drink Display
  const drinkContent = () => {
    if (pepsi > 0)
      return <img className="drinksImage" src={sodaPepsi} alt="pepsi"></img>;
    if (sevenUp > 0)
      return <img className="drinksImage" src={sodasevenUp} alt="sevenup"></img>;
    if (mirinda > 0)
      return <img className="drinksImage" src={sodaMirinda} alt="mirinda"></img>;
  };

  return (
    <div className="subwayContainer">
      <h1 className="red">CREATE YOUR SUBWAY</h1>
      <div className="innerSubwayContainer">
        <div className="subwayDrinkContainer">
          <div className="subwayIngredients scrollbar">
            <div className="topSide"></div>
            {subwayContent()}
            <div className="bottomSide"></div>
          </div>
          <div className="drinkContainer">{drinkContent()}</div>
        </div>

        <div className="priceCounter">
          <strong>Total:</strong> Rs.{totalPrice}
        </div>

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
                +
              </button>
              <button
                className="ingrBtn"
                onClick={() => addRemoveIngredient("remove", "lettuce")}
              >
                -
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
                +
              </button>
              <button
                className="ingrBtn"
                onClick={() => addRemoveIngredient("remove", "tomato")}
              >
                -
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
                +
              </button>
              <button
                className="ingrBtn"
                onClick={() => addRemoveIngredient("remove", "cheese")}
              >
                -
              </button>
            </div>
          </div>

          <hr />

          <div className="title">
            <p>Meat</p>
          </div>

          <div
            className={
              beef === 0 ? `ingredientsWithButtons` : "none"

            }

          >
            <p>CHICKEN</p>
            <div className="ingrBtns">
              <button
                className="ingrBtn"
                onClick={() => addRemoveIngredient("add", "chicken")}
              >
                +
              </button>
              <button
                className="ingrBtn"
                onClick={() => addRemoveIngredient("remove", "chicken")}
              >
                -
              </button>
            </div>
          </div>



          <div
            className={
              chicken === 0 ? `ingredientsWithButtons` : "none"
            }
          >
            <p>BEEF</p>
            <div className="ingrBtns">
              <button
                className="ingrBtn"
                onClick={() => addRemoveIngredient("add", "beef")}
              >
                +
              </button>
              <button
                className="ingrBtn"
                onClick={() => addRemoveIngredient("remove", "beef")}
              >
                -
              </button>
            </div>

          </div>


          <hr />

          <div className="title">
            <p>Drinks</p>
          </div>

          <div
            className={
              mirinda === 0 && sevenUp === 0 ? `ingredientsWithButtons` : "none"
            }
          >
            <p>PEPSI</p>
            <div className="ingrBtns">
              <button
                className="ingrBtn"
                onClick={() => {
                  if (sevenUp === 0 && mirinda === 0)
                    addRemoveIngredient("add", "pepsi");
                }}
              >
                +
              </button>
              <button
                className="ingrBtn"
                onClick={() => addRemoveIngredient("remove", "pepsi")}
              >
                -
              </button>
            </div>
          </div>

          <div
            className={
              pepsi === 0 && mirinda === 0 ? `ingredientsWithButtons` : "none"
            }
          >
            <p>7UP</p>
            <div className="ingrBtns">
              <button
                className="ingrBtn"
                onClick={() => {
                  if (pepsi === 0 && mirinda === 0)
                    addRemoveIngredient("add", "sevenUp");
                }}
              >
                +
              </button>
              <button
                className="ingrBtn"
                onClick={() => addRemoveIngredient("remove", "sevenUp")}
              >
                -
              </button>
            </div>
          </div>

          <div
            className={
              pepsi === 0 && sevenUp === 0 ? `ingredientsWithButtons` : "none"
            }
          >
            <p>MIRINDA</p>
            <div className="ingrBtns">
              <button
                className="ingrBtn"
                onClick={() => {
                  if (pepsi === 0 && sevenUp === 0)
                    addRemoveIngredient("add", "mirinda");
                }}
              >
                +
              </button>
              <button
                className="ingrBtn"
                onClick={() => addRemoveIngredient("remove", "mirinda")}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Subway;
