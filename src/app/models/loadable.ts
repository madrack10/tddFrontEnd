/**
 *  Classe chargeable. Classe parent pour tous les objets chargés à partir de la base de données.
 */
export abstract class Loadable {

    /**
     * Charge les données de la source JSON dans les propriétés de l'objet.
     * @param Object source an object, e.g., from JSON.
     */



    init(source) {
        // tslint:disable-next-line:forin
        for (const prop in source) {
            this[prop] = source[prop];
        }
    }
}
