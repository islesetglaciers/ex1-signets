import Dossier from './Dossier';
import './ListeDossiers.scss';
import tabDossiers from './data/dossiers.json';

export default function ListeDossiers(props) {
    return (
        <ul>
            {tabDossiers.map(doss => 
                <Dossier key={doss.id} id={doss.id} titre={doss.titre} couleur={doss.couleur} date={doss.date} />
            )}
            
        </ul>
    )
}