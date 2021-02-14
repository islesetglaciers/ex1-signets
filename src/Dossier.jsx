import './Dossier.scss';
import BtnModifierDossier from './BtnModifierDossier';
import BtnAfficherSignets from './BtnAfficherSignets';

export default function Dossier(props) {
    return (
        <li className="Dossier">
            <BtnAfficherSignets />
            <img src={'images-dossiers/' + props.id + '.jpg'} alt="" srcset=""/>
            <div className="info">
                <p className="titre">{props.titre}</p>
                <p className="date">Modifié le: {props.date}</p>
                <BtnModifierDossier />
            </div>
        </li>
    )
}