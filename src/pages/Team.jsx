import SectionHeading from '../components/SectionHeading'
import { team } from '../data/team'
import './Team.css'

// To add the team photo: put it in src/assets/, import it, and assign it here:
// import teamPhoto from '../assets/team-photo.jpg'
const teamPhoto = null

const initials = (name) =>
  name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase()

export default function Team() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading label="Team" title="Meet the team behind Mind to Move">
          <p>
            SynaptiX is a team of five taking part in the Dana Foundation / New York
            Academy of Sciences (NYAS) BrainTech Innovation Challenge. The challenge asks
            teams to design a conceptual brain-computer interface or brain-focused
            wearable. Mind to Move is our design. Each of us took on a different part of
            the project.
          </p>
        </SectionHeading>

        {teamPhoto ? (
          <img className="team__photo" src={teamPhoto} alt="The SynaptiX team" />
        ) : (
          <div className="team__photo team__photo--empty">Team photo goes here</div>
        )}

        <div className="team__grid">
          {team.map((m) => (
            <article className="card member" key={m.name}>
              <div className="member__avatar">
                {m.photo ? <img src={m.photo} alt={m.name} /> : <span>{initials(m.name)}</span>}
              </div>
              <h3>{m.name}</h3>
              <span className="member__role">{m.role}</span>
              <p className="member__area">{m.area}</p>
              <p>{m.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}