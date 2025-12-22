import { memo } from 'react';
import Animated from '../Animated/Animated';
import { webProjects } from './data';
import styles from './WebProjects.module.css';

const WebProjects = memo(() => {
  return (
    <div className={styles['web-projects-grid']}>
      {webProjects.map((project, index) => (
        <Animated
          key={project.title}
          animation="fadeInUp"
          delay={300 + index * 50}
          animateOnLoad
        >
          <div className={styles['web-item']}>
            <h3 className={styles['web-item-name']}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles['web-item-link']}
              >
                {project.title}
              </a>
            </h3>

            <p className={styles['web-item-info']}>
              <strong>Tools Used:</strong> {project.tools}
              <br />
              <strong>Summary:</strong> {project.summary}
            </p>
          </div>
        </Animated>
      ))}
    </div>
  );
});

WebProjects.displayName = 'WebProjects';
export default WebProjects;
