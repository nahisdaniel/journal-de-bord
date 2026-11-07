const marges = [400, -100, 250, -50, 90];
let compteur = 0;
for (const marge of marges) {
if (marge>0) {
compteur = compteur + 1;
}
}
console.log (compteur);