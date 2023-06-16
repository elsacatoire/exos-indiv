import java.util.ArrayList;
import java.util.List;

public class Deck {
    private List<Card> cards;

    public Deck(){
        this.cards = new ArrayList<>();
    }

    public List<Card> initializeDeck() {
        String[] suits = {"Heart", "Diamonds", "Clubs", "Spades"};
        String[] values = {"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"};

        for (String suit : suits) {
            for (String value : values){
                Card card = new Card(value, suit);
                cards.add(card);
            }
        }
        return cards;
    }

    public List<Card> getDeck(){
        return cards;
    }

    public void displayDeck(){
        for (Card card : cards){
            System.out.println(card.getValue() + " of " + card.getSuit());
        }
    }

    public void shuffleDeck(){
        System.out.println("we need to shuffle this deck");
    }
}

