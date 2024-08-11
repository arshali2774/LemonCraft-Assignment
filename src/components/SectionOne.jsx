import Button from './Button';
import '../css/star.css';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
const Navigation = [
  'About Us',
  'Our Mission',
  'Character',
  'Creation Process',
  'Gallery',
  'Special Elements',
  'Creative Team',
  'Mint',
  'Contact',
];

// eslint-disable-next-line react/prop-types
const ListItem = ({ text, number }) => {
  return (
    <li className='flex flex-row-reverse gap-10 items-center'>
      <p>0{number}</p>
      <p>{text}</p>
    </li>
  );
};

const SectionOne = () => {
  useEffect(() => {
    const starField = document.querySelector('#star-field');
    const numOfStars = 100;
    function createStars() {
      const star = document.createElement('div');
      star.classList.add('star');
      const x = Math.random() * (window.innerWidth - 100);
      const y = Math.random() * (window.innerHeight - 100);
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      const delay = Math.random() * 5;
      const duration = 1 + Math.random() * 3;
      star.style.animationDelay = `${delay}s`;
      star.style.animationDuration = `${duration}s`;
      starField.appendChild(star);
    }
    for (let i = 0; i < numOfStars; i++) {
      createStars(numOfStars);
    }
  }, []);
  return (
    <section className='flex justify-between mt-40 h-[calc(100vh-160px)] '>
      <div className='flex flex-col gap-[200px] mt-8'>
        <div className='flex flex-col gap-10'>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className='text-6xl font-bold'
          >
            Astro NFT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className='w-[300px] pl-8'
          >
            Exclusively for Genesis NFT Holders, our Astro NFT collection is the
            first metaverse wearable created for Everdome.
          </motion.p>
          <Button
            buttonText='Connect your wallet'
            width={250}
            margin={32}
            animate={true}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className='ml-6'
        >
          <p className='text-4xl font-bold'>9,999</p>
          <p className='mt-2'>Collection Size</p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0, type: 'ease-in' }}
        className='w-[300px] h-[500px] bg-[#020202] relative'
        id='star-field'
      >
        <div className='absolute top-[13%] right-[-600px] bg-[#f8f6f9] w-[600px] h-[500px] skew-y-12'></div>
      </motion.div>
      <div className='w-[270px] flex flex-col justify-between relative z-20 py-10'>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className='font-semibold text-sm '
        >
          Distinctive, one of a kind metaverse wearables. Designed to be used
          during your Everdome City experience
        </motion.p>
        <motion.ul
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1 }}
          className='fixed bottom-16 right-20'
        >
          {Navigation.map((item, index) => (
            <ListItem text={item} number={index + 1} key={item} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
};
export default SectionOne;
