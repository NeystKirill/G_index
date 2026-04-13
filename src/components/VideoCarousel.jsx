import { useState, useEffect, useRef } from 'react';
import { useCarouselData, CAROUSEL_DURATION } from '../data/videoCarousel';
import './VideoCarousel.css';

const DURATION = CAROUSEL_DURATION;

export default function VideoCarousel() {
  const { SLIDES, CAROUSEL_LABEL } = useCarouselData();
  const TOTAL = SLIDES.length;
  const [cur, setCur] = useState(0);
  const pbarRef = useRef(null);
  const tmoRef = useRef(null);

  const goSlide = (idx) => {
    setCur(idx);
    if (pbarRef.current) {
      pbarRef.current.style.transition = 'none';
      pbarRef.current.style.width = '0%';
      requestAnimationFrame(() => requestAnimationFrame(() => {
        if (pbarRef.current) {
          pbarRef.current.style.transition = `width ${DURATION}ms linear`;
          pbarRef.current.style.width = '100%';
        }
      }));
    }
    clearTimeout(tmoRef.current);
    tmoRef.current = setTimeout(() => goSlide((idx + 1) % TOTAL), DURATION);
  };

  useEffect(() => {
    if (pbarRef.current) {
      pbarRef.current.style.transition = `width ${DURATION}ms linear`;
      pbarRef.current.style.width = '100%';
    }
    tmoRef.current = setTimeout(() => goSlide(1), DURATION);
    return () => clearTimeout(tmoRef.current);
  }, []);

  return (
    <>
      <div className="vcarousel">
        <div className="vc vtl"></div>
        <div className="vc vtr"></div>
        <div className="vc vbl"></div>
        <div className="vc vbr"></div>
        <div className="vbadge">
          <div className="vbdot"></div>
          <span>{SLIDES[cur].badge}</span>
        </div>

        <div className="vslides">
          {SLIDES.map((slide, i) => (
            <div key={i} className={`vslide${i === cur ? ' active' : ''}`}>
              <iframe
                src={slide.src}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              {/* Overlay blocks YouTube UI interactions */}
              <div className="vslide-overlay"></div>
            </div>
          ))}

          <div className="vdots">
            {SLIDES.map((_, i) => (
              <div
                key={i}
                className={`vd${i === cur ? ' on' : ''}`}
                onClick={() => goSlide(i)}
              />
            ))}
          </div>
        </div>

        <div className="vprogress">
          <div className="vpbar" ref={pbarRef}></div>
        </div>
      </div>

      <div className="vcap">
        <span className="vct">{SLIDES[cur].caption}</span>
        <span className="vcd">{CAROUSEL_LABEL}</span>
      </div>
    </>
  );
}
