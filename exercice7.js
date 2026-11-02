function categorie (marge) {if (marge>500) {return "très bonne affaire";}
else if (marge>0) {return "affaire correcte";}
else {return "affaire perdante";}
}
console.log (categorie(-2))