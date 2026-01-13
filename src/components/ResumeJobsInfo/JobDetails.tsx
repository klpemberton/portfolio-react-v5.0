import { useCallback, useState, useId, KeyboardEvent, useMemo } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { JobDetails as JobDetail, ResumeData } from './data';
import styles from './JobDetails.module.css';

const JobDetails = ({ title, dates, details }: ResumeData) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const headingId = useId();
  const contentId = useId();

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleOpen();
      }
    },
    [toggleOpen]
  );

  const firstCompany = useMemo(() => details[0]?.company || '', [details]);

  const ariaLabel = useMemo(
    () =>
      `${isOpen ? 'Collapse' : 'Expand'} details for ${title} at ${firstCompany}`,
    [isOpen, title, firstCompany]
  );

  return (
    <div className={styles['job-item']} data-state={isOpen ? 'open' : 'closed'}>
      <h3 className={styles['job-heading-wrapper']}>
        <button
          id={headingId}
          className={styles['job-heading']}
          onClick={toggleOpen}
          onKeyDown={handleKeyDown}
          aria-expanded={isOpen}
          aria-controls={contentId}
          aria-label={ariaLabel}
          type="button"
        >
          <span className={styles.icon} aria-hidden="true" data-open={isOpen}>
            <FaChevronRight />
          </span>

          <span className={styles['job-title']}>
            <span className={styles['job-title-text']}>
              {title}
              {firstCompany && (
                <span className={styles['company-name-inline']}>
                  {' '}
                  • {firstCompany}
                </span>
              )}
            </span>
            <span className={styles['job-dates']}>{dates}</span>
          </span>
        </button>
      </h3>

      <div
        id={contentId}
        className={styles['details-container']}
        role="region"
        aria-labelledby={headingId}
        aria-hidden={!isOpen}
        data-open={isOpen}
      >
        <div className={styles['details-content']}>
          {details.map(
            ({
              company,
              location,
              industry,
              accomplishments,
            }: JobDetail) => {
              return (
                <div key={`${company}-${location}`} className={styles.details}>
                  <div className={styles['company-info']}>
                    <p className={styles.industry}>
                      {industry && <span>{industry} • </span>}
                      {location}
                    </p>
                  </div>

                  <ul className={styles.accomplishments}>
                    {accomplishments.map(
                      (accomplishment: string, accIndex: number) => {
                        const keyBase = accomplishment
                          .slice(0, 30)
                          .replace(/\s+/g, '-');

                        return (
                          <li
                            key={`${keyBase}-${accIndex}`}
                            className={styles.accomplishment}
                          >
                            {accomplishment}
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
