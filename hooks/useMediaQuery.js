import { useState, useEffect } from "react";

export const useMediaQuery = (width) => {
  const [isWidthGreater, setIsWidthGreater] = useState(false);

  useEffect(() => {
    // Check if window is available (i.e., if we're in the browser)
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsWidthGreater(window.innerWidth < width);
      };

      window.addEventListener("resize", handleResize);

      // Call the handler right away so state gets updated with initial window size
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [width]);

  return isWidthGreater;
};
