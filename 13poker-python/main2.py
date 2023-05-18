import random


class Card:
    """Standard card"""
    def __init__(self, color, value):
        self.color = color
        self.value = value

    def card_name(self):
        return self.value + " of " + self.color


class Deck:
    def __init__(self):
        self.cards = []
        self.create_deck()

    def create_deck(self):
        """
        Create a standard deck of card, unordered
        :return: the deck
        """
        colors = ["Spade", "Club", "Heart", "Diamond"]
        values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'valet', 'dame', 'roi', 'Ace']
        self.cards = []
        for color in colors:
            for value in values:
                self.cards.append(Card(color, value))
    deck = create_deck()

    for card in deck:
        print(card.card_name())

    def shuffle(self):
        random.shuffle(self.cards)

    def deal_card(self):
        if len(self.cards) > 0:
            return self.cards.pop()
        else:
            return None


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    print("hello")
    deck = Deck()
    print(deck.shuffle())

