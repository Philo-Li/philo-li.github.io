interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function Lightbox({ src, alt, onClose }: LightboxProps) {
  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox__close" onClick={onClose}>×</button>
      <img src={src} alt={alt} onClick={(e) => e.stopPropagation()} />
    </div>
  );
}
