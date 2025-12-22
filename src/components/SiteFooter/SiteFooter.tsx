import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './SiteFooter.module.css';

const SiteFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Kristine Pemberton</p>
        </div>
        <div className={styles['social-links']}>
          <a
            href="https://github.com/klpemberton"
            target="_blank"
            rel="noopener noreferrer"
            className={styles['social-link']}
            aria-label="GitHub"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/klpemberton/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles['social-link']}
            aria-label="LinkedIn"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
