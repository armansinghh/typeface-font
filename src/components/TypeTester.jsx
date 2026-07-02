import { useState } from 'react'

export default function TypeTester() {
  const [text, setText] = useState('The quick brown fox jumps over the lazy dog.')
  const [fontSize, setFontSize] = useState(64)

  return (
    <section style={{ marginBottom: '6rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h3 style={{ fontSize: '1.25rem' }}>Type Tester</h3>
        
        {/* Font Size Slider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <label htmlFor="size-slider" style={{ fontSize: '0.875rem' }}>{fontSize}px</label>
          <input 
            id="size-slider"
            type="range" 
            min="16" 
            max="120" 
            value={fontSize} 
            onChange={(e) => setFontSize(e.target.value)}
            style={{ accentColor: 'var(--accent-color)' }}
          />
        </div>
      </div>

      {/* Text Input area */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something here..."
        style={{
          width: '100%',
          padding: '1rem',
          fontSize: '1rem',
          fontFamily: 'inherit',
          border: '1px solid var(--border-color)',
          backgroundColor: 'transparent',
          marginBottom: '2rem',
          resize: 'vertical',
          minHeight: '80px'
        }}
      />

      {/* Live Preview using your font */}
      <div 
        className="font-boxy"
        style={{ 
          fontSize: `${fontSize}px`, 
          minHeight: '200px',
          wordWrap: 'break-word',
          borderTop: '1px dashed var(--border-color)',
          paddingTop: '2rem'
        }}
      >
        {text || 'Type something here...'}
      </div>
    </section>
  )
}