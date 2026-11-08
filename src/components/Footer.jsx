import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <strong>Mind to Move</strong>
            <p>A project by SynaptiX</p>
          </div>
          <nav className="footer__links" aria-label="Footer">
            <Link to="/">About</Link>
            <Link to="/demo">Demo</Link>
            <Link to="/future">Future</Link>
            <Link to="/team">Team</Link>
          </nav>
        </div>

        <p className="footer__small">
            Dataset: Schalk, G. (2009). EEG Motor Movement/Imagery Dataset (version
            1.0.0). PhysioNet.{' '}
            <a href="https://doi.org/10.13026/C28G6P" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>
                doi.org/10.13026/C28G6P
            </a>
            . Recorded with BCI2000 (Schalk et al., 2004).
        </p>
        <p className="footer__small">
          Mind to Move is a SynaptiX project for the Dana Foundation / NYAS BrainTech Innovation Challenge.
          It is a research and educational prototype exploring EEG-based
          brain-computer interaction. It is not a clinically validated medical device
          and is not intended for diagnosis, treatment, or independent real-world
          assistive control.
        </p>
        <p className="footer__small">
          External test data: BCI Competition IV dataset 2a (Tangermann et al., 2012, Frontiers in Neuroscience, 6:55).
        </p>
      </div>
    </footer>
  )
}