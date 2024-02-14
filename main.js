// Sélection des éléments du DOM
const taille = document.getElementById('taille');
const poids = document.getElementById('poids');
const result = document.querySelector('.result');
const form = document.querySelector('form');
const category = document.querySelector('.categorie');

// Variables pour stocker les valeurs de taille et de poids de l'utilisateur
let userTaille;
let userPoids;

// Écouteurs d'événements pour récupérer les valeurs entrées par l'utilisateur
taille.addEventListener('input', (e) => {
  userTaille = e.target.valueAsNumber;
});

poids.addEventListener('input', (e) => {
  userPoids = e.target.valueAsNumber;
});

// Fonction pour calculer l'IMC
function imc(a, b) {
  b = b * 0.01;
  let result = a / (b * b);
  return result;
}

// Écouteur d'événement pour le formulaire de calcul d'IMC
form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (userTaille && userPoids) {
    // Calcul de l'IMC et affichage du résultat
    let imcUser = imc(userPoids, userTaille).toFixed(1);
    result.textContent = imcUser;
    result.style.color = 'salmon';

    // Attribution d'une catégorie en fonction de l'IMC calculé
    let userCateg;
    if (imcUser >= 18.5 && imcUser <= 24.9) {
      userCateg = 'Poids normal.';
    } else if (imcUser >= 25 && imcUser <= 29.9) {
      userCateg = 'Surpoids.';
    } else if (imcUser >= 30 && imcUser <= 34.9) {
      userCateg = 'Obésité de classe 1.';
    } else if (imcUser >= 35 && imcUser <= 39.9) {
      userCateg = 'Obésité de classe 2. (sévère)';
    } else if (imcUser >= 40) {
      userCateg = 'Obésité de classe 3. (massive)';
    } else {
      userCateg = "MANGEZ PLUS ! Il n'y a presque rien à calculer !!";
    }

    // Affichage de la catégorie correspondante
    category.textContent = userCateg;
  } else {
    afficherPopup();
  }
});

// Fonction pour afficher une popup si les champs sont vides
function afficherPopup() {
  const modal = document.querySelector('.modal');
  modal.classList.add('modalOut');

  const closePop = document.getElementById('close');

  // Écouteur d'événement pour fermer la popup
  closePop.addEventListener('click', () => {
    modal.classList.remove('modalOut');
  });
}


