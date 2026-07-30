import { useEffect, useState } from "react";

type Options = {
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
};

export function useTypewriter(words: string[], opts: Options = {}) {
  const { typingSpeed = 80, deletingSpeed = 40, pauseTime = 1600 } = opts;

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    if (subIndex === words[index].length + 1 && !deleting) {
      const t = setTimeout(() => setDeleting(true), pauseTime);
      return () => clearTimeout(t);
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pauseTime]);

  const text = words[index]?.substring(0, subIndex) ?? "";
  return text;
}
