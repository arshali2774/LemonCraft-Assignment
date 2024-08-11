import { motion, useScroll, useTransform } from 'framer-motion';
/* eslint-disable react/prop-types */
const AstronautVideo = ({ webmSRC, movSRC }) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const top = useTransform(scrollYProgress, [0, 1], ['28%', '25%']);
  const left = useTransform(scrollYProgress, [0, 1], ['50%', '38%']);

  return (
    <motion.video
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.0, type: 'ease-in' }}
      autoPlay
      loop
      muted
      className='w-[300px] h-[500px] fixed z-20'
      style={{
        scale,
        top,
        left,
      }}
    >
      <source src={webmSRC} type='video/webm' />
      <source src={movSRC} type='video/quicktime' />
      Your browser does not support the video tag.
    </motion.video>
  );
};
export default AstronautVideo;
