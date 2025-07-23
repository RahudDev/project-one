import React, { useState, useEffect, useRef } from 'react';
import './faq.css';
import { ChevronDown, ChevronUp } from 'lucide-react';


interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
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

  const faqData: FAQItem[] = [
  {
    question: 'Is online casino gaming legal in my country?',
    answer:
      'The legality of online casino gaming depends on your country’s laws. Some countries fully regulate online casinos, others allow only licensed operators, and some prohibit them altogether. Always check the gambling regulations in your jurisdiction before playing.'
  },
  {
    question: 'What should I look for to ensure a casino is legitimate and safe?',
    answer:
      'Choose casinos that hold licenses from reputable authorities, use certified random number generators (RNGs), publish their Return to Player (RTP) rates, and secure your data with SSL encryption. Transparent terms, clear bonus conditions, and responsive customer support are also key signs of a trustworthy casino.'
  },
  {
    question: 'How do casino bonuses and wagering requirements work?',
    answer:
      'Casino bonuses often come as match bonuses, free spins, or no-deposit offers. To withdraw winnings from a bonus, you must meet the wagering requirement—usually a set multiple of the bonus amount (e.g., 35×). Always check the terms for eligible games, maximum bets, and expiration dates before accepting a bonus.'
  },
  {
    question: 'Which deposit and withdrawal methods are safe and flexible?',
    answer:
      'Top online casinos offer a range of secure payment methods, including credit/debit cards, e-wallets, bank transfers, and cryptocurrencies. Check whether the casino supports quick withdrawals and if you can use the same method for both deposits and payouts. Look for casinos with fast processing times and no hidden fees.'
  },
   {
    question: 'What is KYC?',
    answer:
      'KYC stands for Know Your Customer. It’s a verification process used by financial platforms, crypto exchanges, and online casinos to confirm your identity. This helps prevent fraud, money laundering, and other illegal activities.\n\nYou’ll typically be asked to submit:\n • A valid photo ID (passport or national ID)\n • Proof of address (such as a utility bill or bank statement)\n • Sometimes a selfie for facial verification\n\nKYC is required by law in many countries and ensures that platforms operate legally and securely.'
  },
  {
    question: 'Can I play for free before betting real money?',
    answer:
      'Yes, many online casinos offer demo or free-play modes. These allow you to try out games without risking real money, giving you a chance to learn the rules and practice strategies before you decide to play for real.'
  },
];


  return (
    <section ref={faqRef} className="faq-section my-5 animate-scroll">
      <div className="container">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
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
