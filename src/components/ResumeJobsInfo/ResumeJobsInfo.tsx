import { memo } from 'react';
import { resumeJobsData, ResumeJobsData } from './data';
import JobDetails from './JobDetails';
import styles from './ResumeJobsInfo.module.css';

const Resume = memo(() => (
  <section
    className={styles['resume-section']}
    aria-label="Professional Experience"
  >
    <div className={styles.accordion} role="region" aria-label="Job History">
      {resumeJobsData.map(({ title, dates, details }: ResumeJobsData) => {
        return (
          <JobDetails
            key={`${title}-${dates}`}
            title={title}
            dates={dates}
            details={details}
          />
        );
      })}
    </div>
  </section>
));

Resume.displayName = 'Resume';
export default Resume;
