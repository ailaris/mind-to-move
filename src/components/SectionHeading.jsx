export default function SectionHeading({ label, title, children }) {
  return (
    <div style={{ marginBottom: '2rem', maxWidth: '720px' }}>
      {label && (
        <span
          style={{
            color: 'var(--accent-2)',
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          {label}
        </span>
      )}
      <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', margin: '0.5rem 0 1rem' }}>
        {title}
      </h2>
      {children}
    </div>
  )
}