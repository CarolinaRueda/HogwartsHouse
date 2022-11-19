import React, { useState, useEffect } from "react";
import "./Initial.css";
import { houses } from "../../utilities/houses";
import House from "../House/House";
import HomePage from "../HomePage/HomePage";
import { appStyles } from "./styles";

const Initial = () => {
  const [house, setHouse] = useState("");
  const [info, setinfo] = useState([]);
  const [characters, setCharacters] = useState([]);

  const reset = () => setHouse("");

  const handleHouseAndCharacters = (house) => {
    setHouse(house);
    setCharacters(info.filter((char) => char.house.toLowerCase() === house));
  };

  useEffect(() => {
    asyncFunction();
  }, []);

  const asyncFunction = async () => {
    try {
      const response = await fetch(
        "https://hp-api.herokuapp.com/api/characters"
      );
      if (response.ok) {
        const infoArr = await response.json();
        setinfo(infoArr);
        return;
      }
      throw Error("fuck this shit sucks");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      {!house ? (
        <div className='App' style={appStyles}>
          <div className='container'>
            <HomePage
              houses={houses}
              houseNames={Object.keys(houses)}
              setHouseAndCharacters={handleHouseAndCharacters}
            />
          </div>
          <div className='footer'>By Dzien</div>
        </div>
      ) : (
        <div className='App' style={houses[house].style}>
          <div className='container'>
            <House
              info={houses[house]}
              onReset={reset}
              characters={characters}
            />
          </div>
          <div className='footer'>By Dzien</div>
        </div>
      )}
    </>
  );
};

export default Initial;
