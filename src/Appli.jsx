import './Appli.scss';
import BtnAjoutDossier from './BtnAjoutDossier';
import ListeDossiers from './ListeDossiers';
import Entete from './Entete';

export default function Appli() {
  return (
    <div className="Appli">
        <header>
          <Entete />
        </header>
        <section className="contenuPrincipal">
          <ListeDossiers />
        </section>
        <BtnAjoutDossier />
    </div>
  );
}
