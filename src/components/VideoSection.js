import React from 'react';

const VideoSection = () => {
  return (
    <section id="video" className="video-section">
      <div className="video-inner">
        <div className="section-tag">Watch & Learn</div>
        <h2 className="section-h2">Jhatka — <em>The Truth</em></h2>
        <div className="gold-line"></div>

        <div className="video-main-wrap">
          <iframe 
            src="https://www.youtube.com/embed/RUIaWa0tvRw?rel=0&modestbranding=1" 
            title="Jhatka Organisation Video" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-caption">
          Subscribe to our <span>YouTube Channel</span> — more videos on Jhatka, tradition & awareness
        </div>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <a 
            className="btn-outline" 
            href="https://www.youtube.com/channel/UCPlTjuiHSzdiIxw8oq_bDHQ" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            ▶ Subscribe on YouTube
          </a>
        </div>

        <div className="video-thumbs">
          <div className="video-thumb">
            <iframe 
              src="https://www.youtube.com/embed/RUIaWa0tvRw?start=10&rel=0&modestbranding=1" 
              title="What is Jhatka" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
            <div className="video-thumb-overlay">
              <div className="play-circle">▶</div>
              <span className="thumb-label">What is Jhatka?</span>
            </div>
          </div>

          <div className="video-thumb">
            <iframe 
              src="https://www.youtube.com/embed/RUIaWa0tvRw?start=50&rel=0&modestbranding=1" 
              title="Why Choose Jhatka" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
            <div className="video-thumb-overlay">
              <div className="play-circle">▶</div>
              <span className="thumb-label">Why Choose Jhatka</span>
            </div>
          </div>

          <div className="video-thumb">
            <iframe 
              src="https://www.youtube.com/embed/RUIaWa0tvRw?start=90&rel=0&modestbranding=1" 
              title="Jhatka Movement" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
            <div className="video-thumb-overlay">
              <div className="play-circle">▶</div>
              <span className="thumb-label">Jhatka Movement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;