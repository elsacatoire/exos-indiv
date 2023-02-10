//Etape 1 : demande son nom à l'utilisateur et l'accueille
//Déclaration de fonction
function askName() {
    //Ouvre une fenêtre pour demander le prénom de l'usager
    let nom = prompt("Quel est ton prénom ?");
    //Créé une variable pour stocker le message d'accueil de l'usager contenant son prénom
    let accueil = "👋Bonjour " + nom
    console.log(accueil)
    //Affiche la variable dans la page HTML
    document.body.innerHTML += "<h2>" + accueil +" </h2>"
  }

//Etape 2 : demande l'année de naissance, calcule son age et l'affiche
//déclaration de fonction
function askBirthYear() {
    //ouvre une fenêtre pour demander l'année de naissance de l'usager, puis une nouvelle fenêtre pour le mois
    let anneeN = prompt("Merci de renseigner ton année de naissance au format XXXX")
    //s'assure que l'entrée année est bien de 4 caractères
    while (anneeN.length != 4){
        anneeN = prompt("Il est important de renseigner ton année de naissance au BON format XXXX");
    }
    let moisN = prompt("Merci de renseigner ton mois de naissance au format XX, ex mars = 03");
    //récupère l'année actuelle et la stocke dans une variable anneeA, puis récupère le mois actuel et le stocke dans la variable moisA
    const d = new Date();
    let anneeA = d.getFullYear();
    const m = new Date();
    let mois = m.getMonth();
    console.log(mois);
    //compare le mois de naissance et le mois actuel afin d'affiner l'âge de l'usager et calcule l'âge de l'usager
    if (moisN <= mois) {
        age = anneeA - anneeN
    } else {
        age = ( anneeA - anneeN ) - 1
    }
    console.log(age);
    //Affiche dans la page HTML la variable age
    document.body.innerHTML += "<h3> Tu as " + age + " ans </h3>"
}

//appelle les fonctions
askName()
askBirthYear()