import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import logo from '../assets/logo.jpeg'
import banner from '../assets/banner.png'
import './About.css'
import InteractiveWorkflow from '../components/InteractiveWorkflow'
import workflow from '../assets/workflow.jpeg'

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
          <SectionHeading label="Overview" title="Project overview">
            <p>
              Mind to Move is a research project exploring the possibilities of
              non-invasive brain-computer interfaces. By analyzing EEG signals
              associated with imagined hand movements, we investigate how brain
              activity could be interpreted as commands for an external device.
            </p>
            <p style={{ marginTop: '1rem' }}>
                Our concept focuses on two motor imagery classes: imagining a left-hand
                movement and imagining a right-hand movement. A machine-learning model built
                by our team aims to tell the two classes apart. Each prediction passes through
                a confidence-aware decision layer, which chooses to execute the command, ask
                for confirmation, or reject it.
            </p>
          </SectionHeading>

          <div className="grid-3">
            <div className="card">
              <h3>Input</h3>
              <p>EEG signals associated with imagined hand movements.</p>
            </div>
            <div className="card">
              <h3>Interpretation</h3>
              <p>Signal processing and machine-learning classification.</p>
            </div>
            <div className="card">
              <h3>Output</h3>
              <p>A corresponding command for a virtual robotic arm.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- C. PROBLEM & MOTIVATION ---------- */}
      <section className="section">
        <div className="container">
          <SectionHeading label="Why" title="When should a system choose not to act?">
            <p>
                Brain-computer interfaces use patterns of brain activity to interpret a
                person's intended movement. However, EEG signals are naturally noisy and
                can vary considerably between individuals. As a result, machine-learning
                models may sometimes misinterpret an imagined movement and produce an
                incorrect command.
            </p>

            <p style={{ marginTop: '1rem' }}>
                In assistive technology, an incorrect command can be more problematic
                than receiving no command at all. A robotic device that acts on every
                prediction could respond when the user's actual intention is unclear.
            </p>

            <p style={{ marginTop: '1rem' }}>
                Mind to Move introduces a confidence-aware approach. 
                Instead of automatically executing every prediction, 
                the system evaluates the model's confidence before allowing 
                an action. Depending on the prediction's confidence, it can 
                execute the command, request confirmation, or reject it. We 
                aim to investigate whether this approach can reduce incorrect 
                robotic commands compared with a system that accepts every prediction.
            </p>

            <p style={{ marginTop: '1.5rem', fontWeight: 600 }}>
                Our research question:
            </p>

            <p>
                Can allowing an EEG-based system to reject uncertain predictions reduce
                incorrect robotic commands?
            </p>
        </SectionHeading>
          <div className="card">
            <h3>Our motivation</h3>
            <p>
              We chose this direction after comparing several BrainTech ideas. 
              A motor imagery BCI offered a focused research question that we 
              could investigate using publicly available EEG recordings and a 
              virtual demonstration, without collecting neural data or building 
              physical hardware. We narrowed our concept to two imagined movements 
              and one important challenge: determining when a prediction is reliable 
              enough to trigger an action.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- D. WHO COULD BENEFIT ---------- */}
      <section className="section">
        <div className="container">
          <SectionHeading label="Impact" title="Who could this research matter to?">
            <p>
              Mind to Move explores a potential alternative interaction method for 
              people with significant limitations in arm and hand movement. Other 
              important stakeholders include caregivers, rehabilitation specialists, 
              and researchers working on assistive technologies. Our current prototype 
              is a research demonstration and has not been tested with these groups.
            </p>
            <p style={{ marginTop: '1rem' }}>
                People with limited movement use eye-tracking computers, communication
                devices, and caregiver help today. Mind to Move would sit next to these tools.
                People with movement limitations, caregivers, and rehabilitation specialists
                have not yet shaped this project. 
            </p>
          </SectionHeading>
          <div className="grid-3">
            <div className="card">
              <h3>Adults with severe arm and hand limitations</h3>
              <p>
                Future BCI systems could offer alternative ways 
                to interact with computers and assistive devices 
                for people who experience significant limitations 
                in voluntary movement.
              </p>
            </div>
            <div className="card">
              <h3>Caregivers and rehabilitation specialists</h3>
              <p>
                Their perspectives can help identify practical needs, 
                accessibility requirements, and potential limitations 
                of future assistive BCI systems.
              </p>
            </div>
            <div className="card">
              <h3>BCI and assistive technology researchers</h3>
              <p>
                Our project explores confidence-aware decision-making 
                as one approach to improving the reliability of EEG-based control systems.
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
            We band-pass filtered the continuous recordings between 8 and 30 Hz and cut
            epochs from 1 to 3 seconds after each event marker, the sustained motor
            imagery period. We unified the sampling rate at 128 Hz. We resampled 106
            participants from 160 Hz, and 3 participants already had 128 Hz.
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
              <li>Labels: 2 = T1 (left-hand imagery), 3 = T2 (right-hand imagery)</li>
              <li>Epochs per participant: 45 for 105 participants (range 36 to 57)</li>
              <li>Validation: no NaN or infinite values found</li>
            </ul>
            <h4>Scientific transparency</h4>
            <ul>
              <li>The processed dataset contains two motor imagery classes.</li>
              <li>Rest events (T0) were not included in the extracted dataset.</li>
              <li>All extracted epochs were retained; no additional artifact-rejection step was applied.</li>
              <li>Checking for NaN and infinite values does not establish that all EEG artifacts have been removed.</li>
            </ul>
          </details>
          <div className="card" style={{ marginTop: '1.25rem' }}>
            <h3>What this data cannot show</h3>
            <p>
                The datasets contain prerecorded EEG from healthy volunteers. Our results
                cannot show that Mind to Move would work for people with paralysis or spinal
                cord injuries. The virtual arm is a conceptual demonstration. It does not
                establish real-world safety, usability, or clinical effectiveness.
            </p>
           </div>
        </div>
      </section>

      {/* ---------- F. WORKFLOW ---------- */}
      <section className="section">
        <div className="container">
          <SectionHeading label="Pipeline" title="How does Mind to Move work?">
            <p>
              Mind to Move follows a sequence that begins with EEG signals and ends
              with a potential movement command. Each stage contributes to
              transforming raw brain activity into information that a computer can
              interpret.
            </p>
          </SectionHeading>
          <InteractiveWorkflow diagramSrc={workflow} />
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
      <section className="section" id="privacy">
        <div className="container">
            <SectionHeading label="Responsibility" title="Privacy, security and responsible use">
            <p>
                Brain signals are sensitive data. The points below describe requirements
                for a future system. We have not implemented or tested these protections.
            </p>
            </SectionHeading>

            <div className="grid-3">
            <div className="card">
                <h3>Data privacy</h3>
                <p>
                If someone hacks a device, computer, or stored file, EEG data can
                reveal sensitive details about a person's health or identity. A future
                system should collect only the data it needs, limit access to
                authorized users, encrypt stored recordings, and keep personal EEG
                data away from unnecessary outside services.
                </p>
            </div>
            <div className="card">
                <h3>Secure control and access</h3>
                <p>
                An attacker could manipulate data or connect without permission and
                trigger an unintended movement. Our proposed design aims to require at
                least 98% confidence before a command runs and limits the actions the
                system may perform. A future system should also restrict access to
                authorized users, install updates securely, include an independent
                emergency stop, and reject commands from unknown connections until
                someone checks them.
                </p>
            </div>
            <div className="card">
                <h3>User consent</h3>
                <p>
                A future system should explain errors in plain language before use,
                check each person's capacity to consent case by case, include
                caregivers without replacing the user, and let the user stop at any
                time. Confirmations should use a separate channel such as a button,
                blink, or switch, because the same decoder could misread a yes.
                </p>
            </div>
            <div className="card">
                <h3>Risks and limitations</h3>
                <p>
                A confidence score cannot stop every security problem. Someone who
                interferes with the system could still cause a confident but incorrect
                prediction. Our confidence thresholds are experimental starting points,
                not established safety limits.
                </p>
            </div>
            </div>

            <div className="card layers">
            <h3>Layers of protection</h3>
            <ol>
                <li><strong>Cybersecurity layer.</strong> Protects data and software.</li>
                <li><strong>Confidence-aware safety layer.</strong> Checks how reliable a prediction is.</li>
                <li><strong>Permitted action.</strong> The arm moves only after both layers pass their checks.</li>
            </ol>
            </div>
        </div>
        </section>
    </>
  )
}