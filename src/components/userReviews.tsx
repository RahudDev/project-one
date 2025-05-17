import React from 'react';
import { Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './UserReviews.css';

const StarIcon = FaStar as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

const UserReviews: React.FC = () => {
  const { t } = useTranslation();

  // Safely get the translated review list
  const reviews = t('reviews.list', { returnObjects: true }) as {
    name: string;
    text: string;
    stars: number;
  }[];

  const duplicatedReviews = [...reviews, ...reviews]; // For smooth infinite scroll

  return (
    <div className="py-5 overflow-hidden">
      <h2 className="text-center mb-4">⭐ {t('reviews.title')}</h2>
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
                    <StarIcon key={i} color="#FFD700" />
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
