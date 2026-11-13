const affaires = [
{nom: "Dupont", prix: 1200, cout: 800},
{nom: "Martin", prix: 900, cout: 1000},
{nom: "Leroy", prix: 2000, cout: 1100},
{nom: "Durand", prix: 500, cout: 450},
{nom: "Petit", prix: 1500, cout: 1700},
{nom: "Moreau", prix: 3000, cout: 2200}
];
let total = 0;
for (const affaire of affaires) {console.log (affaire.nom);
console.log (affaire.prix - affaire.cout);
total= total + (affaire.prix- affaire.cout);
};
console.log (total);

