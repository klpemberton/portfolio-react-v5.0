import PageContent from '../src/components/PageContent/PageContent';
import ResumeJobsInfo from '../src/components/ResumeJobsInfo/ResumeJobsInfo';
import Animated from '../src/components/Animated/Animated';
import { skillsData } from '../src/components/ResumeJobsInfo/data';
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
        Senior Frontend Engineer with 12+ years of experience crafting impactful user interfaces, component libraries, and frontend tooling. Deep expertise in JavaScript, React, TypeScript, and modern build systems, with a focus on performance, accessibility, and maintainability. Proven track record of driving high-impact features and leveling up fully remote teams through establishing best practices, code review, and mentorship.
        </p>
      </Animated>

      <Animated animation="fadeInUp" delay={400} animateOnLoad>
        <h2 className={styles.subheading}>Skills</h2>
      </Animated>

      <Animated animation="fadeInUp" delay={500} animateOnLoad>
        <ul className={styles['skills-list']}>
          {skillsData.all?.map((skill: string, index: number) => (
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
