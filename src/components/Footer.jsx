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
          Dataset: PhysioNet EEG Motor Movement/Imagery Dataset.
          {/* TODO: добавить официальную цитату или ссылку на датасет */}
        </p>
        <p className="footer__small">
          Mind to Move is a research and educational prototype exploring EEG-based
          brain-computer interaction. It is not a clinically validated medical device
          and is not intended for diagnosis, treatment, or independent real-world
          assistive control.
        </p>
      </div>
    </footer>
  )
}