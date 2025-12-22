import PageContent from '../src/components/PageContent/PageContent';
import ImageGallery from '../src/components/ImageGallery/ImageGallery';
import Animated from '../src/components/Animated/Animated';
import { galleryPhotos } from '../src/components/ImageGallery/data';
import styles from './about.module.css';

const AboutPage = () => {
  return (
    <PageContent>
      <Animated animation="fadeInUp" delay={100} animateOnLoad>
        <h1 className={`page-heading ${styles.heading}`}>
          <span>About Me</span>
        </h1>
      </Animated>

      <div className={styles.content}>
        <Animated animation="fadeInUp" delay={200} animateOnLoad>
          <p className={styles.paragraph}>
            I&apos;m Kristine and I&apos;m a web developer/frontend engineer. I
            began creating websites as a little kid&mdash;here&apos;s my very
            first site,&nbsp;
            <a
              href="http://geocities.ws/purrfectpetzplace/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Purrfect Petz Place
            </a>
            , based on the old Petz PC games (turn on your ad blocker! Someone
            mirrored the Geocities servers long ago and flooded all the sites
            with ads).
          </p>
        </Animated>

        <Animated animation="fadeInUp" delay={300} animateOnLoad>
          <p className={styles.paragraph}>
            I am at my happiest when spending time with animals and nature.
            I&apos;ve found purpose in native ecosystem restoration, which I do
            on my own property as well as by volunteering regularly with local
            non-profit organizations. I'm also running a native plant nursery in
            my backyard so that I can help restore even more native plants to
            the world. In my downtime I enjoy hiking, disc golf, and helping to
            identify observations on iNaturalist.
          </p>
        </Animated>

        <Animated animation="fadeInUp" delay={400} animateOnLoad>
          <p className={styles.paragraph}>
            I love to travel and see new places and things, and have recently
            resided in Morro Bay, California; Spokane, Washington; and now
            Skamania County, Washington on the edge of the awesome Columbia
            River Gorge National Scenic Area where I live with my husband,
            several pets, various forest friends, and a boatload of plants.
          </p>
        </Animated>
      </div>

      <Animated animation="fadeInUp" delay={500} animateOnLoad>
        <ImageGallery images={galleryPhotos} showGallery={true} />
      </Animated>
    </PageContent>
  );
};

export default AboutPage;
