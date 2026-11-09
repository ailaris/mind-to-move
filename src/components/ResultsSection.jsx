import SectionHeading from './SectionHeading'
import './ResultsSection.css'
import chart1 from '../assets/chart1_confidence.png'
import chart2 from '../assets/chart2_commands.png'
import chart3 from '../assets/chart3_accuracy.png'

const rows = [
  { dataset: 'PhysioNet test', people: '5', trials: '225', bal: '53.5%', exec: '0', confirm: '1', reject: '224' },
  { dataset: 'BCI IV-2a (external)', people: '9', trials: '1,163', bal: '63.7%', exec: '0', confirm: '3', reject: '1,160' },
]

export default function ResultsSection() {
  return (
    <section className="section" id="results">
      <div className="container">
        <SectionHeading label="Results" title="What our model achieved">
          <p>
            We trained a linear SVM on three motor-cortex electrodes and tested it on
            participants it never saw during training. The scores sit close to chance
            level. The confidence gate let no command run automatically.
          </p>
        </SectionHeading>

        <div className="grid-3">
          <div className="card">
            <h3>Accuracy is modest</h3>
            <p>
              On five held-out PhysioNet participants, the model classified 121 of 225
              trials correctly (53.8%, balanced accuracy 53.5%). On the external BCI
              Competition IV 2a set it reached 63.7% balanced accuracy.
            </p>
          </div>

          <div className="card">
            <h3>The gate blocked almost everything</h3>
            <p>
              The highest confidence on the PhysioNet test was 91.2%. No trial reached
              the 98% needed to run automatically. The gate rejected 224 of 225 trials
              and asked for confirmation once.
            </p>
          </div>

          <div className="card">
            <h3>Wrong commands stayed away from the arm</h3>
            <p>
              If every prediction went through, the arm would have moved the wrong way
              on 104 of 225 trials. With the gate, no wrong command reached the arm.
              The gate also rejected 120 of the 121 correct predictions and sent the
              other one to confirmation, so the system cannot yet control an arm in a
              useful way.
            </p>
          </div>
        </div>

        <div className="results__charts">
          <figure className="results__chart">
            <a href={chart3} target="_blank" rel="noreferrer" aria-label="Open the accuracy chart in full size">
              <img
                src={chart3}
                loading="lazy"
                alt="Bar chart of balanced accuracy. Validation 50.6 percent, PhysioNet test 53.5 percent, external BCI IV-2a set 63.7 percent. A dashed line marks chance level at 50 percent."
              />
            </a>
            <figcaption>
              Accuracy stays close to chance level. The 95% interval for the PhysioNet
              test accuracy runs from 47.3% to 60.3%.
            </figcaption>
          </figure>

          <figure className="results__chart">
            <a href={chart1} target="_blank" rel="noreferrer" aria-label="Open the confidence chart in full size">
              <img
                src={chart1}
                loading="lazy"
                alt="Histogram of model confidence on 225 PhysioNet test trials. Most trials sit between 50 and 80 percent. The highest confidence is 91.2 percent, and no trial reaches the 98 percent execute threshold."
              />
            </a>
            <figcaption>
              The highest confidence on the test set was 91.2%, so no trial reached the
              98% needed to run automatically.
            </figcaption>
          </figure>

          <figure className="results__chart results__chart--wide">
            <a href={chart2} target="_blank" rel="noreferrer" aria-label="Open the commands chart in full size">
              <img
                src={chart2}
                loading="lazy"
                alt="Stacked bar chart. Without the gate, 225 commands reach the arm: 121 correct and 104 wrong. With the gate, no command runs automatically. 224 trials are rejected, 120 of them correct, and one correct trial goes to confirmation."
              />
            </a>
            <figcaption>
              Without the gate, 104 of 225 commands would have moved the arm the wrong
              way. With the gate, no command ran automatically. It rejected 120 of the
              121 correct predictions and sent one to confirmation.
            </figcaption>
          </figure>
        </div>

        <div className="card results__table-card">
          <h3>Gate decisions at 98% and 91%</h3>
          <div className="results__scroll">
            <table className="results__table">
              <thead>
                <tr>
                  <th>Test set</th>
                  <th>People</th>
                  <th>Trials</th>
                  <th>Balanced accuracy</th>
                  <th>Execute</th>
                  <th>Confirm</th>
                  <th>Reject</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.dataset}>
                    <td>{r.dataset}</td>
                    <td>{r.people}</td>
                    <td>{r.trials}</td>
                    <td>{r.bal}</td>
                    <td>{r.exec}</td>
                    <td>{r.confirm}</td>
                    <td>{r.reject}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card results__limits">
          <h3>What these results do not show</h3>
          <ul>
            <li>Five test participants are a small sample. We ran no formal test of whether the result differs from chance.</li>
            <li>The model trained on participants S001 to S035, three electrodes (C3, Cz, C4) and 160 Hz. It did not use the 109-participant export described in the Dataset section.</li>
            <li>The recordings come from healthy volunteers. The results say nothing about people with paralysis.</li>
            <li>The probabilities were no better than a constant 50% guess, so the gate rests on weak confidence estimates.</li>
            <li>More participants or more electrodes could change the outcome. We have not tested either.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}