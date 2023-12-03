import React, { useEffect, useState, useRef } from 'react';
import './type.css';

function RowNumber() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTypingDone, setIsTypingDone] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const onAnimationEnd = () => {
    setIsTypingDone(true);
  };

  const textWidth = ref.current ? ref.current.offsetWidth : 0;

  return (
    <h5 ref={ref} className={`${isVisible ? 'type-animation' : ''} ${isTypingDone ? 'is-typing-done' : ''}`} onAnimationEnd={onAnimationEnd} style={{ '--text-width': `${textWidth}px` }}>
      4
    </h5>
  );
}

export default RowNumber;