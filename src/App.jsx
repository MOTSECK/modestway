import { Routes, Route } from 'react-router-dom'; // plus de BrowserRouter ici
import Header from './components/Header';
import Footer from './components/Footer';

import Accueil from './pages/Accueil';
import Qamis from './pages/Hommes/Qamis';
import TShirts from './pages/Hommes/TShirts';
import Pantalons from './pages/Hommes/Pantalons';
import ChaussuresHommes from './pages/Hommes/ChaussuresHomme';
import AccessoiresHommes from './pages/Hommes/AccessoiresHommes';
import VoileEtAccessoires from './pages/Femmes/VoileEtAccessoires';
import ChaussuresFemmes from './pages/Femmes/ChaussuresFemmes';
import Livres from './pages/Livres';
import Recherche from './pages/Recherche';
import Contact from './pages/Contact';
import APropos from './pages/APropos';
import Panier from './pages/Panier';

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-black p-4">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Hommes/qamis" element={<Qamis />} />
          <Route path="/Hommes/tshirts" element={<TShirts />} />
          <Route path="/Hommes/pantalons" element={<Pantalons />} />
          <Route path="/Hommes/ChaussuresHommes" element={<ChaussuresHommes />} />
          <Route path="/Hommes/AccessoiresHommes" element={<AccessoiresHommes />} />
          <Route path="/Femmes/VoileEtAccessoires" element={<VoileEtAccessoires />} />
          <Route path="/Femmes/ChaussuresFemmes" element={<ChaussuresFemmes />} />
          <Route path="/Livres" element={<Livres />} />
          <Route path="/Panier" element={<Panier />} />
          <Route path="/Recherche" element={<Recherche />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Apropos" element={<APropos />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
