import { memo } from 'react';
import Animated from '../Animated/Animated';
import { ecologyProjects } from './data';
import styles from './EcologyProjects.module.css';

const EcologyProjects = memo(() => {
  return (
    <div className={styles['ecology-projects-grid']}>
      {ecologyProjects.map((project, index) => (
        <Animated
          key={project.title}
          animation="fadeInUp"
          delay={300 + index * 100}
          animateOnLoad
        >
          <div className={styles['ecology-item']}>
            <h3 className={styles['ecology-item-name']}>
              {project.titleUrl ? (
                <a
                  href={project.titleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['ecology-item-link']}
                >
                  {project.title}
                </a>
              ) : (
                <span className={styles['ecology-item-link']}>
                  {project.title}
                </span>
              )}
            </h3>

            <div className={styles['ecology-item-links']}>
              {project.instagramLinks && (
                <div className={styles['ecology-dates-list']}>
                  {project.instagramLinks.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles['ecology-date-badge']}
                    >
                      {link.date}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <p className={styles['ecology-item-info']}>{project.description}</p>
          </div>
        </Animated>
      ))}
    </div>
  );
});

EcologyProjects.displayName = 'EcologyProjects';
export default EcologyProjects;
