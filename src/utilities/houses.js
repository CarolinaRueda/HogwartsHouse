import gryffindorImg from "../pictures/gryffindor.png";
import ravenclawImg from "../pictures/ravenclaw.png";
import huffImg from "../pictures/huff.png";
import slytherinImg from "../pictures/slytherin.png";
import gryffSh from "../pictures/house/gryff.png";
import ravenSh from "../pictures/house/raven.png";
import huffSh from "../pictures/house/huff.png";
import slytSh from "../pictures/house/slyt.png";
import backGryff from "../pictures/bckg/gryff.jpg";
import backRaven from "../pictures/bckg/raven.jpg";
import backHuff from "../pictures/bckg/huff.jpg";
import backSly from "../pictures/bckg/sly.jpg";

export const houses = {
  gryffindor: {
    name: "Gryffindor",
    founder: "Godric Gryffindor.",
    animal: "Lion.",
    ghost: "Nearly Headless Nick.",
    element: "Fire.",
    traits: "The traits of those belonging to this house are as follows:",
    traitsCh: " Courage, bravery, determination, daring, nerve, chivalry.",
    btnImage: gryffindorImg,
    shield: gryffSh,
    style: {
      backgroundImage: `linear-gradient(
        rgba(174,0,1, 0.3),
        rgba(116,0,1, 0.3),
        rgba(211,166,37, 0.3), 
        rgba(238,186,48, 0.3)
        ), 
        url(${backGryff})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      color: "white",
      onHover: "yellow",
    },
  },
  ravenclaw: {
    name: "Ravenclaw",
    founder: "Rowena Ravenclaw",
    animal: "Eagle",
    ghost: "Grey Lady",
    element: "Air",
    traits: "The traits of those belonging to this house are as follows:",
    traitsCh: " Wit, learning, widsom, acceptance, intelligence, creativity. ",
    btnImage: ravenclawImg,
    shield: ravenSh,
    style: {
      backgroundImage: `linear-gradient(
        rgba(148,107,45, 0.7) ,
        rgba(93,93,93, 0.7),
        rgba(14,26,64, 0.7),
        rgba(34,47,91, 0.7)
        ), 
        url(${backRaven})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      color: "white",
      onHover: "lightblue",
    },
  },
  hufflepuff: {
    name: "Hufflepuff",
    founder: "Helga Hufflepuff",
    animal: "Badger",
    ghost: "Fat Friar",
    element: "Earth",
    traits: "The traits of those belonging to this house are as follows:",
    traitsCh: " Hard-working, patience, fairness, just, loyalty, modesty. ",
    btnImage: huffImg,
    shield: huffSh,
    style: {
      backgroundImage: `linear-gradient(
        rgba(236,185,57, 0.7) ,
        rgba(240,199,94, 0.7),
        rgba(114,98,85, 0.7),
        rgba(55,46,41, 0.7)
        ), 
        url(${backHuff})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      color: "white",
      onHover: "black",
    },
  },
  slytherin: {
    name: "Slytherin",
    founder: "Slytherin",
    animal: "Serpent",
    ghost: "Bloody Baron",
    element: "Water",
    traits: "The traits of those belonging to this house are as follows:",
    traitsCh:
      " Resourcefulness, determination, pride, cunning, ambition, self-preservation. ",
    btnImage: slytherinImg,
    shield: slytSh,
    style: {
      backgroundImage: `linear-gradient(
        rgba(93,93,93, 0.7),
        rgba(170,170,170, 0.7),
        rgba(42,98,61, 0.7),
        rgba(26,71,42, 0.7)
        ), 
        url(${backSly})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      onHover: "lightgreen",
    },
  },
};
