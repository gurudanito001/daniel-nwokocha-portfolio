import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

const Header = ({}) =>{
  return (
    <AccordionSummary
      expandIcon={<ExpandMore />}
      aria-controls="panel1a-content"
      id="panel1a-header">
        <Typography>Project Details</Typography>
    </AccordionSummary>
  )
}

const projectDetails = (index = 0) =>{

  const details = [
    <Accordion className="w-100">
      <Header />
      <AccordionDetails>
        <ul>
          <li> <Typography> ShareBanta is a Payment and Reward Sharing Platform</Typography></li>
          <li>The web Frontend of Sharebanta was built with React, Redux and Material UI</li>
          <li>I am the lead frontend developer in ShareBanta</li>
          <li>I also built the user management full stack application with Node, Mysql and  React</li>
          <li>ShareBanta has been in existence for over {new Date().getFullYear() - 2020} years</li>
        </ul>
      </AccordionDetails>
    </Accordion>,
    <Accordion className="w-100">
      <Header />
      <AccordionDetails>
        <ul>
          <li> <Typography> XANDO is my implementation of the tictactoe game</Typography></li>
          <li>You can play against another player or against the Computer</li>
          <li>Computer plays in three levels. With Each level, the computer's ability improves</li>
          <li>This is the project I enjoyed creating the most.</li>
          <li>I have plans for tictactoe to allow for a realtime multiplayer experience</li>
        </ul>
      </AccordionDetails>
    </Accordion>,
    <Accordion className="w-100">
      <Header />
      <AccordionDetails>
        <ul>
          <li> <Typography> SMSLIVE247 is the first tech product company I worked for</Typography></li>
          <li>SMSLIVE247 Sends Bulk sms and allows for api integration</li>
          <li>I was a junior frontend developer and was a major part of changing the look of the website and webapp</li>
          <li>I learnt most of the popular frontend technologies during my time there</li>
        </ul>
      </AccordionDetails>
    </Accordion>,
    <Accordion className="w-100">
      <Header />
      <AccordionDetails>
        <ul>
          <li> <Typography> Stocktaker is an inventory and vehicle management system</Typography></li>
          <li>It was built for an export company to manage their assets</li>
          <li>It was built with the MERN stack.</li>
          <li>It was my first fullstack project and I greatly improved my skill and confidence</li>
        </ul>
      </AccordionDetails>
    </Accordion>,
    <Accordion className="w-100">
      <Header />
      <AccordionDetails>
        <ul>
          <li> <Typography> Delegates is a MERN stack application built to check-in guests during the covid 19 pandemic.</Typography></li>
          <li>It was a last minute solution to control the number of people attending an event</li>
          <li>It allows for seaching guests by name and phone number.</li>
          <li>When guests are found in the database, their names are checked. They would the appear in the admitted guests tab.</li>
        </ul>
      </AccordionDetails>
    </Accordion>
  ]

  return details[index];
}

export default projectDetails;