import { useState } from 'react'
import { Link } from 'react-router-dom'
import { THRESHOLDS } from '../config/gate'
import './GateSlider.css'

const MIN = 50
const MAX = 100
const OUR_MAX = 91.2

const asPercent = (x) => Math.round(x * 1000) / 10
const CONFIRM_AT = asPercent(THRESHOLDS.confirm)
const EXECUTE_AT = asPercent(THRESHOLDS.execute)
const pos = (v) => ((v - MIN) / (MAX - MIN)) * 100

const STATES = {
  reject: { label: 'REJECT', line: 'The command is blocked and the arm stays still.' },
  confirm: { label: 'CONFIRM', line: 'The system asks the user to confirm before anything moves.' },
  execute: { label: 'EXECUTE', line: 'The command runs and the arm moves.' },
}

const decide = (v) => (v >= EXECUTE_AT ? 'execute' : v >= CONFIRM_AT ? 'confirm' : 'reject')

export default function GateSlider() {
  const [value, setValue] = useState(62)
  const state = decide(value)
  const s = STATES[state]

  const armText =
    state === 'execute'
      ? 'Virtual arm swinging'
      : state === 'confirm'
        ? 'Virtual arm still, waiting for confirmation'
        : 'Virtual arm still'

  return (
    <div
      className={`card gslider gslider--${state}`}
      style={{ '--p1': pos(CONFIRM_AT), '--p2': pos(EXECUTE_AT), '--pm': pos(OUR_MAX) }}
    >
      <p className="gslider__title">When does the gate let a command through?</p>

      <div className="gslider__readout">
        <div className="gslider__value-box">
          <span className="gslider__value">{value.toFixed(1)}%</span>
          <span className="gslider__caption">Model confidence</span>
        </div>

        <div className="gslider__state" aria-live="polite">
          <strong>{s.label}</strong>
          <span>{s.line}</span>
        </div>

        <svg className="gslider__arm" viewBox="0 0 120 120" role="img" aria-label={armText}>
          <rect className="g-base" x="30" y="104" width="60" height="10" rx="4" />
          <g
            className="g-arm"
            style={{
              transform: `rotate(${state === 'execute' ? 35 : 0}deg)`,
              transformOrigin: '60px 106px',
            }}
          >
            <rect className="g-link" x="54" y="56" width="12" height="52" rx="6" />
            <rect className="g-link" x="55" y="20" width="10" height="42" rx="5" />
            <path className="g-grip" d="M60 22 L52 6 M60 22 L68 6" />
          </g>
          {state === 'confirm' && (
            <text className="g-q" x="88" y="34">?</text>
          )}
        </svg>
      </div>

      <div className="gslider__track">
        <div className="gslider__marker" aria-hidden="true">
          <span>Our highest in testing: {OUR_MAX}%</span>
        </div>

        <input
          type="range"
          min={MIN}
          max={MAX}
          step="0.1"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          aria-label="Model confidence"
          aria-valuetext={`${value.toFixed(1)} percent, ${state}`}
        />

        <div className="gslider__ticks" aria-hidden="true">
          <span className="t-min">50%</span>
          <span className="t-confirm">{CONFIRM_AT}%</span>
          <span className="t-exec">{EXECUTE_AT}%</span>
        </div>
      </div>

      <ul className="gslider__legend">
        <li className={state === 'reject' ? 'is-on' : ''}>
          <i className="dot dot--reject" /><b>Reject</b> below {CONFIRM_AT}%
        </li>
        <li className={state === 'confirm' ? 'is-on' : ''}>
          <i className="dot dot--confirm" /><b>Confirm</b> {CONFIRM_AT}% to below {EXECUTE_AT}%
        </li>
        <li className={state === 'execute' ? 'is-on' : ''}>
          <i className="dot dot--execute" /><b>Execute</b> {EXECUTE_AT}% or higher
        </li>
      </ul>

      <div className="gslider__actions">
        <button type="button" className="btn btn-ghost" onClick={() => setValue(OUR_MAX)}>
          Jump to our highest: {OUR_MAX}%
        </button>
        <Link to="/demo" className="btn btn-primary">See it on real predictions</Link>
      </div>

      <p className="gslider__note">
        Drag to see how the gate decides. This is an illustration, not live model output.
        On our 225 test trials, no prediction reached {EXECUTE_AT}%. Thresholds are
        experimental starting points.
      </p>
    </div>
  )
}