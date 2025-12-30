import PageContent from '../src/components/PageContent/PageContent';
import ResumeJobsInfo from '../src/components/ResumeJobsInfo/ResumeJobsInfo';
import Animated from '../src/components/Animated/Animated';
import { Skills } from '../src/components/ResumeJobsInfo/data';
import styles from './index.module.css';

const HomePage = () => {
  return (
    <PageContent>
      <Animated animation="fadeInUp" delay={100} animateOnLoad>
        <h1 className={`page-heading ${styles.heading}`}>
          <span>Senior Frontend Engineer</span>
        </h1>
      </Animated>

      <Animated animation="fadeInUp" delay={200} animateOnLoad>
        <h2 className={`page-subheading ${styles.subheading}`}>Summary</h2>
      </Animated>

      <Animated animation="fadeInUp" delay={300} animateOnLoad>
        <p className={styles.paragraph}>
          Senior Frontend Engineer with 12+ years of hands-on experience
          building and maintaining large-scale user interfaces, design systems,
          and frontend tooling. Deep expertise in React, TypeScript, testing
          strategy, and modern build systems, with a strong focus on
          performance, accessibility, and long-term maintainability. Proven
          track record of owning frontend architecture and collaborating
          effectively on fully remote engineering teams.
        </p>
      </Animated>

      <Animated animation="fadeInUp" delay={400} animateOnLoad>
        <h2 className={styles.subheading}>Skills</h2>
      </Animated>

      <Animated animation="fadeInUp" delay={500} animateOnLoad>
        <ul className={styles['skills-list']}>
          {Skills.all?.map((skill, index) => (
            <li key={index} className={styles['skill-item']}>
              {skill}
            </li>
          ))}
        </ul>
      </Animated>

      <Animated animation="fadeInUp" delay={600} animateOnLoad>
        <h2 className={styles.subheading}>Professional Experience</h2>
      </Animated>

      <Animated animation="fadeInUp" delay={700} animateOnLoad>
        <ResumeJobsInfo />
      </Animated>

      <Animated animation="fadeInUp" delay={800} animateOnLoad>
        <div className={styles.education}>
          <h2 className={styles.subheading}>Education</h2>

          <h3 className={styles.heading}>
            A.A.S. in Computer Information Systems
          </h3>

          <h4 className={styles['small-heading']}>
            Ivy Tech Community College of Indiana • Bloomington, IN
          </h4>
        </div>
      </Animated>
    </PageContent>
  );
};

export default HomePage;
