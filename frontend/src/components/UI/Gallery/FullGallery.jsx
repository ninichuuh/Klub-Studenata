import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import imagesDB from "./images.json";
import OptimizedImage from "./OptimizedImage";

function BlurHashLazyLoading() {
  const images = imagesDB;

  return (
    <div className="flex max-w-7xl flex-row flex-wrap gap-2">
      {images.map((image) => (
        <OptimizedImage key={image.id} image={image} />
      ))}
    </div>
  );
}

export default BlurHashLazyLoading;
