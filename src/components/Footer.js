import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  // Fake data for the four columns
  const column1Data = ['About', 'Careers', 'Press', 'Affiliates', 'Blog'];
  const column2Data = [
    'Ethereum Merge',
    'Browse crypto prices',
    'Tips & tutorials',
    'Market updates',
    'What is Bitcoin?',
    'What is crypto?',
    'What is a blockchain?',
  ];
  const column3Data = [
    'Buy & sell',
    'Earn free crypto',
    'Wallet',
    'NFT',
    'Card',
    'Derivatives',
  ];
  const column4Data = [
    'Help center',
    'Contact us',
    'Create account',
    'ID verification',
    'Account information',
    'Payment methods',
    'Account access',
    'Supported crypto',
    'Supported countries',
    'Status',
  ];

  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Company</h3>
        <ul>
          {column1Data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="footer-column">
        <h3>Learn</h3>
        <ul>
          {column2Data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="footer-column">
        <h3>Individuals</h3>
        <ul>
          {column3Data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="footer-column">
        <h3>Support</h3>
        <ul>
          {column4Data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
