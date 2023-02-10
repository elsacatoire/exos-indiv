//demande son nom à l'utilisateur
function askName() {
    let nom = prompt("Quel est ton nom ?");
    let accueil = "Bonjour " + nom
    console.log(accueil)
    document.body.innerHTML += "<h2>" + accueil +" </h2>"
  }

//demande l'année de naissance, calcul l'age et l'affiche

function askBirthYear() {
    let anneeN = prompt("Merci de renseigner ton année de naissance au format XXX");
    let moisN = prompt("Merci de renseigner ton mois de naissance au format X, ex mars = 3");
    const d = new Date();
    let anneeA = d.getFullYear();
    const m = new Date()
    let mois = m.getMonth()
    console.log(mois)
    
    if (moisN <= mois) {
        age = anneeA - anneeN
    } else {
        age = ( anneeA - anneeN ) - 1
    }

    console.log(age)
    document.body.innerHTML += "<h3> Tu as " + age + " ans </h3>"
}

askName()
askBirthYear()