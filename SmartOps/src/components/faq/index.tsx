import React, { useState } from "react";
import "./styles.css";
import IconChevronUp from "../../assets/IconChevronUp.svg";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

const Faq: React.FC<FAQProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-card" onClick={() => toggleFAQ(index)}>
            <p className="faq-question">{faq.question}</p>
            <span className={`faq-toggle ${openIndex === index ? "open" : ""}`}>
              <img src={IconChevronUp} />
            </span>
          </div>
          {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default Faq;
