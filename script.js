const affaires = [
{nom: "Dupont", prix: 1200, cout: 800},
{nom: "Martin", prix: 900, cout: 1000},
{nom: "Leroy", prix: 2000, cout: 1100},
{nom: "Durand", prix: 500, cout: 450},
{nom: "Petit", prix: 1500, cout: 1700},
{nom: "Moreau", prix: 3000, cout: 2200}
];
let total = 0;
let pire = affaires[0].prix - affaires[0].cout;
let nomPire = affaires[0].nom;
for (const affaire of affaires) {console.log (affaire.nom);
console.log (affaire.prix - affaire.cout);
total= total + (affaire.prix- affaire.cout);
if (affaire.prix - affaire.cout < pire) {
pire = (affaire.prix - affaire.cout);
nomPire = affaire.nom;
}
}
console.log (nomPire);
console.log (pire);
console.log (total);

