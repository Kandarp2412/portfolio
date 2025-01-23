import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Marhaba Auctions"
              description="Developed and maintained the admin panel using AngularJS, ensuring efficient
                management of auction processes.Built a robust backend with Node.js, handling data processing and seamless integration
                with the front-end.Contributed to the development of a user-friendly front-end website to enable live auctions
                and bidding."
              demoLink="https://marhabaauctions.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Telemed MD"
              description="Developed an admin panel using React.js for managing healthcare services, patient
                records, and appointments.
                Built a secure and scalable backend using Node.js for data handling and API integration.
                Created a user-friendly front-facing website to enable patients to book appointments,
                access medical services, and manage their health records."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://telemedmd.ca/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="The Big Picture"
              description="Built a system using React.js, Node.js, and MongoDB for efficient school management.
                Enabled user registration for coaches and students with role-specific functionalities.
                Implemented a drag-and-drop calendar for enhanced task and schedule management.
                Added subscription functionality to provide premium access to advanced features."
              demoLink="https://beta.thebigpicture.net.au/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Limitless"
              description="Designed and implemented dual panels for administrators and merchants, ensuring rolespecific functionalities.
                Developed a dedicated app to empower merchants with meeting management tools.
                Integrated secure authentication using JWT for enhanced data security.Enabled merchants to:Add and manage users.
                Block specific apps on participants' devices to ensure a distraction-free environment."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="RAV Astrology"
              description="Developed a web-based astrology software supporting Vedic, KP, Western, and Nadi systems with advanced charting, multi-language support, and customizable themes. Integrated features like divisional charts, planetary analysis, and options for saving/exporting charts. Built a responsive, user-friendly platform for professional astrologers."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://app.rahasyavedicastrology.com/rva-software"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
