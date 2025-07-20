import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import '../../styles/accueil.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const realSlides = [
  {
    id: 1,
    image: "/shomme-qamis-blanc.png",
    text: "Tendances Récentes",
    sub: "Raffinement & singularité",
    position: "center top"
  },
  {
    id: 2,
    image: "/sfemme-voile-grande.jpg",
    text: "Beauté Voilée",
    sub: "Force et pudeur en harmonie",
    position: "center top"
  },
  {
    id: 3,
    image: "/saccessoires-homme-siwak.jpg",
    text: "Accessoires Homme",
    sub: "L’essentiel masculin",
    position: "center top"
  },
  {
    id: 4,
    image: "/saccessoires-femme-sac.jpg",
    text: "Accessoires Femme",
    sub: "Féminité dans chaque détail",
    position: "right center "
  }
];
const articles = [
    {
      id: 1,
      title: "Qamis Homme",
      image: "/shomme-qamis-blanc.png",
      link: "#"
    },
    {
      id: 2,
      title: "Accessoires Homme",
      image: "/saccessoires-homme.png",
      link: "#"
    },
    {
      id: 3,
      title: "Voiles et Niqabs",
      image: "/sfemme-voile-grande.jpg",
      link: "#"
    },
    {
      id: 4,
      title: "Accessoires Femme",
      image: "/saccessoires-femme.png",
      link: "#"
    }
  ];

// Ajoute le premier à la fin
const slides = [...realSlides, realSlides[0]];

export default function Accueil() {
  const [current, setCurrent] = useState(0);
  const slidesRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800, // durée des animations en ms
      once: true,    // ne s'anime qu'une seule fois
    });
  }, []);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => prev + 1);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const container = slidesRef.current;
    if (!container) return;

    const slideWidth = container.offsetWidth;

    if (current === slides.length - 1) {
      // On glisse jusqu'au faux dernier (copie du 1er)
      container.scrollTo({
        left: slideWidth * current,
        behavior: 'smooth',
      });

      // Après la transition (1s), on saute au vrai premier sans transition
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(0); // remet current à 0 sans animation
        container.scrollTo({ left: 0 });
      }, 1000);

      return () => clearTimeout(timeout);
    } else {
      // Transition normale
      setIsTransitioning(true);
      container.scrollTo({
        left: slideWidth * current,
        behavior: 'smooth',
      });
    }
  }, [current]);


  return (
    <>
      <section className="carousel-section">
        <div
          className={`carousel-wrapper ${isTransitioning ? '' : 'no-transition'}`}
          ref={slidesRef} 
        >
          {slides.map((slide, index) => (
            <div
              className="carousel-slide"
              key={index}
              style={{ 
                backgroundImage: `url(${slide.image})` ,
                backgroundPosition: slide.position || 'center center'
              }}
            >
              <div className="carousel-content">
                <h1 className="carousel-title">{slide.text}</h1>
                <p className="carousel-sub">{slide.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-dots">
          {realSlides.map((_, index) => (
            <span
              key={index}
              className={`carousel-dot ${index === current % realSlides.length ? 'active' : ''}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </section>
    <section className="articles-grid" data-aos="fade-up">
      {articles.map(article => (
        <Link to={article.link} key={article.id} className="article-tile" data-aos="fade-up">
          <img src={article.image} alt={article.title} />
          <span>{article.title}</span>
        </Link>
      ))}
    </section>
      {/* Section dégradé avec gros texte */}
    <section
      className="gradient-banner"
      data-aos="zoom-in"
      style={{
        background: 'linear-gradient(335deg, rgba(39, 39, 39, 1), #151920de)',
        height: '60vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row', // ✅ correction ici
        justifyContent: 'center',
        textAlign: 'center',
        flexWrap: 'wrap', // (optionnel) pour meilleure responsivité
      }}
    >
      <h1 style={{
        fontSize: '3rem',
        width: '100%',
        fontWeight: 'bold',
        color: '#ffffffff',
        textShadow: '1px 1px 2px rgba(255, 255, 255, 0.1)',
        marginBottom: '0.5rem',
      }}>
        Découvrez d'autres produits
      </h1>
      <p style={{
        color: 'white',
        fontSize: '1.2rem',
        width: '100%',
      }}>
        Chaussures, Vêtements, Pantalons
      </p>
    </section>

    <section className="articles-grid" data-aos="fade-up">
      {articles.map(article => (
        <Link to={article.link} key={article.id} className="article-tile" data-aos="fade-up">
          <img src={article.image} alt={article.title} />
          <span>{article.title}</span>
        </Link>
      ))}
    </section>
     </>
  );
}
