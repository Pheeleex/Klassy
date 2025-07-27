// components/Footer.tsx
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 mt-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo & Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold tracking-wider uppercase">Klassy</h2>
          <p className="text-sm mt-2 text-white/60">Unmistakable pieces. Lasting moments.</p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col md:flex-row items-center gap-6 text-sm uppercase tracking-wide">
          <Link href="/collection" className="hover:text-white/80">Collection</Link>
          <Link href="/about" className="hover:text-white/80">About</Link>
          <Link href="/contact" className="hover:text-white/80">Contact</Link>
          <Link href="/privacy" className="hover:text-white/80">Privacy</Link>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/70">
            <FaInstagram size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/70">
            <FaTwitter size={20} />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/70">
            <FaTiktok size={20} />
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 text-center text-xs text-white/40">
        © {new Date().getFullYear()} KLASSY. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
