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
 I am a driven student who excels in logical thinking and problem solving. <br></br>
 I participate in STEM competitions,
  run an online web design business, 
  and actively engage in scientific research and lectures. <br>
    </br>
  My projects include building gadgets like a 
  <span className="purple"> homemade spectrometer</span> and <span className="purple">portable water filtration system. </span>
  
I have also made hydra.fun ( a chatapp which has over 100 members )         </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "If you put your mind to it, anything is possible."{" "}
          </p>
          <footer className="blockquote-footer">Kimberly Guilfoylen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
