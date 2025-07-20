import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiShoppingBag, FiMenu, FiSearch } from 'react-icons/fi';
import '../../styles/header.css';
import '../../styles/globals.css';


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen || isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen, isSearchOpen]);

  useEffect(() => {
    const shouldLockScroll = isMobileMenuOpen || activeSubmenu !== null;
    if (shouldLockScroll) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMobileMenuOpen, activeSubmenu]);


  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      if (direction !== scrollDirection && Math.abs(currentScrollY - lastScrollY) > 10) {
        setScrollDirection(direction);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollDirection]);

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
    document.body.style.overflow = 'auto';
  };



  return (
    <>
    <div className='LogoName'>Modestway</div>
    <header className={`header ${scrollDirection === 'down' ? 'hide-header' : 'show-header'}`}>
      <div className="nav-container">
        {/* GAUCHE - Desktop */}
        <div className="nav-left desktop">
          <Link to="/"><img src="/icon.svg" alt="Logo" className="logo" /></Link>
        </div>

        {/* MILIEU */}
        <div className="nav-center">
          <Link to="/">Accueil</Link>

          <div className="dropdown">
            <span>Homme</span>
            <div className="dropdown-content">
              <Link to="/Hommes/Qamis">Qamis</Link>
              <Link to="/Hommes/TShirts">T-Shirt</Link>
              <Link to="/Hommes/Pantalons">Pantalon</Link>
              <Link to="/Hommes/ChaussuresHommes">Chaussures</Link>
              <Link to="/Hommes/AccessoiresHommes">Accessoires</Link>
            </div>
          </div>

          <div className="dropdown">
            <span>Femme</span>
            <div className="dropdown-content">
              <Link to="/Femmes/VoileEtAccessoires">Voiles & Accessoires</Link>
              <Link to="/Femmes/ChaussuresFemmes">Chaussures</Link>
            </div>
          </div>

          <Link to="/Livres">Livres</Link>
          <Link to="/APropos">À propos</Link>
          <Link to="/Contact">Contact</Link>
        </div>

        {/* DROITE - Desktop */}
        <div className="nav-right desktop">
          <input type="text" placeholder="Rechercher..." className="search-bar" />
          <FiUser size={22} className="icon" />
          <div className="cart-icon">
            <FiShoppingBag size={22} />
            <span className="badge">2</span>
          </div>
        </div>

        {/* GAUCHE - Mobile */}
        <div className="nav-left mobile">
          <button className="menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu">
            <span className="menu-line"></span>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
          </button>
          <FiUser size={22} className="icon" />
        </div>

        {/* CENTRE - Logo mobile */}
        <div className="logo-container mobile">
          <Link to="/"><img src="/icon.svg" alt="Logo" className="logo" /></Link>
        </div>

        {/* DROITE - Mobile */}
        <div className="nav-right mobile">
          <FiSearch
            size={22}
            className="icon"
            onClick={() => {
              setIsSearchOpen(true);
              setIsMobileMenuOpen(false);
              setActiveSubmenu(null);
            }}
            style={{ cursor: 'pointer' }}
          />
          <div className="cart-icon">
            <FiShoppingBag size={22} />
            <span className="badge">2</span>
          </div>
        </div>

      </div>

      {isMobileMenuOpen && (
        <div className="overlay" onClick={() => {
          setIsMobileMenuOpen(false);
          setActiveSubmenu(null);
        }}></div>
      )}

      {isMobileMenuOpen && !activeSubmenu && (
        <nav className="mobile-menu">
          <div className='menu-logo'>
            <Link to="/"><img src="/icon.svg" alt="Logo" className="logo" /></Link>
          </div>
          <button className="close-btn" onClick={() => setIsMobileMenuOpen(false)}>✕</button>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Accueil</Link>
          <button className="submenu-btn" onClick={() => setActiveSubmenu('homme')}>
            Homme <span className="arrow">⇒</span>
          </button>
          <button className="submenu-btn" onClick={() => setActiveSubmenu('femme')}>
            Femme <span className="arrow">⇒</span>
          </button>
          <Link to="/Livres" onClick={() => setIsMobileMenuOpen(false)}>Livres</Link>
          <Link to="/APropos" onClick={() => setIsMobileMenuOpen(false)}>À propos</Link>
          <Link to="/Contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </nav>
      )}

      {activeSubmenu === 'homme' && (
        <nav className="mobile-submenu">
          <div className='menu-logo'>
            <Link to="/"><img src="/icon.svg" alt="Logo" className="logo" /></Link>
          </div>
          <div className='btns'>
            <button className="back-btn" onClick={() => setActiveSubmenu(null)}>
              <span className="arrow-left">⇐</span> Retour
            </button>
            <button
              className="close-btn"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setActiveSubmenu(null);
              }}
            >
              ✕
            </button>
          </div>
          <h2>HOMME</h2>
          <Link to="/Hommes/Qamis" onClick={closeAllMenus}>Qamis</Link>
          <Link to="/Hommes/TShirts" onClick={closeAllMenus}>T-Shirts</Link>
          <Link to="/Hommes/Pantalons" onClick={closeAllMenus}>Pantalons</Link>
          <Link to="/Hommes/ChaussuresHommes" onClick={closeAllMenus}>Chaussures</Link>
          <Link to="/Hommes/AccessoiresHommes" onClick={closeAllMenus}>Accessoires</Link>
        </nav>
      )}

      {activeSubmenu === 'femme' && (
        <nav className="mobile-submenu">
          <div className='menu-logo'>
            <Link to="/"><img src="/icon.svg" alt="Logo" className="logo" /></Link>
          </div>
          <div className='btns'>
            <button className="back-btn" onClick={() => setActiveSubmenu(null)}>
              <span className="arrow-left">⇐</span> Retour
            </button>
            <button
              className="close-btn"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setActiveSubmenu(null);
              }}
            >
              ✕
            </button>
         </div>
          <h2>FEMME</h2>
          <Link to="/Femmes/VoileEtAccessoires" onClick={closeAllMenus}>Voiles & Accessoires</Link>
          <Link to="/Femmes/Chaussures" onClick={closeAllMenus}>Chaussures</Link>
        </nav>
      )}
      {isSearchOpen && (
        <>
          <div className="overlay" onClick={() => setIsSearchOpen(false)}></div>
          <div className="search-drawer">
            <button className="close-btn" onClick={() => setIsSearchOpen(false)}>✕</button>
            <input
              type="text"
              placeholder="Rechercher un produit, une catégorie..."
              className="search-input"
              autoFocus
            />
          </div>
        </>
      )}

    </header>
    </>
  );
};

export default Header;
