export default function Download() {
  return (
    <section className="download-section">
      <div className="download-content">
        <h2 className="download-title">Get It Now</h2>
    
        <a 
          href="/font/Boxy-Regular.otf" 
          download="Boxy-Regular.otf"
          className="brutal-btn massive-btn"
          style={{ textDecoration: 'none' }}
        >
          Download Boxy Regular (OTF)
        </a>
        
        <div className="license-box">
          <h4>License Info</h4>
          <p>100% Free for personal and commercial use. No attribution required, but don't resell the raw font files.</p>
        </div>
      </div>
    </section>
  )
}