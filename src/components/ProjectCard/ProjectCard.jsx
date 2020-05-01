import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const ProjectCard = ({ url, name, description }) => (
  <div className={styles.projectCard}>
    <div className={styles.projectCard__img}><img src={`/images/portfolio/${url}`} alt="1" /></div>
    <h3 className={styles.projectCard__heading}>{name}</h3>
    <p className={styles.projectCard__description}>{description}</p>
  </div>
);

ProjectCard.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectCard;
