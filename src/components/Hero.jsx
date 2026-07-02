export default function Hero() {
  return (
    <section style={{ textAlign: 'center', marginBottom: '6rem' }}>
      <p style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem', color: 'gray' }}>
        Introducing
      </p>
      <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>
        Boxy Regular
      </h2>
      
      {/* The massive showcase character */}
      <div 
        className="font-boxy" 
        style={{ 
          fontSize: '25vw', 
          lineHeight: '1', 
          color: 'var(--accent-color)',
          userSelect: 'none'
        }}
      >
        Ag
      </div>
    </section>
  )
}