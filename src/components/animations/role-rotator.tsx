"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

type RoleRotatorProps = {
  roles: string[];
};

export function RoleRotator({ roles }: RoleRotatorProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % roles.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, [roles.length]);

  return (
    <span className="inline-flex min-h-7 overflow-hidden align-bottom text-amber">
      <AnimatePresence mode="wait">
        <motion.span
          animate={{ opacity: 1, y: 0 }}
          className="inline-block"
          exit={{ opacity: 0, y: -12 }}
          initial={{ opacity: 0, y: 12 }}
          key={roles[index]}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
