# websimple

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Meu Projeto</h1>
        <ul className="flex gap-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">Sobre</Link></li>
          <li><Link to="/contact" className="hover:underline">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
