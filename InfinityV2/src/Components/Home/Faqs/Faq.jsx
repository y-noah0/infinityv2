import React, { useState } from 'react';
import styles from './Faqs.module.css';
import arrowDown from '../../../assets/Faq/arrow2-down.png';
import arrowUp from '../../../assets/Faq/arrow2-up.png';  


function FaqItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.fqaCard} onClick={toggleOpen}>
            <div className={styles.fqaCardHeader}>
                <div className={styles.question}>{question}</div>
                <img 
                    className={styles.arrowIcon} 
                    src={isOpen ? arrowUp : arrowDown} 
                    alt="Toggle Answer" 
                />
            </div>
            {isOpen && (
                <div className={styles.answer}>
                    {answer}
                </div>
            )}
        </div>
    );
}

function Faq() {
    const faqData = [
        {
            question: "What types of consulting services do you offer?",
            answer: "The upfront costs for Toast are hardware and implementation, which vary depending on your specific hardware packages and installation needs. We have flexible payment options available, including payment as a..."
        },
        {
            question: "What types of consulting services do you offer?",
            answer: "The upfront costs for Toast are hardware and implementation, which vary depending on your specific hardware packages and installation needs. We have flexible payment options available, including payment as a..."
        },
        {
            question: "What types of consulting services do you offer?",
            answer: "The upfront costs for Toast are hardware and implementation, which vary depending on your specific hardware packages and installation needs. We have flexible payment options available, including payment as a..."
        },
        {
            question: "What types of consulting services do you offer?",
            answer: "The upfront costs for Toast are hardware and implementation, which vary depending on your specific hardware packages and installation needs. We have flexible payment options available, including payment as a..."
        },
        // ... other FAQ data
    ];

    return (
        <div className={styles.featureSection}>
            <div className={styles.featureSectionChild} />
            <div className={styles.featureSectionInner}>
                <div className={styles.frameChild} />
            </div>
            <b className={styles.frequentlyAskedQuestions}>Frequently Asked Questions</b>
            <div className={styles.frameParent}>
                {faqData.map((item, index) => (
                    <FaqItem
                        key={index} 
                        question={item.question} 
                        answer={item.answer} 
                    />
                ))}
            </div>
        </div>
    );
}

export default Faq;
