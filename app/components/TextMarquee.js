
const TextMarquee = () => {
  return (
    <section className="text-marquee-section">
      <div className="text-marquee-container">
        <div className="text-marquee-column">
          <div className="spacer"></div>
          
          <div className="text-path-wrapper">
            <div className="wgl-text-path loop-animation clone-text">
              <div className="simple-line">
                <div className="simple-line-wrapper">
                  <span className="text-word">
                    Luxury Property 
                    <span className="dot-separator">⋅</span> 
                    <i className="italic-text">Apartments</i> 
                    <span className="dot-separator">⋅</span> 
                    Residential 
                    <span className="dot-separator">⋅</span>&nbsp;
                  </span>
                  <span className="text-word">
                    Luxury Property 
                    <span className="dot-separator">⋅</span> 
                    <i className="italic-text">Apartments</i> 
                    <span className="dot-separator">⋅</span> 
                    Residential 
                    <span className="dot-separator">⋅</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextMarquee;