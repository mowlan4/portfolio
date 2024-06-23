import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          
Passionate about science and <span className="purple">innovation</span>,
 I am a driven student who excels in chemistry, physics, and mathematics. <br></br>
 I participate in STEM competitions,
  run an online web design business, 
  and actively engage in scientific research and lectures. <br>
    </br>
  My projects include building gadgets like a 
  <span className="purple"> homemade spectrometer</span> and <span className="purple">portable water filtration system. </span>
  With aspirations to explore space by building my own rocket,
   I am committed to pushing the boundaries of knowledge and technology.
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "With so much conflict in the world, space exploration can be a beacon of hope."{" "}
          </p>
          <footer className="blockquote-footer">Anne McClain</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
