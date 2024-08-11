import { useState, useEffect } from "react";

export const useMediaQuery = (width) => {
  const [isWidthGreater, setIsWidthGreater] = useState(
    window.innerWidth > width
  );

  useEffect(() => {
    const handleResize = () => {
      setIsWidthGreater(window.innerWidth < width);
    };

    window.addEventListener("resize", handleResize);

    // Call the handler right away so state gets updated with initial window size
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return isWidthGreater;
};
