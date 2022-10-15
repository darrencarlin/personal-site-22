import { useEffect, useState } from "react";

export const useInfinitescroll = () => {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setAtBottom(
        window.pageYOffset + window.innerHeight >=
          document.documentElement.scrollHeight - 50
      );
    });

    return () => window.removeEventListener("scroll", () => {});
  }, []);

  return { atBottom };
};
