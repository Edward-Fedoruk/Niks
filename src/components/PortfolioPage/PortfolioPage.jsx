import React from 'react';
import styles from './styles.module.scss';
import TeamMember from '../TeamMember/TeamMember';

const PortfolioPage = () => (
  <div className={styles.portfolio}>
    <div className={styles.circles}>
      <div className={styles.mainCircle} />
      <div className={styles.secondaryCircle} style={{ backgroundImage: 'url(/images/portfolio/apphooks.png)' }} />
    </div>
    <div className={styles.container}>
      <div>
        <h2 className={styles.portfolioHeading}>“APPHOOKS”</h2>
        <p className={styles.portfolioDescription}>
          Web App that provides support for<br/>
          server-side development with hooks
        </p>
      </div>
    </div>
  </div>
);

export default PortfolioPage;
