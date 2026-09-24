"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./TypewriterText.module.css";

interface TypewriterTextProps {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  pause?: number;
}

export default function TypewriterText({
  words,
  speed = 80,
  deleteSpeed = 40,
  pause = 1800,
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = words[wordIndex];

    const tick = () => {
      if (!isDeleting) {
        if (displayed.length < current.length) {
          setDisplayed(current.slice(0, displayed.length + 1));
          timeoutRef.current = setTimeout(tick, speed);
        } else {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(current.slice(0, displayed.length - 1));
          timeoutRef.current = setTimeout(tick, deleteSpeed);
        } else {
          setIsDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    };

    timeoutRef.current = setTimeout(tick, isDeleting ? deleteSpeed : speed);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayed, isDeleting, wordIndex, words, speed, deleteSpeed, pause]);

  return (
    <span className={styles.typewriter}>
      {displayed}
      <span className={styles.cursor} aria-hidden="true">|</span>
    </span>
  );
}
