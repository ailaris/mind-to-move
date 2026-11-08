import SectionHeading from './SectionHeading'
import './ResultsSection.css'

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
            level. The confidence gate responded by holding almost every command back.
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
              The gate also held back nearly all of the 121 correct predictions, so the
              system cannot yet control an arm in a useful way.
            </p>
          </div>
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
            <li>Five test participants are a small sample. We did not test whether the result differs reliably from chance.</li>
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
