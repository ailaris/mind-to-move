import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { stops } from '../data/workflowSteps'
import './InteractiveWorkflow.css'

const layerIndex = stops.findIndex((s) => s.kind === 'layer')
const stepStops = stops.map((s, i) => ({ ...s, i })).filter((s) => s.kind === 'step')
const slug = (text) => text.toLowerCase().replace(/\s+/g, '-')

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

export default function InteractiveWorkflow({ diagramSrc }) {
  const [index, setIndex] = useState(0)
  const trackRef = useRef(null)
  const nodeRefs = useRef({})
  const current = stops[index]
  const last = stops.length - 1

  const go = (i) => setIndex(Math.min(Math.max(i, 0), last))

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') go(index + 1)
    if (e.key === 'ArrowLeft') go(index - 1)
  }

  useEffect(() => {
    const track = trackRef.current
    const node = nodeRefs.current[current.id]
    if (!track || !node) return
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    track.scrollTo({
      left: node.offsetLeft - track.clientWidth / 2 + node.clientWidth / 2,
      behavior: calm ? 'auto' : 'smooth',
    })
  }, [current.id])

  const layerOn =
    index === layerIndex ||
    (current.kind === 'step' && current.number >= 2 && current.number <= 6)

  return (
    <div className="wf" onKeyDown={onKeyDown}>
      <p className="wf__hint">Select a step or press Next. The arrow keys work too.</p>

      <ol className="wf__track" ref={trackRef} aria-label="Pipeline steps">
        {stepStops.map((s) => (
          <li
            key={s.id}
            className={`wf__step ${s.i < index ? 'is-done' : ''} ${s.i === index ? 'is-active' : ''}`}
          >
            <button
              type="button"
              className="wf__node"
              ref={(el) => { nodeRefs.current[s.id] = el }}
              onClick={() => go(s.i)}
              aria-current={s.i === index ? 'step' : undefined}
            >
              <span className="wf__dot">{s.number}</span>
              <span className="wf__label">{s.short}</span>
            </button>
          </li>
        ))}
      </ol>

      <button
        type="button"
        className={`wf__rail ${layerOn ? 'is-on' : ''} ${index === layerIndex ? 'is-current' : ''}`}
        onClick={() => go(layerIndex)}
      >
        <ShieldIcon />
        <span>Cybersecurity and privacy layer</span>
        <span className="wf__rail-hint">{index === layerIndex ? 'Viewing' : 'Open'}</span>
      </button>

      <div aria-live="polite">
        <article className="wf__panel" key={current.id}>
          {current.kind === 'step' && (
            <span className="wf__ghost" aria-hidden="true">
              {String(current.number).padStart(2, '0')}
            </span>
          )}

          <div className="wf__meta">
            <span className="wf__kicker">
              {current.kind === 'step'
                ? `Step ${current.number} of ${stepStops.length}`
                : 'Protection layer'}
            </span>
            <span className={`wf__status wf__status--${slug(current.status)}`}>
              {current.status}
            </span>
          </div>

          <h3>{current.title}</h3>
          <p className="wf__summary">{current.summary}</p>

          <ul className="wf__list">
            {current.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>

          {current.why && (
            <div className="wf__callout">
              <strong>Why it works</strong>
              <p>{current.why}</p>
            </div>
          )}

          {current.outcomes && (
            <div className="wf__outcomes">
              {current.outcomes.map((o) => (
                <div key={o.label} className={`wf__outcome wf__outcome--${o.tone}`}>
                  <span className="wf__outcome-rule">{o.rule}</span>
                  <strong>{o.label}</strong>
                  <p>{o.text}</p>
                </div>
              ))}
            </div>
          )}

          {current.note && <p className="wf__note">{current.note}</p>}

          {current.cta &&
            (current.cta.to ? (
              <Link to={current.cta.to} className="btn btn-primary">{current.cta.label}</Link>
            ) : (
              <a href={current.cta.href} className="btn btn-ghost">{current.cta.label}</a>
            ))}
        </article>
      </div>

      <div className="wf__controls">
        <button type="button" className="btn btn-ghost" onClick={() => go(index - 1)} disabled={index === 0}>
          Back
        </button>
        <div
          className="wf__progress"
          role="progressbar"
          aria-label="Progress through the workflow"
          aria-valuemin={1}
          aria-valuemax={stops.length}
          aria-valuenow={index + 1}
        >
          <span style={{ width: `${((index + 1) / stops.length) * 100}%` }} />
        </div>
        <span className="wf__count">{index + 1} / {stops.length}</span>
        <button type="button" className="btn btn-primary" onClick={() => go(index + 1)} disabled={index === last}>
          Next
        </button>
      </div>

      {diagramSrc && (
        <a className="wf__full" href={diagramSrc} target="_blank" rel="noreferrer">
          Open the full workflow diagram
        </a>
      )}
    </div>
  )
}