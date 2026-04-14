import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    const els = document.querySelectorAll('.rev');
    const observers = [];
    
    // Reset classes for fresh start on new page
    els.forEach(el => el.classList.remove('in'));

    els.forEach(el => {
      const obs = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          el.classList.add('in');
          obs.disconnect();
        }
      }, { threshold: 0.1 });
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, [location.pathname]);
}
