import { useState } from 'react'

export default function TypeTester() {
  const [text, setText] = useState('The quick brown fox jumps over the lazy dog.')
  const [fontSize, setFontSize] = useState(64)

  return (
    <section>
      <div className="tester-header">
        <h3 className="section-title">Type Tester</h3>
        
        <div className="slider-container">
          <label htmlFor="size-slider">{fontSize}px</label>
          <input 
            id="size-slider"
            type="range" 
            min="16" 
            max="120" 
            value={fontSize} 
            onChange={(e) => setFontSize(e.target.value)}
          />
        </div>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something here..."
      />

      <div 
        className="font-boxy preview-area"
        style={{ fontSize: `${fontSize}px` }}
      >
        {text || 'Type something here...'}
      </div>
    </section>
  )
}