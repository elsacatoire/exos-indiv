import random


class Card:
    """Standard card"""
    def __init__(self, color, value):
        self.color = color
        self.value = value

    def __str__(self):
        return f"{self.value} of {self.color}"


class Deck:
    def __init__(self):
        self.cards = []
        self.create_deck()

    def create_deck(self):
        """
        Create a standard deck of card, unordered
        :return: the deck
        """
        color_names = ["Spade", "Club", "Heart", "Diamond"]
        value_names = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'valet', 'dame', 'roi']
        for color in color_names:
            for value in value_names:
                card = Card(color, value)
                self.cards.append(card)

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

