// CircleLoader.jsx
import React from "react";
import { motion, useMotionValue, useAnimationFrame } from "motion/react";
// If you’re on framer-motion v10 or earlier, use:
// import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

export default function CircleLoader() {
  const radius = 80;   // circle radius in px
  const speed = 1;     // revolutions per second (orbit speed)
  const spin = 1;      // spins per second (self-rotation)

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useMotionValue(0);

  useAnimationFrame((t) => {
    const time = t / 1000;                 // seconds
    const angle = time * speed * Math.PI * 2; // radians
    x.set(Math.cos(angle) * radius);
    y.set(Math.sin(angle) * radius);

    // Rotate the box while it runs: 360° * spin * time
    rotate.set((time * spin * 360) % 360);
  });

  const boxStyle = {
    width: 100,
    height: 100,
    backgroundColor: "#f08dc2ff",
    borderRadius: 5,
    willChange: "transform",
  };

  return (
    <div
      style={{
        width: 220,
        height: 220,
        display: "grid",
        placeItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Orbit + self-rotation */}
      <motion.div style={{ x, y, rotate, ...boxStyle }} />
    </div>
  );
}
