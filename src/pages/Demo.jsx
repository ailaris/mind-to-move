import { useEffect, useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import RoboticArm from '../components/RoboticArm'
import PredictionPanel from '../components/PredictionPanel'
import { getTrials, IS_SIMULATION } from '../services/predictionService'
import { decide } from '../config/gate'
import './Demo.css'

const emptyTally = { runs: 0, moved: 0, wrong: 0 }

const toneFor = (decision) =>
  ({ execute: 'success', confirmed: 'success', confirm: 'warning', reject: 'danger', declined: 'danger' }[decision] ?? 'neutral')

export default function Demo() {
  const [trials, setTrials] = useState([])
  const [next, setNext] = useState(0)
  const [gateOn, setGateOn] = useState(true)
  const [current, setCurrent] = useState(null)
  const [decision, setDecision] = useState(null)
  const [pose, setPose] = useState('still')
  const [tally, setTally] = useState(emptyTally)

  useEffect(() => {
    getTrials().then(setTrials)
  }, [])

  const waiting = decision === 'confirm'

  const moveArm = (trial) => {
    setPose(trial.predicted)
    setTally((t) => ({
      ...t,
      moved: t.moved + 1,
      wrong: t.wrong + (trial.predicted === trial.asked ? 0 : 1),
    }))
  }

  const runNext = () => {
    if (!trials.length) return
    const trial = trials[next % trials.length]
    const result = gateOn ? decide(trial.confidence) : 'execute'
    setNext(next + 1)
    setCurrent(trial)
    setDecision(result)
    setTally((t) => ({ ...t, runs: t.runs + 1 }))
    if (result === 'execute') moveArm(trial)
    else setPose('still')
  }

  const confirm = () => {
    setDecision('confirmed')
    moveArm(current)
  }

  const decline = () => {
    setDecision('declined')
    setPose('still')
  }

  const reset = () => {
    setNext(0)
    setCurrent(null)
    setDecision(null)
    setPose('still')
    setTally(emptyTally)
  }

  const toggleGate = () => {
    setGateOn(!gateOn)
    reset()
  }

  return (
    <section className="section">
      <div className="container">
        <SectionHeading label="Demo" title="Experience Mind to Move">
          <p>
            Replay example EEG trials through the confidence gate. Each trial shows what
            the volunteer was asked to imagine, what a model predicted, and whether the
            gate let the command reach a virtual robotic arm.
          </p>
        </SectionHeading>

        {IS_SIMULATION && (
          <div className="demo__banner" role="note">
            <strong>Simulation mode.</strong> The trials below are illustrative examples.
            They are not live EEG and not real model predictions, and the confidence
            values say nothing about our model's accuracy.
          </div>
        )}

        <div className="demo">
          <div className="card demo__controls">
            <h3>Trial</h3>
            <div className="cue">
              <span>The volunteer is asked to imagine</span>
              <strong>{current ? `${current.asked.toUpperCase()} hand` : 'No trial yet'}</strong>
            </div>

            <div className="demo__buttons">
              <button type="button" className="btn btn-primary" onClick={runNext} disabled={waiting || !trials.length}>
                Run next trial
              </button>
              <button type="button" className="btn btn-ghost" onClick={reset}>
                Reset
              </button>
            </div>

            <label className="switch">
              <input type="checkbox" role="switch" checked={gateOn} onChange={toggleGate} />
              <span className="switch__track" aria-hidden="true" />
              <span>Confidence gate {gateOn ? 'on' : 'off'}</span>
            </label>
            <p className="demo__hint">
              {gateOn
                ? 'The gate checks confidence before the arm moves.'
                : 'Every prediction reaches the arm, like a conventional system.'}
            </p>

            <div className="tally">
              <div><strong>{tally.runs}</strong><span>Trials run</span></div>
              <div><strong>{tally.moved}</strong><span>Arm moved</span></div>
              <div><strong>{tally.wrong}</strong><span>Wrong moves</span></div>
            </div>
            <p className="demo__hint">A wrong move means the arm swung opposite to what the volunteer was asked to imagine.</p>
          </div>

          <div className="card demo__stage">
            <RoboticArm pose={pose} tone={toneFor(decision)} />
            <PredictionPanel
              trial={current}
              decision={decision}
              gateOn={gateOn}
              pose={pose}
              simulation={IS_SIMULATION}
              onConfirm={confirm}
              onDecline={decline}
            />
          </div>
        </div>

        <div className="card demo__note">
          <h3>About the “still” state</h3>
          <p>
            Our processed dataset contains two classes, left-hand and right-hand imagery.
            It has no rest class. The arm stays still when the gate blocks a command or
            the user declines one, and the model does not predict rest.
          </p>
        </div>
      </div>
    </section>
  )
}