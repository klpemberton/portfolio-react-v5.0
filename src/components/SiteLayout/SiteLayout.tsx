import { JSX, ReactNode } from 'react';
import Head from '../SiteHead/SiteHead';
import SiteHeader from '../SiteHeader/SiteHeader';
import SiteFooter from '../SiteFooter';
import styles from './SiteLayout.module.css';

interface SiteLayoutProps {
  children: ReactNode;
}

const SiteLayout = ({ children }: SiteLayoutProps): JSX.Element => {
  return (
    <>
      <Head
        title="Kristine Pemberton"
        description="Welcome to my personal portfolio site and testing ground for new technologies and ideas."
      />
      <a href="#main-content" className={styles['skip-to-main-content']}>
        Skip to main content
      </a>
      <div className={styles.wrapper}>
        <SiteHeader />
        <main id="main-content" className={styles.main}>
          {children}
        </main>
        <SiteFooter />
      </div>
    </>
  );
};

export default SiteLayout;
