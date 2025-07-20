import { Routes, Route } from 'react-router-dom'; // plus de BrowserRouter ici
import Header from './components/Header';
import Footer from './components/Footer';
import '../styles/globals.css';

import Accueil from "./pages/Accueil";
import APropos from "./pages/APropos";
import Contact from "./pages/Contact";
import Livres from "./pages/Livres";
import Panier from "./pages/Panier";

/* import Recherche from "./pages/Recherhe";
// import ConnexionClient from "./pages/ConnexionClient";
// import CompteClient from "./pages/CompteClient ";
*/


// HOMMES
import Qamis from "./pages/Hommes/Qamis";
import TShirts from "./pages/Hommes/Tshirts";
import Pantalons from "./pages/Hommes/Pantalons";
import ChaussuresHommes from "./pages/Hommes/ChaussuresHommes";
import AccessoiresHommes from "./pages/Hommes/AccessoiresHommes";

// FEMMES
import VoileEtAccessoires from "./pages/Femmes/VoileEtAccessoires";
import ChaussuresFemmes from "./pages/Femmes/ChaussuresFemmes";

function App() {
  return (
    <>
      <Header />  
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Hommes/Qamis" element={<Qamis />} />
          <Route path="/Hommes/TShirts" element={<TShirts />} />
          <Route path="/Hommes/Pantalons" element={<Pantalons />} />
          <Route path="/Hommes/ChaussuresHommes" element={<ChaussuresHommes />} />
          <Route path="/Hommes/AccessoiresHommes" element={<AccessoiresHommes />} />
          <Route path="/Femmes/VoileEtAccessoires" element={<VoileEtAccessoires />} />
          <Route path="/Femmes/ChaussuresFemmes" element={<ChaussuresFemmes />} />
          <Route path="/Livres" element={<Livres />} />
          <Route path="/APropos" element={<APropos />} />
          <Route path="/Contact" element={<Contact />} />
          {/* <Route path="/Recherche" element={<Recherche />} /> */}
          {/* <Route path="/Connexion" element={<Connexion />} /> */}
          {/* <Route path="/CompteClient" element={<CompteClient />} /> */}
          <Route path="/Panier" element={<Panier />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
