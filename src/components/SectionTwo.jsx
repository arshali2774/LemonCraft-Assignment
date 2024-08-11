import RotatingDivs from './RotatingDivs';
import satteliteImage from '../assets/cycler.png';
import { FaPlayCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
const SectionTwo = () => {
  return (
    <section className='h-[calc(100vh-160px)] mt-40 w-ful relative mb-10 '>
      <RotatingDivs />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className=' w-[220px] h-[100px] absolute left-10 bottom-40'
      >
        <FaPlayCircle className='absolute top-0 left-0 text-white text-6xl bg-[rgba(0,0,0,0.7)] h-full p-3' />
        <img src={satteliteImage} className='w-full h-full object-cover' />
        <p className='pt-4'>
          Interweaving scientific accuracy, high quality visualizations and
          engaging storytelling to pioneer the uncharted metaverse frontier.
        </p>
      </motion.div>
    </section>
  );
};

export default SectionTwo;
