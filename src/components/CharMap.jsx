export default function CharacterMap() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?@#%&*()'.split('')

  return (
    <section>
      <h3 className="section-title">Character Map</h3>
      
      <div className="char-map-grid">
        {chars.map((char, index) => (
          <div 
            key={index}
            className="font-boxy char-box"
          >
            {char}
          </div>
        ))}
      </div>
    </section>
  )
}