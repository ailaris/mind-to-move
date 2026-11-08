import { useEffect, useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import './Demo.css'

export default function Demo() {
  const [height, setHeight] = useState(1250)

  // the 3D page tells us how tall it is, so the frame never needs its own scrollbar
  useEffect(() => {
    const onMessage = (e) => {
      if (e.origin === window.location.origin && e.data?.type === 'mtm-height') {
        setHeight(e.data.h)
      }
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  return (
    <section className="section">
      <div className="container">
        <SectionHeading label="Demo" title="Experience Mind to Move">
          <p>
            Replay recorded predictions from our model through the confidence gate.
            Each trial shows what the volunteer was asked to imagine, what the model
            predicted, and whether the gate let the command reach a virtual robotic
            arm. You can also send your own command to see the arm move.
          </p>
        </SectionHeading>

        <iframe
          className="demo-frame"
          src="/arm-3d.html"
          title="Mind to Move demo with a 3D virtual robotic arm"
          style={{ height }}
        />

        <div className="card demo__note">
          <h3>About the still state</h3>
          <p>
            Our processed dataset contains two classes, left-hand and right-hand
            imagery. It has no rest class. The arm stays still when the gate blocks a
            command or the user declines one, and the model does not predict rest.
          </p>
        </div>
      </div>
    </section>
  )
}
