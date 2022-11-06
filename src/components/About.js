import React from "react";
import { image } from "../data/data";

function About() {
  // return <div>About</div>;
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I like to steal content by Anthony Clark<br />
      or people who steal from Anthony Clark<br />
      or I like people who steal from Anthony Clark<br />
      or I am not a Web Developer from New York named Liza.</p>
      <img src={image} alt="I made this" />
    </div>
  )
}

export default About;
