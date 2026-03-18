import { useState } from 'react';
import Lightbox from './Lightbox';

interface Artwork {
  title: string;
  type: 'photography' | 'painting';
  image: string;
  description?: string;
}

interface GalleryProps {
  artworks: Artwork[];
}

export default function Gallery({ artworks }: GalleryProps) {
  const [filter, setFilter] = useState<'all' | 'photography' | 'painting'>('all');
  const [lightboxImage, setLightboxImage] = useState<Artwork | null>(null);

  const filtered = filter === 'all' ? artworks : artworks.filter(a => a.type === filter);

  return (
    <>
      <div className="gallery__filters">
        {(['all', 'photography', 'painting'] as const).map(f => (
          <button
            key={f}
            className={`gallery__filter-btn ${filter === f ? 'active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
      <div className="gallery__grid">
        {filtered.map((art, i) => (
          <div key={i} className="gallery__item" onClick={() => setLightboxImage(art)}>
            <img src={art.image} alt={art.title} loading="lazy" />
          </div>
        ))}
      </div>
      {lightboxImage && (
        <Lightbox
          src={lightboxImage.image}
          alt={lightboxImage.title}
          onClose={() => setLightboxImage(null)}
        />
      )}
    </>
  );
}
