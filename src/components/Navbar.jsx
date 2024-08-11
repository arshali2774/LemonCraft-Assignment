import {
  FaTelegram,
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaFacebook,
} from 'react-icons/fa';
import Button from './Button';
const Navbar = () => {
  return (
    <nav className='flex justify-between items-center text-black'>
      <svg
        width='213'
        height='16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1.443 8.779h9.566V7.436H0v8.21h11.009v-1.343H1.443V8.78ZM0 .33v1.343h11.009V.331H0ZM56.385 8.779h9.544V7.436H54.942v8.21h10.987v-1.343h-9.544V8.78ZM54.942.33v1.343h10.987V.331H54.942ZM203.457 8.779H213V7.436h-10.987v8.21H213v-1.343h-9.543V8.78ZM202.013.33v1.343H213V.331h-10.987ZM38.28.331l-3.495 7.221-2.354 5.283h-.177l-2.327-5.283-3.553-7.22h-1.599l7.368 15.314h.355L39.874.331H38.28ZM146.312 0c-4.761 0-7.82 3.47-7.82 8.013 0 4.544 3.059 7.987 7.82 7.987s7.798-3.496 7.798-7.987c0-4.49-3.037-8.013-7.798-8.013Zm0 14.626c-3.975 0-6.355-3.013-6.355-6.613 0-3.599 2.38-6.634 6.355-6.634 3.975 0 6.359 3.013 6.359 6.634 0 3.622-2.411 6.613-6.359 6.613ZM184.441.331l-6.901 7.656L170.652.33h-.444v15.315h1.443V3.65l5.649 6.267h.444l5.671-6.33v12.087h1.417V.331h-.391ZM115.368.331h-5.084v1.343h5.04c3.77 0 6.706 2.35 6.706 6.304 0 3.953-2.909 6.303-6.706 6.303h-5.04v1.343h5.084c4.761 0 8.127-2.91 8.127-7.66S120.133.331 115.368.331ZM90.18 10.26v-.102c2.256-.587 3.748-2.171 3.748-4.772 0-3.318-2.22-5.055-6.026-5.055h-6.049v1.343h6.049c2.735 0 4.556 1.173 4.556 3.752 0 2.578-1.847 3.653-4.303 3.653h-6.302v6.567h1.444V10.44h5.164l4.26 5.206h1.544v-.358l-4.085-5.027Z'
          fill='currentColor'
        ></path>
      </svg>

      <div className='flex items-center gap-12'>
        <a href='#'>
          <FaTelegram />
        </a>
        <a href='#'>
          <FaTwitter />
        </a>
        <a href='#'>
          <FaDiscord />
        </a>
        <a href='#'>
          <FaInstagram />
        </a>
        <a href='#'>
          <FaFacebook />
        </a>
        <Button buttonText='Mini Astro NFT' />
      </div>
    </nav>
  );
};
export default Navbar;
