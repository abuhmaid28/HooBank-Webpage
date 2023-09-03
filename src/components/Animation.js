// Define a fade-in animation variant.
export const fadeVariants = {
  initial: { opacity: 0, scale: 0.9, y: 30 }, // Initial state of the component
  animate: {
    opacity: 1, // End state: fully opaque
    transition: { duration: 1 }, // Transition settings
    scale: 1, // End state: full scale
    y: 0, // End state: no vertical translation
    ease: "easeInOut", // Easing function for smooth animation
    type: "spring", // Type of animation (spring animation)
    damping: 8, // Spring damping factor (adjust as needed)
    stiffness: 100, // Spring stiffness factor (adjust as needed)
  },
};
