import './GateScale.css'

const MIN = 50
const MAX = 100
const REJECT_BELOW = 91
const EXECUTE_FROM = 98
const OUR_MAX = 91.2

const at = (v) => `${((v - MIN) / (MAX - MIN)) * 100}%`
const span = (a, b) => `${((b - a) / (MAX - MIN)) * 100}%`

export default function GateScale() {
  return (
    <figure className="gate card">
      <figcaption className="gate__title">When does the gate let a command through?</figcaption>

      <div
        className="gate__chart"
        role="img"
        aria-label="Confidence scale from 50 to 100 percent. Below 91 percent the command is rejected, from 91 to below 98 percent the system asks for confirmation, and at 98 percent or higher the command runs. Our highest confidence in testing was 91.2 percent."
      >
        <div className="gate__bar">
          <span className="gate__zone gate__zone--reject" style={{ width: span(MIN, REJECT_BELOW) }} />
          <span className="gate__zone gate__zone--confirm" style={{ width: span(REJECT_BELOW, EXECUTE_FROM) }} />
          <span className="gate__zone gate__zone--execute" style={{ width: span(EXECUTE_FROM, MAX) }} />
        </div>

        <div className="gate__marker" style={{ left: at(OUR_MAX) }}>
          <span className="gate__marker-label">Our highest in testing: 91.2%</span>
        </div>

        <div className="gate__ticks" aria-hidden="true">
          <span style={{ left: at(MIN) }}>50%</span>
          <span style={{ left: at(REJECT_BELOW) }}>91%</span>
          <span style={{ left: at(EXECUTE_FROM) }}>98%</span>
        </div>
      </div>

      <p className="gate__axis">Model confidence</p>

      <ul className="gate__legend">
        <li><i className="dot dot--reject" /><b>Reject</b> below 91%. The arm stays still.</li>
        <li><i className="dot dot--confirm" /><b>Confirm</b> 91% to below 98%. The system asks the user.</li>
        <li><i className="dot dot--execute" /><b>Execute</b> 98% or higher. The command runs.</li>
      </ul>

      <p className="gate__note">
        Thresholds are experimental starting points. On 225 held-out PhysioNet trials, no
        prediction reached 98%, so no command ran automatically.
      </p>
    </figure>
  )
}