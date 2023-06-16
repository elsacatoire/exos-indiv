import java.util.ArrayList;

public class Deck {
    private List<Card> cards;

    public Deck(){
        this.cards = new ArrayList<>();
    }

    public void initializeDeck() {
        String[] suits = {"Heart", "Diamonds", "Clubs", "Spades"};
        String[] values = {"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"};

        for (String suit : suits) {
            for (String value : values){
                Card card = new Card(value, suit);
                cards.add(card);
            }
        }
    }
}
