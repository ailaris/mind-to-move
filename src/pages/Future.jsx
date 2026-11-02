import SectionHeading from '../components/SectionHeading'
import { stages, safetyPoints } from '../data/future'
import './Future.css'

export default function Future() {
  return (
    <>
      {/* ---------- ROADMAP ---------- */}
      <section className="section">
        <div className="container">
          <SectionHeading label="Future" title="Beyond movement: what's next?">
            <p>
              Mind to Move currently explores two imagined movements, left hand and
              right hand. A system like this could one day support more commands and
              everyday devices. The stages below are possibilities. Our prototype does
              none of them today.
            </p>
          </SectionHeading>

          <ol className="roadmap">
            {stages.map((s) => (
              <li className="stage" key={s.id}>
                <div className="stage__head">
                  <span className="stage__tag">{s.tag}</span>
                  <h3 className="stage__title">{s.title}</h3>
                  <p>{s.intro}</p>
                </div>
                <div className="grid-3">
                  {s.items.map((it) => (
                    <div className="card" key={it.title}>
                      <h4>{it.title}</h4>
                      <p>{it.text}</p>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- SAFETY ---------- */}
      <section className="section">
        <div className="container">
          <SectionHeading label="Responsibility" title="Safety comes before capability">
            <p>
              Some uses carry serious consequences if the system triggers them by
              accident. Contacting emergency services is one example. We treat
              these uses as long-term possibilities. They would need further
              validation, a reliable confirmation method and strong safeguards.
              Our prototype cannot perform any of these actions.
            </p>
          </SectionHeading>
          <div className="grid-3">
            {safetyPoints.map((p) => (
              <div className="card" key={p.title}>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ---------- EXPERTS ---------- */}
      <section className="section">
        <div className="container">
          <SectionHeading label="Voices" title="Expert perspectives on the future" />
          {/* TODO: add real interview statements here, only if an expert discussed future applications */}
          <div className="placeholder">Expert insights will be added here</div>
        </div>
      </section>
    </>
  )
}