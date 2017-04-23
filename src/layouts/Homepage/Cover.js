import React from 'react';

import ProgressiveImage from '../../components/ProgressiveImage';
import IconLink from '../../components/IconLink';

import cover from '../../assets/cover.jpg';
//import coverResponsive from '!responsive?sizes[]=50w!../../assets/cover.jpg';
import iconGithub from '../../assets/icons/iconmonstr-github-1.svg';
import iconTwitter from '../../assets/icons/twitter.svg';
import iconSlides from '../../assets/icons/slides.svg';
import iconLinkedin from '../../assets/icons/linkedin.svg';

import metadata from '../../metadata';

import styles from './index.css';

const { avatar } = metadata;

const Cover = () => (
  <ProgressiveImage
    src={cover}
    isParallax
    isBlur
    isCover
    >
    <p className={styles.coverTitle}>
      <img className={styles.avatar} src={avatar} alt="Kai Hao"/>
      {'I am a '}
      <span className={styles.pre}>{'<Front-End Engineer/>'}</span>
      <span className={styles.buttonGroup}>
        <IconLink href="https://twitter.com/ghoullier" icon={iconTwitter}>Twitter</IconLink>
        <IconLink href="https://github.com/ghoullier" icon={iconGithub}>Github</IconLink>
        <IconLink href="https://slides.com/gregoryhoullier" bgColor={'#E4637C'} icon={iconSlides}>Stack Overflow</IconLink>
        <IconLink href="https://www.linkedin.com/in/ghoullier" icon={iconLinkedin}>Linkedin</IconLink>
      </span>
    </p>
  </ProgressiveImage>
);

export default Cover;
