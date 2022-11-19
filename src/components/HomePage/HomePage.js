import React from "react";
import "./HomePage.css";
import shieldHog from "../../pictures/hogwarts.png";

const HomePage = ({ houses, houseNames, setHouseAndCharacters }) => {
  return (
    <div className='container'>
      <div className='wel-shield'>
        <h1 className='title-home'>Welcome to Hogwarts</h1>
        <img src={shieldHog} alt='shield hogwarts' className='shield-hog' />
      </div>

      <h1 className='select-house'>
        <i className='fa-solid fa-hat-wizard'></i> Select Your House
      </h1>
      <div className='buttons'>
        {houseNames.map((house) => (
          <div
            key={house}
            className={`${house} shield`}
            onClick={() => {
              setHouseAndCharacters(house);
            }}
          >
            {house}
            <img
              src={houses[house].btnImage}
              alt={`${houses[house].name} shield`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
