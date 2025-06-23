import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { Newsletter } from '../../components';
import './Footer.css';

// Structured data for locations and working hours
const locations = [
  {
    name: 'Vauxhall Bridge Rd',
    address: '326 Vauxhall Bridge Rd, London SW1V 1AA',
    hours: [
      { days: 'Monday-Friday', time: '11:00 AM - 01:00 AM' },
      { days: 'Sunday', time: '11:00 AM - 11:00 PM' },
    ],
  },
  {
    name: 'Haymarket',
    address: '33 Haymarket, London SW1Y 4HA',
    hours: [
      { days: 'Sunday-Thursday', time: '11:00 AM - 11:00 PM' },
      { days: 'Friday-Saturday', time: '11:00 AM - 02:00 AM' },
    ],
  },
  {
    name: 'Camden High St',
    address: '19 Camden High St, London NW1 7JE in Camden Town',
    hours: [
      { days: 'Monday-Sunday', time: '10:00 AM - 12:00 AM' },
    ],
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer aria-labelledby="footer-heading">
      <div className="footer">
        <Newsletter /> {/* Social media section restored */}

        <div className="footer__links">
          {/* Locations Section */}
          <div className="footer__links_locations" role="region" aria-label="Our Locations">
            <h1 className="app__footer-headtext footer__heading" id="footer-locations-heading">
              Our Locations
            </h1>
            <ol className="footer__locations_list">
              {locations.map((location, index) => (
                <li key={index} className="location-item">
                  <div className="location-item__header">
                    <span className="location-item__icon" aria-hidden="true">📍</span>
                    <p className="p__opensans location-item__address">{location.address}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Logo Section */}
          <div className="footer__links_logo" role="region" aria-label="Brand Information">
            <h1 className="app__footer-headtext footer__heading" id="footer-logo-heading">
              Wok & Fire
            </h1>
            <p className="p__opensans footer__quote">
              "The best way to find yourself is to lose yourself in the service of others."
            </p>
          </div>

          {/* Working Hours Section */}
          <div className="footer__links_work" role="region" aria-label="Working Hours">
            <h1 className="app__footer-headtext footer__heading" id="footer-work-heading">
              Working Hours
            </h1>
            <ol className="footer__hours_list">
              {locations.map((location, index) => (
                <li key={index} className="location-item">
                  <div className="location-item__header">
                    <span className="location-item__icon" aria-hidden="true">🕒</span>
                    <p className="p__opensans location-item__name">{location.name}</p>
                  </div>
                  <ul className="location-hours">
                    {location.hours.map((hour, idx) => (
                      <li key={idx} className="p__opensans location-hours__item">
                        {hour.days}: {hour.time}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="footer__copyright">
          <a href="/" className="footer__copyright_link">
            <p className="p__opensans">{currentYear} © Wok & Fire. All Rights Reserved.</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;