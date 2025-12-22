import PageContent from '../src/components/PageContent/PageContent';
import ResumeJobsInfo from '../src/components/ResumeJobsInfo/ResumeJobsInfo';
import Animated from '../src/components/Animated/Animated';
import styles from './index.module.css';

const skills: string[] = [
  'React',
  'TypeScript',
  'JavaScript',
  'Cursor',
  'Git/GitHub',
  'GraphQL',
  'Package Management (pnpm, npm, yarn)',
  'Next.js',
  'Node.js',
  'TanStack',
  'Storybook',
  'Cypress',
  'Playwright',
  'Jest',
  'JSON',
  'AWS (S3, API Gateway, CloudFront)',
  'Docker',
  'Gatsby',
  'Vue',
  'Tailwind',
  'ShadCN',
  'Radix UI',
] as const;

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
          Frontend engineer with 12 years of hands-on experience developing
          impactful user interfaces and related tooling. Expertise in various
          frontend languages, frameworks, and build systems, with a proven
          ability to quickly master new technologies. Reliable, collaborative
          self-starter with excellent communication skills and a strong track
          record of success in remote engineering teams.
        </p>
      </Animated>

      <Animated animation="fadeInUp" delay={400} animateOnLoad>
        <h2 className={styles.subheading}>Skills</h2>
      </Animated>

      <Animated animation="fadeInUp" delay={500} animateOnLoad>
        <p className={styles.paragraph}>{skills.join(', ')}</p>
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
