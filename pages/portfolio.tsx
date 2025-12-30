import PageContent from '../src/components/PageContent/PageContent';
import ImageGallery from '../src/components/ImageGallery/ImageGallery';
import Animated from '../src/components/Animated/Animated';
import WebProjects from '../src/components/WebProjects/WebProjects';
import EcologyProjects from '../src/components/EcologyProjects/EcologyProjects';
import { useInView } from '../src/hooks/useInView';
import styles from './portfolio.module.css';
import { printPortfolioPhotos } from '../src/components/ImageGallery/data';

const PortfolioPage = () => {
  const { ref: galleryRef, isVisible: showGallery } = useInView({
    threshold: 0.5,
    rootMargin: '100px',
    triggerOnce: true,
  });

  return (
    <PageContent>
      <Animated animation="fadeInUp" delay={100} animateOnLoad>
        <h1 className={styles.heading}>
          <span>Portfolio</span>
        </h1>
      </Animated>

      <Animated animation="fadeInUp" delay={200} animateOnLoad>
        <h2 className={styles.subheading}>
          <span>Web</span>
        </h2>
      </Animated>
      <WebProjects />

      <Animated animation="fadeInUp" delay={200} animateOnLoad>
        <h2 className={styles.subheading}>
          <span>Ecology</span>
        </h2>
      </Animated>
      <Animated animation="fadeInUp" delay={250} animateOnLoad>
        <p className={styles.paragraph}>
          I am passionate about restoring native ecosystems, protecting
          watersheds, preserving old-growth forests, and saving the salmon.
        </p>
      </Animated>

      <EcologyProjects />

      <Animated animation="fadeInUp" delay={950} animateOnLoad>
        <h2 className={styles.subheading}>
          <span>Print</span>
        </h2>
      </Animated>
      <Animated animation="fadeInUp" delay={1000} animateOnLoad>
        <p className={styles.paragraph}>
          I&apos;ve also dabbled in PhotoShop and InDesign. Below are some items
          I&apos;ve designed for print media.
        </p>
      </Animated>

      <Animated animation="fadeInUp" delay={1100} animateOnLoad>
        <ImageGallery
          images={printPortfolioPhotos}
          ref={galleryRef}
          showGallery={showGallery}
        />
      </Animated>
    </PageContent>
  );
};

export default PortfolioPage;
