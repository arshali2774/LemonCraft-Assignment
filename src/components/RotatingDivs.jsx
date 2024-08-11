import '../css/rotatingDivs.css';
import { motion } from 'framer-motion';
const RotatingDivs = () => {
  const dots = [];
  const totalDots = 20;
  const radius = 325; // Radius of the circle

  for (let i = 0; i < totalDots; i++) {
    const angle = (i / totalDots) * 2 * Math.PI;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    const isSpecialDot = i === 0;
    dots.push(
      <div
        key={i}
        className={`dot ${isSpecialDot ? 'special-dot' : ''}`}
        style={{
          transform: `translate(${x}px, ${y}px)`,
        }}
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      className='circle left-[45%] top-[42%] absolute translate-x-[-50%] translate-y-[-50%]'
    >
      {dots}
    </motion.div>
  );
};
export default RotatingDivs;
