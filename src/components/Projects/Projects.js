import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import crypto from "../../Assets/Projects/crypto.png";
import finance from "../../Assets/Projects/finance.png";

import podcast from "../../Assets/Projects/podcast.png";

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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={finance}
              isBlog={false}
              title="Finance tracker website"
              description="Modern finance tracker application incorporating user authentication, data storage, and real-time updates using React and Firebase. Designed and integrated dashboard components for balance visualization, income, expenses, and transaction management with advanced filtering and sorting features. Ensured data security and persistence through Firebase Firestore."
              ghLink="https://github.com/adityatadas24/financly-tracker-project"
              demoLink="https://master--eclectic-truffle-8ea383.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={podcast}
              isBlog={false}
              title="Podcast Platform"
              description="Developed a dynamic podcast platform with React and Firebase, podcast management, and browsing functionalities.Integrated Redux for efficient state management, ensuring scalability and profile management, and podcast creation.Utilized Firebase Firestore for secure, real-time data storage, enhancing platform reliability and responsiveness."
              ghLink="https://github.com/adityatadas24/podcast-platform-app"
              demoLink="https://podcast-platform-website.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="Cryptocurrency Tracker Website"
              description="Created a cryptocurrency-tracking web application using React.js with real-time updates and user interface. Designed dashboard for visualizing market trends, tracking performance, and comparing cryptocurrencies. Applied Chart.js for comprehensive data visualization, providing clear and interactive charts of historical price trends and market volumes."
              ghLink="https://github.com/adityatadas24/crypto-tracker-website"
              demoLink="https://cryptocurrency-tracker-website.netlify.app/"              
            />
          </Col>

      



    
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
