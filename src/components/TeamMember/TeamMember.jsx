import React from 'react';
import PropTypes from 'prop-types';
import FacebookIcon from './Icons/FacebookIcon/FacebookIcon';
import InstagramIcon from './Icons/InstagramIcon/InstagramIcon';
import LinkedInIcon from './Icons/LinkedInIcon/LinkedInIcon';
import styles from './styles.module.scss';

const TeamMember = ({
  avatarUrl, name, position, facebookLogin, instagramLogin,
}) => (
  <div className={styles.teamMember}>
    <div className={styles.teamMember__avatar}><img src={`/images/members/${avatarUrl}`} alt="team member" /></div>
    <h3 className={styles.teamMember__name}>{name}</h3>
    <p className={styles.teamMember__position}>{position}</p>
    <div className={styles.teamMember__socials}>
      <a href={`https://facebook.com/${facebookLogin}`} target="_blank" rel="noopener noreferrer">
        <FacebookIcon />
      </a>
      <a href="https://facebook.com/eduardsobotnyk" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon />
      </a>
      <a href={`https://www.instagram.com/${instagramLogin}`} target="_blank" rel="noopener noreferrer">
        <InstagramIcon />
      </a>
    </div>
  </div>
);

TeamMember.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  facebookLogin: PropTypes.string.isRequired,
  // linkedInLogin: PropTypes.string.isRequired,
  instagramLogin: PropTypes.string.isRequired,
};

export default TeamMember;
