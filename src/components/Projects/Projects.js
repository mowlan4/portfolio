import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import levitation from "../../Assets/Projects/levitation.jpg";
import blob from "../../Assets/Projects/blob.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center",}}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Estia"
              description="Discord Bot made using Javascript"
              ghLink="https://github.com/mowlan4/spanishbot"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blob}
              isBlog={false}
              title="Sensor glove for sign language translation"
              description="this device is a sensor-based wearable that converts simple hand gestures to text and speech."
              ghLink="https://github.com/mowlan4/spanishbot"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={levitation}
              isBlog={false}
              title="Magnet Levitation with Rasberry Pi"
              description="Built from complete scratch, i used 3D printing and physics principles of electromagnetism to create this."
              ghLink="https://github.com/mowlan4/spanishbot"
              
            />
          </Col>

          
          



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
