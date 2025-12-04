import { useEffect } from "react";

import { IMAGE_POOL_EXPORT } from "../functions/getRandomImageUrl";

const usePreloadAllImages = () => {
  useEffect(() => {
    // 1) Lokale Assets (Hero-Images)
    const imageModules = import.meta.glob("../assets/*.webp", {
      eager: true,
      as: "url",
    });

    const localImageUrls = Object.values(imageModules);

    const preload = (src) => {
      const img = new Image();
      img.src = src;
    };

    localImageUrls.forEach(preload);

    // 2) Externe Pexels-Bilder aus Image-Pool
    IMAGE_POOL_EXPORT.forEach(preload);
  }, []);
};

export default usePreloadAllImages;
