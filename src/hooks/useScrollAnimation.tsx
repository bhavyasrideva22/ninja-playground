import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
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
  }, [threshold]);

  return { ref, isInView };
};

export const useStaggerAnimation = (items: any[], delay = 100) => {
  const [animatedItems, setAnimatedItems] = useState<boolean[]>([]);
  const { ref, isInView } = useScrollAnimation();

  useEffect(() => {
    if (isInView) {
      items.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedItems(prev => {
            const newItems = [...prev];
            newItems[index] = true;
            return newItems;
          });
        }, index * delay);
      });
    }
  }, [isInView, items.length, delay]);

  return { ref, animatedItems };
};
