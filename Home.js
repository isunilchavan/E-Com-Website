// Home.js
import React from "react";
import { Container, Card, Button } from "react-bootstrap";

const events = [
  {
    date: "JUL 16",
    location: "DETROIT, MI",
    venue: "DTE ENERGY MUSIC THEATRE",
  },
  {
    date: "JUL 19",
    location: "TORONTO, ON",
    venue: "BUDWEISER STAGE",
  },
  {
    date: "JUL 22",
    location: "BRISTOW, VA",
    venue: "JIGGY LUBE LIVE",
  },
  {
    date: "JUL 29",
    location: "PHOENIX, AZ",
    venue: "AK-CHIN PAVILION",
  },
  {
    date: "AUG 2",
    location: "LAS VEGAS, NV",
    venue: "T-MOBILE ARENA",
  },
  {
    date: "AUG 7",
    location: "CONCORD, CA",
    venue: "CONCORD PAVILION",
  },
];

function Home() {
  return (
    <Container>
      <h1>Upcoming Events</h1>
      {events.map((event, index) => (
        <Card key={index} className="mb-3">
          <Card.Body>
            <Card.Title>{event.date}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{event.location}</Card.Subtitle>
            <Card.Text>{event.venue}</Card.Text>
            <Button variant="primary">BUY TICKETS</Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default Home;
