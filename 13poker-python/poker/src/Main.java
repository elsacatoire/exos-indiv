public class Main {
    public static void main(String[] args) {
        System.out.println("Welcome to Elsa's Poker!");
        Deck newDeck = new Deck();
        newDeck.initializeDeck();
        newDeck.displayDeck();
    }
}

//1. Lancer le jeu
// on va créer un deck (une classe) à partir d'isntances de cartes (classe Card)
// on a besoin de mélanger les cartes

//2. Le deck
// il est constutué de 52 cartes différentes
// comportement : shuffle, deal (nb de carte à distribuer) qui enlève des cartes

//3. Gérer les joueurs (créer classe Player)
// on a besoin d'une class de jeu (Game) qui créé le bon nombre de joueurs (class Player)
// les joueurs on en attribut : leur nom et leur main (qui est une lsite ?)
//COMPORTEMENTS :
// les joueurs peuvent : revecoir des cartes (du deal du deck)
// il peuvent se coucher
// ils peuvent suivre
// Ils peuvent sur miser

//4. Le FLOP (créer une classe Flop)
//Le flop doit recevoir 3 cartes, puis 1, puis 1
// en attribut sa composition
// il doit se révéler au joueur

//. Le gameplay (classe à cérer):
// peut conteniir les combinaison et leurs valeurs (carte simple, paire ...)
// comportement : trouve la plus haute combinaison entre main et flop pour chaque joueur



