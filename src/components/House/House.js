import React, { useState } from "react";
import "./House.css";

const House = ({ info, onReset, characters }) => {
  const [num, setNum] = useState(Math.floor(Math.random() * characters.length));
  const [hover, setHover] = useState(false);

  const hovered = !hover
    ? {}
    : {
        textShadow: `2px 4px 3px ${info.style.onHover}`,
      };

  const onClick = () => {
    setNum(Math.floor(Math.random() * characters.length));
  };

  const { name, ancestry, gender, species } = characters[num];

  return (
    <div className='container-house'>
      <div className='nameInfo'>
        <h1 className='house'>{info.name}</h1>
        <img src={info.shield} alt={`${info.name} shield`} />
      </div>
      <div className='information'>
        <div>
          <div className='info-cont'>
            <h3>Information about the house</h3>
            <div className='info-house'>
              <p className='title-house'>Founder: </p>
              <p> {info.founder}</p>
            </div>
            <div className='info-house'>
              <p className='title-house'>Animal: </p>
              <p> {info.animal}</p>
            </div>
            <div className='info-house'>
              <p className='title-house'>Ghost: </p>
              <p> {info.ghost}</p>
            </div>
            <div className='info-house'>
              <p className='title-house'>Element: </p>
              <p> {info.element}</p>
            </div>
            <div className='info-house'>
              <p className='title-house'>Traits: </p>
              <div id='traits'>
                <p>{info.traits}</p>
                <p>{info.traitsCh}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='random-character'>
          <h3>Character of this house</h3>
          <div
            onClick={onClick}
            className='btn'
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div className='info-house'>
              <p className='title-house' style={hovered}>
                Name:
              </p>
              <p style={hovered}>{name}.</p>
            </div>
            <div className='info-house'>
              <p className='title-house' style={hovered}>
                Ancestry:
              </p>
              <p style={hovered}>{ancestry ? ancestry : "Unknown"}</p>
            </div>
            <div className='info-house'>
              <p className='title-house' style={hovered}>
                Patronus:
              </p>
              <p style={hovered}>{gender ? gender : "No data"}</p>
            </div>
            <div className='info-house'>
              <p className='title-house' style={hovered}>
                Species:
              </p>
              <p style={hovered}>{species ? species : "No info"}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='test'></div>
      <button
        onClick={() => {
          onReset();
          setNum(0);
        }}
        className='imabutton'
      >
        back hogwarts
      </button>
    </div>
  );
};

export default House;
