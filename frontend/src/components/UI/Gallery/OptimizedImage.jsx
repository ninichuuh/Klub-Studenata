import { useState } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";

const OptimizedImage = ({ image }) => {
  const [isLoaded, setLoaded] = useState(false);
  const [isLoadStarted, setLoadStarted] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleLoadStarted = () => {
    setLoadStarted(true);
  };

  return (
    <div className="relative">
      <LazyLoadImage
        key={image.name}
        src={image.name}
        height={500}
        width={333}
        onLoad={handleLoad}
        beforeLoad={handleLoadStarted}
      />
      {!isLoaded && isLoadStarted && (
        // <LazyLoadComponent>
        <div
          className="absolute top-0 left-0 z-20"
          hash={image.blurhash}
          width={333}
          height={500}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
