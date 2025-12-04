import { useEffect } from "react";

const usePreloadAllImages = () => {
  useEffect(() => {
    const imageModules = import.meta.glob("../assets/*.webp", {
      eager: true,
      as: "url",
    });

    const imageUrls = Object.values(imageModules);

    imageUrls.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);
};

export default usePreloadAllImages;
