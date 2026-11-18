import { useState } from 'react'
import { galleryImages } from '../data/galleryImages'

export default function ImageGallerySlideshow() {
  const [activeIndex, setActiveIndex] = useState(0)
  const showImage = (index: number) => {
    setActiveIndex((index + galleryImages.length) % galleryImages.length)
  }

  return (
    <section className="image-gallery" id="gallery" aria-label="Photo gallery">
      <div className="gallery-heading">
        <h2>Gallery</h2>
      </div>
      <div className="gallery-viewer" aria-live="polite">
        <img src={galleryImages[activeIndex].image} alt={galleryImages[activeIndex].alt}/>
        <button className="gallery-arrow gallery-arrow-prev" type="button" aria-label="Previous image" onClick={() => showImage(activeIndex - 1)}>←</button>
        <button className="gallery-arrow gallery-arrow-next" type="button" aria-label="Next image" onClick={() => showImage(activeIndex + 1)}>→</button>
      </div>
      <div className="gallery-dots" aria-label="Choose a photo">
        {galleryImages.map((photo, index) => (
          <button key={photo.image} type="button" aria-label={`Show image ${index + 1}`} aria-current={index === activeIndex ? 'true' : undefined} onClick={() => showImage(index)}/>
        ))}
      </div>
    </section>
  )
}
