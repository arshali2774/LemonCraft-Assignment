import { motion } from 'framer-motion';
// eslint-disable-next-line react/prop-types
const Button = ({ buttonText, width, margin, animate = false }) => {
  // reusable button component
  return animate ? (
    <motion.button
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className='bg-[#010101] text-[#f5f5f5] px-8 py-4'
      style={{ width, marginLeft: `${margin}px` }}
    >
      {buttonText}
    </motion.button>
  ) : (
    <button
      className='bg-[#010101] text-[#f5f5f5] px-8 py-4'
      style={{ width, marginLeft: `${margin}px` }}
    >
      {buttonText}
    </button>
  );
};
export default Button;
