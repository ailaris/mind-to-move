import SectionHeading from './SectionHeading'
import { perspectives } from '../data/perspectives'
import './Perspectives.css'

export default function Perspectives() {
  const items = perspectives.filter((p) => p.approved)
  if (items.length === 0) return null

  return (
    <section className="section" id="perspectives">
      <div className="container">
        <SectionHeading label="Voices" title="Perspectives from experts and the community">
          <p>
            We asked people outside our team what they think about Mind to Move.
            These are their own words, shown with their permission.
          </p>
        </SectionHeading>

        <div className="persp">
          {items.map((p) => (
            <article className="card persp__card" key={p.id}>
              <span className="persp__kind">{p.kind}</span>

              {p.youtubeId && (
                <div className="persp__video">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${p.youtubeId}`}
                    title={`Video: ${p.name}`}
                    loading="lazy"
                    allow="encrypted-media; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              )}

              {p.photo && <img className="persp__photo" src={p.photo} alt={p.photoAlt} />}

              <h3>{p.name}</h3>
              {p.title && <p className="persp__title">{p.title}</p>}
              <p>{p.intro}</p>
              {p.qa.map((item) => (
                <div key={item.q}>
                    <p className="persp__q">{item.q}</p>
                    <blockquote>{item.a}</blockquote>
                </div>
                ))}
               {p.note && <p className="persp__note">{p.note}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}