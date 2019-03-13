Array.prototype.generateArray = function(nbr) {

    let persons = [];

    const hairs = ['blond', 'brun', 'roux', 'châtain'];
    const skinColors = ['noir', 'blanc'];
    const languages = ['français', 'anglais', 'espagnol'];
    const genders = ['homme', 'femme'];

    for (let i = 0; i < nbr; i++) {
        persons[i] = {
            hair: hairs[Math.floor(Math.random() * hairs.length)],
            skinColor: skinColors[Math.floor(Math.random() * skinColors.length)],
            language: languages[Math.floor(Math.random() * languages.length)],
            gender: genders[Math.floor(Math.random() * genders.length)]
        }
    }

    return persons;

};

Array.prototype.removeClone = function(randomProfils) {

    if (!Array.isArray(randomProfils)) { // Si le paramètre n'est pas un tableau => erreur
        throw "Ceci n'est pas un tableau"
        return false;
    }

    let stringProfil = []; // Initialise un tableau intermédiaire qui contiendra les valeurs des objets concaténées

    for (let i = 0; i < randomProfils.length; i++) { // Parcours le tableau des profils aléatoires


        let val = Object.values(randomProfils[i]).join('|'); // Concatène les valeurs de l'objet pour obtenir une string

        if (stringProfil.includes(val)) // Check si la valeur est présente dans le tableau des strings
            continue; // déjà présent 

        stringProfil.push(val); // pas encore présent on insère dans le tableau

    }

    let cleanProfils = [];
    for (let i = 0; i < stringProfil.length; i++) {

        val = stringProfil[i].split('|');
        cleanProfils[i] = {
            hair: val[0],
            skinColor: val[1],
            language: val[2],
            gender: val[3]
        }
    }

    return cleanProfils;
};

let tab = new Array();

const randomProfils = tab.generateArray(100);
const cleanProfils = tab.removeClone(randomProfils);

console.log(randomProfils);
console.log(cleanProfils);