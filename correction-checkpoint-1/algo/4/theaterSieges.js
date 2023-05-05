/*
Un employé de théatre souhaiterait obtenir la liste de tous les sièges présents dans sa salle principale.
Dans la salle les sièges sont répartis de la manière suivantes :
  - Il y a 26 colonnes de sièges, numérotés de "1" à "26"
  - Chaque colonne contient 100 sièges, numérotés de "1" à "100"

Compléter la fonction theaterSieges de manière à ce qu'elle retourne une matrice
où chaque sous-tableau liste les positions des sieges d'une rangée.

exemple du rendu final :

[
  ['1-1', '1-2', '1-3', ..., '1-100'],
  ['2-1', '2-2', '2-3', ..., '2-100'],
  ...
  ['26-1', '26-2', '26-3', ..., '26-100']
]
*/

function theaterSieges() {
  // Your code here !
  const res = [];
  for(let i=0;i<26;i++){
    const row = []
    for(let j=0; j<100;j++){
      row[j] = (i+1)+"-"+(j+1);
    }
    res[i] =row;
  }
  return res;
}

// Pour visualiser votre fonction.
console.log(theaterSieges());

module.exports = theaterSieges;
