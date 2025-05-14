import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './Home.css'; // Optional for custom styling

import logo from '../assets/headericon.jpeg';
import slotsImg from '../assets/betano.jpeg';
import rouletteImg from '../assets/bingbow.jpeg';
import blackjackImg from '../assets/jack.jpeg';

import Header from '../components/Header';
import UserReviews from '../components/userReviews';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const games = [
    { name: 'Slots', image: slotsImg },
    { name: 'Roulette', image: rouletteImg },
    { name: 'Blackjack', image: blackjackImg },
  ];

  return (
    <div>
    <Header />
      {/* Hero Section */}
      <div className="bg-dark text-light text-center py-5">
        <Container>
          <img src={logo} alt="Lucky Charms Logo" style={{ height: '100px', marginBottom: '20px' }} />
          <h1 className="display-4 fw-bold">Welcome to 🎰 Lucky Charms Gambling</h1>
          <p className="lead">At Lucky Charms Gambling, we rank the best online casinos in Germany monthly and overall. Our verified casinos are fully licensed, legal, and offer top security. Players enjoy great bonuses, a wide game selection, and a premium gaming experience in a trusted environment.</p>
          <Button variant="warning" size="lg" href="/games">Start Playing</Button>
        </Container>
      </div>

      {/* Featured Games */}
      <Container className="my-5">
        <h2 className="text-center mb-4">🔥 Popular Games</h2>
        <Row className="g-4">
          {games.map((game, idx) => (
            <Col md={4} key={idx}>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={game.image} alt={game.name} />
                <Card.Body>
                  <Card.Title>{game.name}</Card.Title>
                  <Card.Text>
                    Try your luck at {game.name}! Big wins are just a spin away.
                  </Card.Text>
                  <Button variant="primary" href="/games">Play Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Promo Section */}
      <div className="bg-warning text-dark py-5 text-center">
        <Container>
          <h2>🎁 Daily Bonuses & Referral Rewards!</h2>
          <p>Sign up today and claim your free welcome bonus + invite friends to earn more!</p>
          <Button variant="dark" size="lg" href="/register">Claim Bonus</Button>
        </Container>
      </div>
       <UserReviews />
      <Footer />
    </div>
  );
};

export default Home;
