# This is a sample Python script.
import random


# Press Maj+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.


def print_hi(name):
    print(f'Hi, {name}')


def create_deck():
    """Create a standard deck of card, unordered """
    deck = []
    ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    colors = ['♠', '♣', '♡', '♢']

    # Create a 52 cards deck
    for color in colors:
        for rank in ranks:
            card = rank + color
            deck.append(card)

    # Mix deck
    random.shuffle(deck)

    return deck


deck = create_deck()


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    print_hi('Elsa')
    print(deck)
    print(len(deck))


