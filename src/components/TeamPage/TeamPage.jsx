import React from 'react';
import Nav from '../Nav/Nav';
import styles from './styles.module.scss';
import TeamMember from '../TeamMember/TeamMember';

const TeamPage = () => (
  <div className={styles.team}>
    <Nav />
    <div className={styles.circles}>
      <div className={styles.mainCircle} />
      <div className={styles.secondaryCircle} />
    </div>
    <div className={styles.container}>
      <div>
        <h2 className={styles.teamHeading}>Your Team</h2>
        <p className={styles.teamDescription}>
          Direct communication
          <br />
          with each team member.
        </p>
      </div>

      <div className={styles.teamWrapper}>
        <div className={styles.teamMember}>
          <TeamMember
            name="Eduard Sobotnyk"
            avatarUrl="eduardsobotnyk.png"
            facebookLogin="eduardsobotnyk"
            linkedInLogin="eduard-sobotnyk-917459158"
            instagramLogin="edj56"
            position="Backend"
          />
        </div>
        <div className={styles.teamMember}>
          <TeamMember
            name="Yulia Cheliak"
            avatarUrl="yuliacheliak.png"
            facebookLogin="100016107456176"
            linkedInLogin="yulia-cheliak-80a787181"
            instagramLogin="juliaachelsey"
            position="Frontend"
          />
        </div>
        <div className={styles.teamMember}>
          <TeamMember
            name="Edward Fedoruk"
            avatarUrl="edwardfedoruk.png"
            facebookLogin="100009198307977"
            linkedInLogin="eduard-fedoruk-008369162"
            instagramLogin="ed.fedoruk"
            position="Frontend"
          />
        </div>
        <div className={styles.teamMember}>
          <TeamMember
            name="Mariia Korotkova"
            avatarUrl="mariiakorotkova.png"
            facebookLogin="maria.korotkova.984"
            linkedInLogin="mariia-korotkova-ux-design"
            instagramLogin="mariiakorotkova.art"
            position="Design"
          />
        </div>
      </div>
    </div>
  </div>
);

export default TeamPage;
