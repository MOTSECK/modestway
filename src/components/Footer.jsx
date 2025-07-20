import '../../styles/footer.css';
import '../../styles/globals.css';
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h4>PRODUITS</h4>
          <ul>
            <li>Chaussures</li>
            <li>Vêtements</li>
            <li>Accessoires</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>SPORTS</h4>
          <ul>
            <li>Running</li>
            <li>Basketball</li>
            <li>Football</li>
            <li>Yoga</li>
            <li>Outdoor</li>
            <li>Tennis</li>
            <li>Training</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>CATÉGORIE</h4>
          <ul>
            <li>Hommes</li>
            <li>Femmes</li>
            <li>Enfants</li>
            <li>Outlet</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>INFORMATION SUR LA SOCIÉTÉ</h4>
          <ul>
            <li>Qui sommes nous ?</li>
            <li>Emploi</li>
            <li>Presse</li>
            <li>Club</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>ASSISTANCE</h4>
          <ul>
            <li>Aide</li>
            <li>Livraison</li>
            <li>Retours</li>
            <li>Suivi de commande</li>
            <li>Newsletter</li>
            <li>Cartes cadeau</li>
            <li>Tableaux des tailles</li>
            <li>Nous contacter</li>
            <li>Trouver un magasin</li>
          </ul>
        </div>
        <div className="footer-column social">
          <h4>SUIVEZ-NOUS</h4>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          <span>Paramètres de données</span> |
          <span className="maroc-flag">🇲🇦 Morocco</span> |
          <span>Paramètres des cookies</span> |
          <span>Politique de protection des données</span> |
          <span>Conditions générales</span> |
          <span>Mentions légales</span>
        </p>
      </div>
    </footer>
  );
}
