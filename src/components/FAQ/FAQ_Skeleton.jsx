import React, { useState } from 'react';
import './FAQs_Large.css';

const Accordions = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="process">
      <div className="process__container">
        <div className="process__accordions">
          <ul className="accordions__list">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                index={index}
                title={faq.title}
                content={faq.content}
                openIndex={openIndex}
                toggleAccordion={toggleAccordion}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const AccordionItem = ({ index, title, content, openIndex, toggleAccordion }) => {
  const isOpen = openIndex === index;
  const color = isOpen ? '#f4d4d8': '#343663';
  
  return (
    <li className={`accordions__item ${isOpen ? 'open_faq' : ''}`} onClick={() => toggleAccordion(index)} style={{ color }} >
      <button className="accordions__control" aria-expanded={isOpen}>
        <span className="accordions__number">0{index + 1}</span>
        <span className="accordions__title">{title}</span>
        <span className="accordions__icon"></span>
      </button>
      <div className="accordions__content" aria-hidden={!isOpen}>
        <div>
          <p>{content}</p>
        </div>
        
      </div>
    </li>
  );
};

export default Accordions;
