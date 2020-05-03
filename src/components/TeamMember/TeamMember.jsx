import React from 'react';
import PropTypes from 'prop-types';
import FacebookIcon from './Icons/FacebookIcon/FacebookIcon';
import InstagramIcon from './Icons/InstagramIcon/InstagramIcon';
import LinkedInIcon from './Icons/LinkedInIcon/LinkedInIcon';
import styles from './styles.module.scss';

const TeamMember = ({
  avatarUrl, name, position, facebookLogin, linkedInLogin, instagramLogin,
}) => (
  <div className={styles.teamMember}>
    <div className={styles.teamMemberAvatar}><img src={`/images/members/${avatarUrl}`} alt="team member" /></div>
    <h3 className={styles.teamMemberName}>{name}</h3>
    <p className={styles.teamMemberPosition}>{position}</p>
    <div className={styles.teamMemberSocials}>
      {facebookLogin && (
      <a href={`https://facebook.com/${facebookLogin}`} target="_blank" rel="noopener noreferrer">
        <FacebookIcon />
      </a>
      )}
      {linkedInLogin && (
      <a href={`https://www.linkedin.com/in/${linkedInLogin}`} target="_blank" rel="noopener noreferrer">
        <LinkedInIcon />
      </a>
      )}
      {instagramLogin && (
      <a href={`https://www.instagram.com/${instagramLogin}`} target="_blank" rel="noopener noreferrer">
        <InstagramIcon />
      </a>
      )}
    </div>
  </div>
);

TeamMember.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  facebookLogin: PropTypes.string.isRequired,
  linkedInLogin: PropTypes.string.isRequired,
  instagramLogin: PropTypes.string.isRequired,
};

export default TeamMember;
