import { THRESHOLDS, decide, pct } from '../config/gate'

const zones = [
  { key: 'reject', label: 'Reject', range: `below ${pct(THRESHOLDS.confirm)}` },
  { key: 'confirm', label: 'Confirm', range: `${pct(THRESHOLDS.confirm)} to below ${pct(THRESHOLDS.execute)}` },
  { key: 'execute', label: 'Execute', range: `${pct(THRESHOLDS.execute)} or higher` },
]

const armText = { left: 'Moved left', right: 'Moved right', still: 'Staying still' }

function decisionText(decision, gateOn) {
  if (!gateOn) return 'Gate off: the command reaches the arm without a check'
  return {
    execute: 'Execute: the command is accepted',
    confirm: 'Confirm: waiting for the user',
    confirmed: 'Confirmed by the user: the command runs',
    declined: 'Declined by the user: no action',
    reject: 'Reject: the command is blocked',
  }[decision]
}

export default function PredictionPanel({ trial, decision, gateOn, pose, simulation, onConfirm, onDecline }) {
  if (!trial) {
    return <div className="panel panel--empty">Press “Run next trial” to start.</div>
  }

  const match = trial.predicted === trial.asked
  const zone = decide(trial.confidence)

  return (
    <div className="panel" aria-live="polite">
      <dl className="panel__rows">
        <div>
          <dt>Volunteer was asked to imagine</dt>
          <dd>{trial.asked.toUpperCase()} hand</dd>
        </div>
        <div>
          <dt>Model prediction</dt>
          <dd>
            {trial.predicted.toUpperCase()} hand
            <span className={`tag ${match ? 'tag--ok' : 'tag--bad'}`}>
              {match ? 'matches the cue' : 'differs from the cue'}
            </span>
          </dd>
        </div>
        <div>
          <dt>Confidence</dt>
          <dd>
            {pct(trial.confidence)}
            {simulation && <span className="tag">example value</span>}
          </dd>
        </div>
        <div>
          <dt>Gate decision</dt>
          <dd>{decisionText(decision, gateOn)}</dd>
        </div>
        <div>
          <dt>Virtual arm</dt>
          <dd>{armText[pose]}</dd>
        </div>
      </dl>

      <div className={`zones ${gateOn ? '' : 'is-off'}`}>
        {zones.map((z) => (
          <div key={z.key} className={`zone zone--${z.key} ${gateOn && zone === z.key ? 'is-active' : ''}`}>
            <strong>{z.label}</strong>
            <span>{z.range}</span>
          </div>
        ))}
      </div>
      <p className="panel__caption">
        Thresholds are experimental starting points, not established safety limits.
      </p>

      {decision === 'confirm' && (
        <div className="prompt" role="group" aria-label="Simulated confirmation prompt">
          <p>Simulated confirmation: move the arm {trial.predicted.toUpperCase()}?</p>
          <div className="prompt__btns">
            <button type="button" className="btn btn-primary" onClick={onConfirm}>Confirm</button>
            <button type="button" className="btn btn-ghost" onClick={onDecline}>Decline</button>
          </div>
        </div>
      )}
    </div>
  )
}