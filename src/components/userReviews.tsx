import React from 'react';
import { Card } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import { motion } from 'framer-motion';
import './UserReviews.css'; // We will add styles here

const reviews = [
  { name: 'Alice', text: 'Found an amazing site through here. Got a $500 bonus on signup!', stars: 5 },
  { name: 'James', text: 'Their recommendations are solid. I’m enjoying the slots every night.', stars: 4 },
  { name: 'Maya', text: 'I discovered a new favorite casino thanks to this site. Great bonuses!', stars: 5 },
  { name: 'Leo', text: 'One of the sites listed here had the best payout rates I’ve seen.', stars: 4 },
  { name: 'Nina', text: 'This platform helped me compare and choose the right casino easily.', stars: 5 },
  { name: 'Tom', text: 'Got lucky on the first site I tried. I wouldn’t have found it without this!', stars: 5 },
  { name: 'Sara', text: 'I like how they show reviews and promos for each site. Super helpful.', stars: 4 },
  { name: 'Rick', text: 'I tried two of their recommended sites — both were legit and fun.', stars: 4 },
  { name: 'Lily', text: 'Helpful reviews and bonus links. Found a trusted site through this.', stars: 5 },
  { name: 'Max', text: 'Great for comparing different casinos without all the fluff.', stars: 5 },
];


const UserReviews: React.FC = () => {
  const duplicatedReviews = [...reviews, ...reviews]; // duplicate for seamless loop

  return (
    <div className="bg-dark text-light py-5 overflow-hidden">
      <h2 className="text-center mb-4">⭐ What Our Players Say</h2>
      <div className="scroll-wrapper">
        <motion.div
          className="scroll-track"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        >
          {duplicatedReviews.map((review, idx) => (
            <Card className="review-card bg-secondary text-light shadow-sm" key={idx}>
              <Card.Body>
                <Card.Title>{review.name}</Card.Title>
                <Card.Text>{review.text}</Card.Text>
                <div>
                  {[...Array(review.stars)].map((_, i) => (
                    <FaIcons.FaStar key={i} color="#FFD700" />
                  ))}
                </div>
              </Card.Body>
            </Card>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default UserReviews;
