const marges = [120, 800, -300, 450, 60];
let meilleure = marges[0];
for (const marge of marges) {
if (marge>meilleure) {
meilleure = marge;
}
}
console.log (meilleure);
