export default function CharacterMap() {
  // A quick array of standard characters to display
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?@#%&*()'.split('')

  return (
    <section style={{ paddingBottom: '4rem' }}>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
        Character Map
      </h3>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
        gap: '1rem'
      }}>
        {chars.map((char, index) => (
          <div 
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              aspectRatio: '1',
              border: '1px solid var(--border-color)',
              fontSize: '2.5rem',
              color: 'var(--text-color)',
              transition: 'all 0.2s ease',
              cursor: 'default'
            }}
            className="font-boxy"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--text-color)';
              e.currentTarget.style.color = 'var(--bg-color)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--text-color)';
            }}
          >
            {char}
          </div>
        ))}
      </div>
    </section>
  )
}