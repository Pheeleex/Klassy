'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Search, ShoppingBag, User, X, Menu } from 'lucide-react';
import Link from 'next/link';

type NavLink = {
  label: string;
  href: string;
};

type NavbarProps = {
  brand?: string;
  navLinks?: NavLink[];
  showIcons?: boolean;
  className?: string;
};

const defaultNavLinks: NavLink[] = [
  { label: 'Collections', href: '/collection' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const Navbar: React.FC<NavbarProps> = ({
  brand = 'Klassy Official',
  navLinks = defaultNavLinks,
  showIcons = true,
  className = '',
}) => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isLandingPage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    if (isLandingPage) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  useEffect(() => {
    setIsMobileMenuOpen(false); // close on route change
  }, [pathname]);

  const navBackground =
    isLandingPage && !scrolled
      ? 'bg-transparent text-white'
      : 'bg-white text-black shadow-md';

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-30 px-6 md:px-12 py-6 transition-all duration-300 ${navBackground} ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="text-xl md:text-2xl font-light tracking-widest uppercase"
          >
            {brand}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-wider hover:text-gray-500 transition duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {showIcons && (
            <div className="hidden md:flex items-center space-x-4">
              <Search className="w-5 h-5 cursor-pointer hover:opacity-70" />
              <User className="w-5 h-5 cursor-pointer hover:opacity-70" />
              <Heart className="w-5 h-5 cursor-pointer hover:opacity-70" />
              <ShoppingBag className="w-5 h-5 cursor-pointer hover:opacity-70" />
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="md:hidden"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
     <AnimatePresence>
  {isMobileMenuOpen && (
    <motion.div
      className="fixed top-0 left-0 w-full h-screen z-50 bg-white text-black flex flex-col items-center justify-center space-y-8 text-xl font-medium uppercase"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Close Button */}
      <button
        onClick={() => setIsMobileMenuOpen(false)}
        className="absolute top-6 right-6"
        aria-label="Close Mobile Menu"
      >
        <X className="w-7 h-7" />
      </button>

      {/* Navigation Links */}
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => setIsMobileMenuOpen(false)}
          className="hover:text-gray-600 transition"
        >
          {link.label}
        </Link>
      ))}

      {/* Optional Icons */}
      {showIcons && (
        <div className="flex items-center space-x-6 mt-8">
          <Search className="w-6 h-6 cursor-pointer" />
          <User className="w-6 h-6 cursor-pointer" />
          <Heart className="w-6 h-6 cursor-pointer" />
          <ShoppingBag className="w-6 h-6 cursor-pointer" />
        </div>
      )}
    </motion.div>
  )}
</AnimatePresence>

    </>
  );
};

export default Navbar;
