import PageContent from '../src/components/PageContent/PageContent';
import Link from 'next/link';
import styles from './_error.module.css';
import { navigationItems } from '../src/lib/nav';

const ErrorPage = () => {
  return (
    <PageContent>
      <h1 className={styles.heading}>
        <span>Something went wrong</span>
      </h1>
      <div className={styles['error-message']}>
        <h2 className={styles['site-map-heading']}>Site Map</h2>
        <ul className={styles['site-map-list']}>
          {navigationItems.map((item) => (
            <li className={styles['site-map-item']} key={item.label}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </PageContent>
  );
};

export default ErrorPage;
