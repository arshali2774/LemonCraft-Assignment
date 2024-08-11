import AstronautVideo from './components/AstronautVideo';
import Background from './components/Background';
import Navbar from './components/Navbar';
import SectionOne from './components/SectionOne';
import webmSRC from './assets/vp9.webm';
import movSRC from './assets/hevc-alpha.mov';
import { useEffect, useState } from 'react';
import './css/cusorGlow.css';
import SectionTwo from './components/SectionTwo';

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // mouse cursor glow animation
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <div className='bg-[#fefefe] min-h-screen relative overflow-x-hidden'>
      <div
        className='cursor'
        style={{
          transform: `translate(${position.x - 100}px,${position.y - 100}px)`,
        }}
      ></div>
      <header className='px-[3.8rem] py-10 fixed top-0 left-0 right-0 z-50'>
        <Navbar />
      </header>
      <Background />
      <main className='relative z-10 px-[3.8rem]'>
        <SectionOne />
        <SectionTwo />
      </main>
      <AstronautVideo webmSRC={webmSRC} movSRC={movSRC} />
    </div>
  );
};
export default App;
