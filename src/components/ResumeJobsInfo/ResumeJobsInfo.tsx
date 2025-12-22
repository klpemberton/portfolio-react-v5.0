import { memo } from 'react';
import { JobsDataFeatured, ResumeData } from './data';
import JobDetails from './JobDetails';
import styles from './ResumeJobsInfo.module.css';

const Resume = memo(() => (
  <section
    className={styles.resumeSection}
    aria-label="Professional Experience"
  >
    <div className={styles.accordion} role="region" aria-label="Job History">
      {JobsDataFeatured.map(({ title, dates, details }: ResumeData) => {
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
