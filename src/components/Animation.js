// Define a fade-in animation variant.
export const fadeVariants = {
  initial: { opacity: 0, y: 30, delay: 0.3 }, // Initial state of the component
  animate: {
    opacity: 1, // End state: fully opaque
    scale: 1, // End state: full scale
    y: 0, // End state: no vertical translation
    transition: { duration: 0.8, ease: "easeInOut" }, // Transition settings
    type: "spring", // Type of animation (spring animation)
    damping: 8, // Spring damping factor (adjust as needed)
    stiffness: 100, // Spring stiffness factor (adjust as needed)
  },
};
