import { useEffect, useRef } from 'react';
import './DeepBackground.css';

export default function DeepBackground() {
  const layersRef = useRef([]);

  useEffect(() => {
    let rafId;
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY) < 0.5) return;
      lastY = y;

      // Parallax speeds per layer: farther = slower
      const speeds = [0.07, 0.13, 0.20, 0.05, 0.17, 0.11, 0.09];
      layersRef.current.forEach((el, i) => {
        if (!el) return;
        const shift = y * speeds[i];
        el.style.transform = `translateY(${shift}px)`;
      });
    };

    const loop = () => {
      onScroll();
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="db-root" aria-hidden="true">
      <div className="db-base" />
      <div className="db-vignette" />

      <div className="db-blob db-blob--1" ref={el => layersRef.current[0] = el} />
      <div className="db-blob db-blob--2" ref={el => layersRef.current[1] = el} />
      <div className="db-blob db-blob--3" ref={el => layersRef.current[2] = el} />
      <div className="db-blob db-blob--4" ref={el => layersRef.current[3] = el} />
      <div className="db-blob db-blob--5" ref={el => layersRef.current[4] = el} />
      <div className="db-blob db-blob--6" ref={el => layersRef.current[5] = el} />

      <div className="db-mirror" ref={el => layersRef.current[6] = el} />
    </div>
  );
}
