import React from "react";
import "./App.css";
import img from "./images/LoginPageProject.png";

function App() {
  const images = [
    {
      title: "Login Page Project",
      imgSrc: require("./images/LoginPageProject.png"),
      caption:
        "The purpose of this project was not only to practice login authentication, but also to experiment with website designing. The background and logo were both made in Illustrator.",
    },
    {
      title: "Office Space Video Game",
      imgSrc: require("./images/OfficeSpaceVideoGame.png"),
      caption:
        "A video game I've been working on revolves around the stock market. This image shows an office space that serves as the main starting point of the game. I had a lot of fun designing the office layout and filling it with detail. Designing the city was fun too, drawing inspiration from the Chicago and Seattle skyline. Done entirely in Illustrator.",
    },
    {
      title: "Cards (Add on to the Office Game)",
      imgSrc: require("./images/Cards.png"),
      caption:
        "Another addition I decided to make to the Office Space Game was the ability to collect cards. The car is inspired by the Lamborghini Countach. Note the retro style of the video game: I plan on the setting taking place in the 80s.",
    },
    {
      title: "Drawing People",
      imgSrc: require("./images/CharacterExperiment.png"),
      caption:
        "Something I've always had trouble with was drawing people, so I decided to experiment outside of my comfort zone. Done in Illustrator.",
    },
    {
      title: "Drawing People (Practicing with Photoshop)",
      imgSrc: require("./images/CharacterExperimentPhotoshop.png"),
      caption:
        "I was also simultaneously getting the hang of Photoshop, and decided to mess around with color grading. The end result makes the character look a lot more vibrant, and makes the eyes and shading pop out more. Done in Photoshop.",
    },
    {
      title: "Hackathon Website Design",
      imgSrc: require("./images/Hackathon.png"),
      caption:
        "For a hackathon project, my team decided to create a website that would gamify water intake. A user would select the amount of water drunk, and at the end of the day, the total would be collected. The purpose of the website was to encourage drinking enough water. All done in Illustrator.",
    },
    {
      title: "Practicing Scenic Nature",
      imgSrc: require("./images/Nature.png"),
      caption:
        "Another aspect of drawing I wanted to improve upon was the world of nature. Frustratingly, Illustrator didn't have any native grass brushes that I was looking for, so I had to make my own. This scene was inspired by the famous 'Bliss' wallpaper. Done in Illustrator.",
    },
  ];

  const imageList = images.map((image) => (
    <li className="image">
      <h2>{image.title}</h2>
      <img src={image.imgSrc} width={1250} height={750} />
      <b className="imageCaption">{image.caption}</b>
    </li>
  ));

  return (
    <>
      <div className="container">
        <div className="backgroundColor">
          <div className="header">
            <h1>Digital Portfolio for TecAce</h1>
            <h2>Ernest Chae</h2>
          </div>
          <div className="portfolioListContainer">
            <ul className="imageList">{imageList}</ul>
          </div>
          <div className="bottomBuffer"></div>
        </div>
      </div>
    </>
  );
}

export default App;
