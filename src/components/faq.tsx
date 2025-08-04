import React, { useState, useEffect, useRef } from 'react';
import './faq.css';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface FAQItem {
  question: string;
  answer: string | React.ReactElement;
}

const FAQ: React.FC = () => {
  const { t } = useTranslation();
  const faqRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = faqRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
          element.classList.add('visible');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Create KYC answer component from JSON data
  const createKYCAnswer = () => {
    const kycData = t('faq.questions.kyc.answer', { returnObjects: true }) as any;
    
    // Safety check to ensure kycData exists and has the expected structure
    if (!kycData || typeof kycData !== 'object') {
      return <div>KYC information not available</div>;
    }

    const {
      intro = '',
      requirements_title = '',
      requirements = [],
      conclusion = ''
    } = kycData;

    return (
      <div>
        <p style={{ marginBottom: '16px' }}>
          {intro}
        </p>
        <p style={{ marginBottom: '16px' }}>
          <strong>{requirements_title}</strong>
        </p>
        <ul style={{ marginLeft: '20px', marginBottom: '16px' }}>
          {Array.isArray(requirements) && requirements.map((requirement: string, index: number) => (
            <li key={index} style={{ marginBottom: '8px' }}>{requirement}</li>
          ))}
        </ul>
        <p>
          {conclusion}
        </p>
      </div>
    );
  };

  const faqData: FAQItem[] = [
    {
      question: t('faq.questions.legality.question'),
      answer: t('faq.questions.legality.answer')
    },
    {
      question: t('faq.questions.safety.question'),
      answer: t('faq.questions.safety.answer')
    },
    {
      question: t('faq.questions.bonuses.question'),
      answer: t('faq.questions.bonuses.answer')
    },
    {
      question: t('faq.questions.payments.question'),
      answer: t('faq.questions.payments.answer')
    },
    {
      question: t('faq.questions.kyc.question'),
      answer: createKYCAnswer()
    },
    {
      question: t('faq.questions.freePlay.question'),
      answer: t('faq.questions.freePlay.answer')
    },
  ];

  return (
    <section ref={faqRef} className="faq-section my-5 animate-scroll">
      <div className="container">
        <h2 className="text-center mb-4">{t('faq.title')}</h2>
        <div className="accordion" id="faqAccordion">
          {faqData.map((item, index) => (
            <div key={index} className="card bg-secondary text-white mb-2">
              <div
                className="card-header-faq d-flex justify-content-between align-items-center p-3"
                onClick={() => toggleAnswer(index)}
                style={{ cursor: 'pointer' }}
              >
                <h5 className="mb-0">{item.question}</h5>
                <span className="faq-icon fs-4">
                  {activeIndex === index ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </span>
              </div>
              <div
                className={`collapse ${activeIndex === index ? 'show' : ''}`}
              >
                <div className="card-body">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;