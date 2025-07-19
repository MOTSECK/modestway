import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiShoppingBag, FiMenu, FiSearch } from 'react-icons/fi';
import '../../styles/header.css';

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
    <header className={`header ${scrollDirection === 'down' ? 'hide-header' : 'show-header'}`}>
      <div className='LogoName'>...Modestway...</div>
      <div className="nav-container">
        {/* GAUCHE - Desktop */}
        <div className="nav-left desktop">
          <Link to="/"><img src="/icon.svg"  alt="Logo" className="logo" /></Link>
        </div>

        {/* MILIEU */}
        <div className="nav-center">
          <Link to="/">Accueil</Link>

          <div className="dropdown">
            <span>Homme</span>
            <div className="dropdown-content">
              <Link to="/hommes/qamis">Qamis</Link>
              <Link to="/hommes/tshirts">T-Shirt</Link>
              <Link to="/hommes/pantalons">Pantalon</Link>
              <Link to="/hommes/chaussures">Chaussures</Link>
              <Link to="/hommes/accessoires">Accessoires</Link>
            </div>
          </div>

          <div className="dropdown">
            <span>Femme</span>
            <div className="dropdown-content">
              <Link to="/femmes/voiles">Voile & Accessoires</Link>
              <Link to="/femmes/chaussures">Chaussures</Link>
            </div>
          </div>

          <Link to="/livres">Livres</Link>
          <Link to="/a-propos">À propos</Link>
          <Link to="/contact">Contact</Link>
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
          <Link to="/"><img src="/icon.svg"  alt="Logo" className="logo" /></Link>
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
          <button className="close-btn" onClick={() => setIsMobileMenuOpen(false)}>✕</button>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Accueil</Link>
          <button className="submenu-btn" onClick={() => setActiveSubmenu('homme')}>
            Homme <span className="arrow">➔</span>
          </button>
          <button className="submenu-btn" onClick={() => setActiveSubmenu('femme')}>
            Femme <span className="arrow">➔</span>
          </button>
          <Link to="/livres" onClick={() => setIsMobileMenuOpen(false)}>Livres</Link>
          <Link to="/a-propos" onClick={() => setIsMobileMenuOpen(false)}>À propos</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </nav>
      )}

      {activeSubmenu === 'homme' && (
        <nav className="mobile-submenu">
          <div className='btns'>
            <button className="back-btn" onClick={() => setActiveSubmenu(null)}>
              <span className="arrow-left">←</span> Retour
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
          <Link to="/hommes/qamis" onClick={closeAllMenus}>Qamis</Link>
          <Link to="/hommes/tshirts" onClick={closeAllMenus}>T-Shirts</Link>
          <Link to="/hommes/pantalons" onClick={closeAllMenus}>Pantalons</Link>
          <Link to="/hommes/chaussures" onClick={closeAllMenus}>Chaussures</Link>
          <Link to="/hommes/accessoires" onClick={closeAllMenus}>Accessoires</Link>
        </nav>
      )}

      {activeSubmenu === 'femme' && (
        <nav className="mobile-submenu">
          <div className='btns'>
            <button className="back-btn" onClick={() => setActiveSubmenu(null)}>
              <span className="arrow-left">←</span> Retour
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
          <Link to="/femmes/voiles" onClick={closeAllMenus}>Voile & Accessoires</Link>
          <Link to="/femmes/chaussures" onClick={closeAllMenus}>Chaussures</Link>
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
  );
};

export default Header;
