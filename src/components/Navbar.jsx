import logo from '../assets/mylogo.png.png'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'


const LeetCodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 1024"
    className="w-6 h-6 fill-current"
    aria-label="LeetCode"
  >
    <path d="M877.714 340.286c-61.714-86.857-155.429-156-238.857-189.714-26.286-11.429-55.429-5.143-78.286 8.571L449.714 255.429c-14.857 8-19.429 26.857-11.429 41.714s26.857 19.429 41.714 11.429l111.429-64.571c14.857-8 32-2.857 43.429 4.571 65.143 37.143 139.429 96.571 193.143 174.857 106.857 151.429 80 328-53.143 424l-109.714 67.429c-13.143 8-17.143 25.714-9.143 38.857s25.714 17.143 38.857 9.143l109.714-67.429c162.286-120 196.571-345.714 68.571-520ZM413.714 726.857l-109.714 67.429c-14.857 8-32 2.857-43.429-4.571-65.143-37.143-139.429-96.571-193.143-174.857-106.857-151.429-80-328 53.143-424L270.857 123c13.143-8 17.143-25.714 9.143-38.857S254.286 67 241.143 75L131.429 142.429C-30.857 262.429-65.143 488.143 62.857 663.429c61.714 86.857 155.429 156 238.857 189.714 26.286 11.429 55.429 5.143 78.286-8.571L491.429 768c14.857-8 19.429-26.857 11.429-41.714-8-14.857-26.857-19.429-41.714-11.429ZM532.571 527.429l-105.143-61.143c-14.857-8-19.429-26.857-11.429-41.714s26.857-19.429 41.714-11.429l105.143 61.143c14.857 8 19.429 26.857 11.429 41.714s-26.857 19.429-41.714 11.429ZM694.857 579.429l-105.143 61.143c-14.857 8-32 2.857-41.714-11.429-8-14.857-2.857-32 11.429-41.714l105.143-61.143c14.857-8 32-2.857 41.714 11.429 8 14.857 2.857 32-11.429 41.714Z" />
  </svg>
);

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={50} height={33} alt="Logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/sagnik-dutta-49520a283/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/DSagnik24"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/SAGNIKDUTT35623"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href="https://leetcode.com/u/Sagnik_Dutta_10/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode"
        >
          <LeetCodeIcon />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
