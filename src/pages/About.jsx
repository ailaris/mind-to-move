import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import logo from '../assets/logo.jpeg'
import banner from '../assets/banner.png'
import './About.css'

const stats = [
  { value: '109', label: 'Participants' },
  { value: '4,918', label: 'EEG epochs' },
  { value: '2,480', label: 'Left-hand trials' },
  { value: '2,438', label: 'Right-hand trials' },
  { value: '64', label: 'EEG channels' },
  { value: '128 Hz', label: 'Sampling frequency' },
  { value: '257', label: 'Time samples per epoch' },
]

const left = 2480
const right = 2438
const max = Math.max(left, right)

export default function About() {
  return (
    <>
      {/* ---------- A. HERO ---------- */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__text">
            <h1>Turning imagined movement into meaningful action.</h1>
            <p className="hero__sub">
              Mind to Move explores how brain-computer interface technology could
              translate imagined hand movements into commands for a virtual robotic
              arm using non-invasive EEG signals.
            </p>
            <div className="hero__buttons">
              <a href="#overview" className="btn btn-primary">Explore the Project</a>
              <Link to="/demo" className="btn btn-ghost">Try the Demo</Link>
            </div>
          </div>
          <img className="hero__logo" src={logo} alt="Mind to Move by Synaptix logo" />
        </div>
        <img className="hero__banner" src={banner} alt="" aria-hidden="true" />
      </section>

      {/* ---------- B. OVERVIEW ---------- */}
      <section className="section" id="overview">
        <div className="container">
          <SectionHeading label="Overview" title="Project Overview">
            <p>
              Mind to Move is a research project exploring the possibilities of
              non-invasive brain-computer interfaces. By analyzing EEG signals
              associated with imagined hand movements, we investigate how brain
              activity could be interpreted as commands for an external device.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Our current concept focuses on two motor imagery classes: imagining a
              left-hand movement and imagining a right-hand movement. These signals
              are processed and passed to a machine-learning model, which aims to
              identify the intended movement. A confidence-based decision mechanism
              determines whether a command should be executed or whether the system
              should remain still.
            </p>
          </SectionHeading>

          <div className="grid-3">
            <div className="card">
              <h3>The Input</h3>
              <p>EEG signals associated with imagined hand movements.</p>
            </div>
            <div className="card">
              <h3>The Interpretation</h3>
              <p>Signal processing and machine-learning classification.</p>
            </div>
            <div className="card">
              <h3>The Output</h3>
              <p>A corresponding command for a virtual robotic arm.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- C. PROBLEM & MOTIVATION ---------- */}
      <section className="section">
        <div className="container">
          <SectionHeading label="Why" title="The Problem and Our Motivation">
            <p>
              Many conventional technologies rely on physical movement, touch, or
              speech to interact with devices. For individuals who experience
              significant limitations in voluntary movement, these interaction
              methods may not always be accessible.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Brain-computer interfaces offer an alternative area of research. They
              investigate whether patterns of brain activity can be translated into
              commands without requiring the same physical movements used by
              conventional interfaces.
            </p>
          </SectionHeading>
          <div className="card">
            <h3>Our motivation</h3>
            <p>
              Our motivation is to investigate how neuroscience, engineering, and
              artificial intelligence can work together to create alternative ways
              of interacting with technology. Rather than attempting to build a
              complete assistive system immediately, we focus on understanding and
              demonstrating one important part of the process: recognizing imagined
              movement and translating it into a computer command.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- D. WHO COULD BENEFIT ---------- */}
      <section className="section">
        <div className="container">
          <SectionHeading label="Impact" title="Who Could Benefit?">
            <p>
              These are potential long-term beneficiaries of future developments.
              The current prototype is not yet helping these groups.
            </p>
          </SectionHeading>
          <div className="grid-3">
            <div className="card">
              <h3>People with limited voluntary movement</h3>
              <p>
                BCI technology may eventually provide alternative interaction
                methods for individuals who cannot easily use conventional
                physical interfaces.
              </p>
            </div>
            <div className="card">
              <h3>Assistive Technology Researchers</h3>
              <p>
                The project explores ideas and methods relevant to people
                developing more accessible human-computer interaction systems.
              </p>
            </div>
            <div className="card">
              <h3>Engineers and Developers</h3>
              <p>
                Mind to Move demonstrates how EEG processing, machine learning,
                and interactive systems can be combined in a single pipeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- E. DATASET ---------- */}
      <section className="section">
        <div className="container">
          <SectionHeading label="Data" title="From EEG Signals to Usable Data">
            <p>
              To prepare the EEG data for further analysis, we processed recordings
              from 109 participants using runs 4, 8, and 12 of the PhysioNet EEG
              Motor Movement/Imagery Dataset.
            </p>
          </SectionHeading>

          <div className="stats">
            {stats.map((s) => (
              <div className="stat card" key={s.label}>
                <div className="stat__value">{s.value}</div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="card bars">
            <h3>Class distribution</h3>
            <div className="bar-row">
              <span>Left hand</span>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: `${(left / max) * 100}%` }} />
              </div>
              <span>{left.toLocaleString()}</span>
            </div>
            <div className="bar-row">
              <span>Right hand</span>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: `${(right / max) * 100}%` }} />
              </div>
              <span>{right.toLocaleString()}</span>
            </div>
          </div>

          <p style={{ margin: '1.5rem 0' }}>
            The continuous recordings were band-pass filtered between 8 and 30 Hz.
            We then extracted epochs from 1 to 3 seconds after the event marker,
            focusing on the sustained motor imagery period. The recordings were
            standardized to a unified sampling frequency of 128 Hz.
          </p>

          <details className="card details">
            <summary>Technical details</summary>
            <ul>
              <li>Dataset: PhysioNet EEG Motor Movement/Imagery Dataset</li>
              <li>Selected runs: 4, 8, 12</li>
              <li>Frequency band: 8 to 30 Hz</li>
              <li>Epoch window: 1 to 3 s after the event marker</li>
              <li>Channels: 64</li>
              <li>Sampling frequency: 128 Hz</li>
              <li>Epochs: 4,918 (2,480 left, 2,438 right)</li>
            </ul>
            <h4>Scientific transparency</h4>
            <ul>
              <li>The processed dataset contains two motor imagery classes.</li>
              <li>Rest events (T0) were not included in the extracted dataset.</li>
              <li>All extracted epochs were retained; no additional artifact-rejection step was applied.</li>
              <li>Checking for NaN and infinite values does not establish that all EEG artifacts have been removed.</li>
            </ul>
          </details>
        </div>
      </section>

      {/* ---------- F. WORKFLOW ---------- */}
      <section className="section">
        <div className="container">
          <SectionHeading label="Pipeline" title="How Does Mind to Move Work?">
            <p>
              Mind to Move follows a sequence that begins with EEG signals and ends
              with a potential movement command. Each stage contributes to
              transforming raw brain activity into information that a computer can
              interpret.
            </p>
          </SectionHeading>
          {/* TODO: заменить заглушку на готовую workflow-диаграмму команды */}
          <div className="placeholder">Workflow diagram will be added here</div>
        </div>
      </section>

      {/* ---------- G. EXPERTS ---------- */}
      <section className="section">
        <div className="container">
          <SectionHeading label="Voices" title="Perspectives from Experts" />
          {/* TODO: показывать карточки только с реальными интервью */}
          <div className="placeholder">Expert insights will be added here</div>
        </div>
      </section>

      {/* ---------- H. PRIVACY ---------- */}
      <section className="section">
        <div className="container">
          <SectionHeading label="Responsibility" title="Privacy, Security and Responsible Use" />
          {/* TODO: вставить текст из документа Privacy & Cybersecurity */}
          <div className="grid-3">
            <div className="card"><h3>Data Privacy</h3><p>Placeholder: content from the approved document.</p></div>
            <div className="card"><h3>Secure Data Handling</h3><p>Placeholder: content from the approved document.</p></div>
            <div className="card"><h3>User Consent</h3><p>Placeholder: content from the approved document.</p></div>
            <div className="card"><h3>Potential Risks and Limitations</h3><p>Placeholder: content from the approved document.</p></div>
          </div>
        </div>
      </section>
    </>
  )
}