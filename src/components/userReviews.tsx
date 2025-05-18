// src/components/UserReviews.tsx
import React, { useEffect, useRef } from 'react';
import { Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './UserReviews.css';

const StarIcon = FaStar as unknown as React.FC<React.SVGProps<SVGSVGElement>>;


interface Review {
  name: string;
  text: string;
  stars: number;
}

const UserReviews: React.FC = () => {
  const { t } = useTranslation();
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const reviews = t('reviews.list', { returnObjects: true }) as Review[];
  const duplicatedReviews = [...reviews, ...reviews]; // for infinite scroll

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      slider.classList.remove('active');
    };

    const handleMouseUp = () => {
      isDown = false;
      slider.classList.remove('active');
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    };

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].pageX;
      scrollLeft = slider.scrollLeft;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchX = e.touches[0].pageX;
      const walk = (touchX - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('mouseleave', handleMouseLeave);
    slider.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('mousemove', handleMouseMove);
    slider.addEventListener('touchstart', handleTouchStart);
    slider.addEventListener('touchmove', handleTouchMove);

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown);
      slider.removeEventListener('mouseleave', handleMouseLeave);
      slider.removeEventListener('mouseup', handleMouseUp);
      slider.removeEventListener('mousemove', handleMouseMove);
      slider.removeEventListener('touchstart', handleTouchStart);
      slider.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <section className="user-reviews-slider mt-5">
      <div className="container-review">
        <h2 className="text-center mb-4">⭐ {t('reviews.title')}</h2>
        <div className="scroll-wrapper" ref={sliderRef}>
          <motion.div
            className="scroll-track"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
          >
            {duplicatedReviews.map((review, idx) => (
              <Card className="review-card bg-secondary text-light shadow-sm" key={idx}>
                <Card.Body>
                  <Card.Title className='user-name'>{review.name}</Card.Title>
                  <Card.Text>{review.text}</Card.Text>
                  <div className='review-star'>
                    {[...Array(review.stars)].map((_, i) => (
                    <StarIcon key={i} color="#FFD700" className='review-star'/>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UserReviews;
