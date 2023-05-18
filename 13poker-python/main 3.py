class Card(object):
    def __init__(self, suit, val):
        self.suit = suit
        self.value = val

    def show(self):
        print (f"{self.value} of {self.suit}")


class Deck(object):
    def __init__(self):
        self.cards = []
        self.build()

    def build(self):
        for s in ["Space"]

'''class Player(object):
    def __init__(self):'''

card = Card("Clubs", 6)
card.show()
