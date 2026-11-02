import './RoboticArm.css'

const ANGLES = { left: -35, right: 35, still: 0 }

export default function RoboticArm({ pose = 'still', tone = 'neutral' }) {
  const angle = ANGLES[pose] ?? 0
  const description =
    pose === 'still' ? 'centered and not moving' : `swung to the ${pose}`

  return (
    <figure className={`armview armview--${tone}`}>
      <svg viewBox="0 0 400 340" role="img" aria-label={`Virtual robotic arm, ${description}.`}>
        <g className="arm__guides" aria-hidden="true">
          <line x1="200" y1="300" x2="68" y2="112" />
          <line x1="200" y1="300" x2="332" y2="112" />
        </g>

        <g className="arm" style={{ transform: `rotate(${angle}deg)`, transformOrigin: '200px 300px' }}>
          <rect className="arm__link" x="189" y="190" width="22" height="115" rx="11" />
          <rect className="arm__link" x="190" y="95" width="20" height="100" rx="10" />
          <path className="arm__grip" d="M200 98 L184 62 M200 98 L216 62" />
          <circle className="arm__joint" cx="200" cy="190" r="15" />
          <circle className="arm__joint" cx="200" cy="98" r="9" />
        </g>

        <rect className="arm__base" x="140" y="296" width="120" height="26" rx="8" />
        <circle className="arm__joint" cx="200" cy="300" r="11" />

        <text x="50" y="338" className={`arm__label ${pose === 'left' ? 'is-on' : ''}`}>LEFT</text>
        <text x="200" y="338" textAnchor="middle" className={`arm__label ${pose === 'still' ? 'is-on' : ''}`}>STILL</text>
        <text x="350" y="338" textAnchor="end" className={`arm__label ${pose === 'right' ? 'is-on' : ''}`}>RIGHT</text>
      </svg>
      <figcaption className="armview__caption">Virtual robotic arm (illustration)</figcaption>
    </figure>
  )
}