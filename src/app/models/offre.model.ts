import { User } from './user.model';
import { TypeContrat } from './typeContrat.model';
import { Domaine } from './domaine.model';

export class Offre {
    id ?: number;
    titre: string;
    description: string;
    jobID: number;
    profilRequis: string;
    avantageRelative: string;
    publishOn: Date;
    dateOuverture: Date;
    dateLimite: Date ;
    localisation: string;
    auteur: User;
    typeoffre: TypeContrat;
    domaine: Domaine;
}

