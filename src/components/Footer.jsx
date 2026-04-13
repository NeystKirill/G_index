import { useFooterData } from '../data/footer';
import './Footer.css';

export default function Footer() {
  const { FOOTER_COPYRIGHT, FOOTER_STATUS } = useFooterData();
  return (
    <footer>
      <div className="fi">
        <div className="fbrand">
          <img className="fli" src="/g-index-logo.png" alt="G-Index" />
          <div className="fbt"><span className="fgi">G-Index</span> Hub Kazakhstan</div>
        </div>
        <div className="fseal">G</div>
        <div className="fcp">{FOOTER_COPYRIGHT}<br />{FOOTER_STATUS}</div>
      </div>
    </footer>
  );
}
