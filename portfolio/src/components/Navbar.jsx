import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check window width to detect mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // If the screen is smaller than 768px, it's mobile
    };
    
    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize); // Add resize event listener

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the listener
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the mobile menu when resizing to larger screens
  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24 fixed w-full top-0 left-0 z-50 shadow-lg'>
      <div className='container py-4 flex justify-between items-center'>
        {/* Logo */}
        <div className='text-2xl font-bold'>Tauseef</div>

        {/* Hamburger Icon - Positioned to the top-right on small screens */}
        <div className='md:hidden flex items-center'>
          <button onClick={toggleMenu} className='text-3xl focus:outline-none'>
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* Desktop Navbar Links */}
        <div className='space-x-14 md:flex hidden' >
          <a href="#hero" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About Me</a>
          <a href="#techstack" className="hover:text-gray-400">Tech-Stack</a>
          <a href="#project" className='hover:text-gray-400'>Projects</a>
          <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>

        {/* Desktop Resume Button */}
        <a href="https://resume-builder-test-new.masaischool.com/resume/public?resumeId=67936e8b565a02c8ebf1c684"target="_blank"  className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          Resume
        </a>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && isMobile && (
        <div className='fixed top-16 right-0 bg-black bg-opacity-95 rounded-l-lg shadow-lg p-6 flex flex-col items-center space-y-4 w-3/4 max-w-xs transition-transform duration-300 z-40'>
          <a href="#hero" className='text-white text-lg' onClick={toggleMenu}>Home</a>
          <a href="#about" className='text-white text-lg' onClick={toggleMenu}>About Me</a>
          <a href="#techstack" className='text-white text-lg' onClick={toggleMenu}>Tech-Stack</a>
          <a href="#project" className='text-white text-lg' onClick={toggleMenu}>Projects</a>
          <a href="#contact" className='text-white text-lg' onClick={toggleMenu}>Contact</a>
          <a 
  href="https://resume-builder-test-new.masaischool.com/resume/public?resumeId=67a36735f97830ef5e99fc19" 
  className="text-white text-lg" 
  onClick={toggleMenu}
  target="_blank" 
  rel="noopener noreferrer"
>
  Resume
</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
