import { ReactNode, useEffect, useState } from 'react';
import { useInView } from '../../hooks/useInView';
import styles from './Animated.module.css';

interface AnimatedProps {
  children: ReactNode;
  animation?:
    | 'fadeIn'
    | 'fadeInUp'
    | 'fadeInDown'
    | 'fadeInLeft'
    | 'fadeInRight'
    | 'scaleIn';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  animateOnLoad?: boolean;
}

const Animated = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 400,
  threshold = 0.1,
  className = '',
  animateOnLoad = false,
}: AnimatedProps) => {
  const { ref, isVisible: isVisibleFromScroll } = useInView({
    threshold,
    triggerOnce: true,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (animateOnLoad) {
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    }
  }, [animateOnLoad]);

  const visible = animateOnLoad ? isVisible : isVisibleFromScroll;

  return (
    <div
      ref={ref}
      className={`${styles.animated} ${styles[animation]} ${className}`}
      data-visible={visible}
      style={{
        '--animation-delay': `${delay}ms`,
        '--animation-duration': `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default Animated;
