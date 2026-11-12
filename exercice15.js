const affaires = [
{nom: "Dupont", prix: 1200, cout: 800},
{nom: "Martin", prix: 900, cout: 1000},
{nom: "Leroy", prix: 2000, cout: 1100}
];
let total = 0;
for (const affaire of affaires) {console.log (affaire.nom);
console.log (affaire.prix - affaire.cout);
total = total + (affaire.prix - affaire.cout);
}
console.log (total);
