import React, { useState } from 'react';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openLightbox = (src) => {
    setCurrentImage(src);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage('');
  };

  return (
    <>
      <section id="gallery" className="gallery-section">
        <div className="section-tag">Photo Gallery</div>
        <h2 className="section-h2">Our <em>Moments</em></h2>
        <div className="gold-line"></div>

        <div className="photo-grid">
          <div className="photo-cell tall" onClick={() => openLightbox('https://jhatka.org/wp-content/uploads/2021/02/why-choose.jpg')}>
            <img src="https://jhatka.org/wp-content/uploads/2021/02/why-choose.jpg" alt="Why Choose Jhatka" />
            <div className="photo-overlay"><span className="photo-label">Why Choose Jhatka</span></div>
          </div>
          
          <div className="photo-cell" onClick={() => openLightbox('https://jhatka.org/wp-content/uploads/2021/02/mission-2.jpg')}>
            <img src="https://jhatka.org/wp-content/uploads/2021/02/mission-2.jpg" alt="Our Mission" />
            <div className="photo-overlay"><span className="photo-label">Our Mission</span></div>
          </div>

          {/* Add other gallery images similarly */}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox open" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>✕</button>
          <img src={currentImage} alt="" />
        </div>
      )}
    </>
  );
};

export default Gallery;