import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './SiteHeader.module.css';
import { navigationItems } from '../../lib/nav';

const SiteHeader = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link
          href="/"
          className={styles.logo}
          data-page="home"
          data-active={pathname === '/'}
          aria-label="Kristine Pemberton - Home"
        >
          Kristine Pemberton
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles['nav-link']}
              data-page={item.href.replace('/', '')}
              data-active={pathname === item.href}
              aria-current={pathname === item.href ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
