
import React from 'react';
import Header from '../components/Header';

const Accueil = () => {
  return (
    <>

      <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Bienvenue sur ModestWay</h1>
        <p>
          Ta boutique en ligne de vêtements modestes. Explore notre collection pour hommes et femmes, des
          accessoires élégants, et bien plus encore.
        </p>

        {/* Faux contenu long pour tester le scroll */}
        <div style={{ marginTop: '3rem' }}>
          {Array.from({ length: 20 }).map((_, i) => (
            <p key={i}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium.
            </p>
          ))}
        </div>
      </main>
    </>
  );
};

export default Accueil;
