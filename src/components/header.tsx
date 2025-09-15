import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="text-xl font-bold text-gray-800">Yuto Matsuda</div>

        {/* PCメニュー */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-700 hover:text-blue-500 transition">Home</a>
          <a href="#about" className="text-gray-700 hover:text-blue-500 transition">About</a>
          <a href="#products" className="text-gray-700 hover:text-blue-500 transition">Products</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-500 transition">Contact</a>
        </nav>

        {/* モバイルメニュー切り替え */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {menuOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-2 space-y-2">
          <a href="#home" className="block text-gray-700 hover:text-blue-500">Home</a>
          <a href="#about" className="block text-gray-700 hover:text-blue-500">About</a>
          <a href="#projects" className="block text-gray-700 hover:text-blue-500">Projects</a>
          <a href="#contact" className="block text-gray-700 hover:text-blue-500">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
