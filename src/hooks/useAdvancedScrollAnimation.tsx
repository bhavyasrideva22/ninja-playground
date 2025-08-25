import { useEffect, useRef, useState, useCallback } from 'react';

type AnimationType = 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'rotateIn';

interface UseAdvancedScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  animationType?: AnimationType;
  delay?: number;
  duration?: number;
  triggerOnce?: boolean;
}

export const useAdvancedScrollAnimation = ({
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  animationType = 'fadeIn',
  delay = 0,
  duration = 600,
  triggerOnce = true
}: UseAdvancedScrollAnimationOptions = {}) => {
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const getAnimationClasses = useCallback(() => {
    const baseClasses = 'transition-all duration-700 ease-out';
    
    if (!isInView) {
      switch (animationType) {
        case 'fadeIn':
          return `${baseClasses} opacity-0`;
        case 'slideUp':
          return `${baseClasses} opacity-0 translate-y-8`;
        case 'slideLeft':
          return `${baseClasses} opacity-0 -translate-x-8`;
        case 'slideRight':
          return `${baseClasses} opacity-0 translate-x-8`;
        case 'scaleIn':
          return `${baseClasses} opacity-0 scale-95`;
        case 'rotateIn':
          return `${baseClasses} opacity-0 rotate-12 scale-95`;
        default:
          return `${baseClasses} opacity-0`;
      }
    }

    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0`;
  }, [isInView, animationType]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasAnimated)) {
          setTimeout(() => {
            setIsInView(true);
            setHasAnimated(true);
          }, delay);
        } else if (!entry.isIntersecting && !triggerOnce) {
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, delay, triggerOnce, hasAnimated]);

  return { ref, isInView, animationClasses: getAnimationClasses() };
};

// Hook for staggered animations
export const useStaggeredAnimation = (
  items: any[],
  options: UseAdvancedScrollAnimationOptions & { staggerDelay?: number } = {}
) => {
  const { staggerDelay = 100, ...animationOptions } = options;
  const [animatedItems, setAnimatedItems] = useState<boolean[]>([]);
  const { ref, isInView } = useAdvancedScrollAnimation(animationOptions);

  useEffect(() => {
    if (isInView) {
      items.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedItems(prev => {
            const newItems = [...prev];
            newItems[index] = true;
            return newItems;
          });
        }, index * staggerDelay);
      });
    }
  }, [isInView, items.length, staggerDelay]);

  return { ref, animatedItems };
};

// Hook for parallax scrolling
export const useParallaxScroll = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * -speed;
        setOffset(rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref, offset };
};

// Hook for smooth reveal animations
export const useSmoothReveal = (options: UseAdvancedScrollAnimationOptions = {}) => {
  const { ref, isInView, animationClasses } = useAdvancedScrollAnimation({
    animationType: 'slideUp',
    threshold: 0.2,
    ...options
  });

  return {
    ref,
    isInView,
    className: `transform transition-all duration-1000 ease-out ${
      isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
    }`
  };
};
