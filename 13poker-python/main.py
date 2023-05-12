import random


def create_deck():
    """Create a standard deck of card, unordered """
    new_deck = []
    ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    colors = ['♠', '♣', '♡', '♢']

    # Create a 52 cards deck
    for color in colors:
        for rank in ranks:
            card = rank + color
            new_deck.append(card)

    # Mix deck
    random.shuffle(new_deck)

    return new_deck


deck = create_deck()


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    print(deck)
    print(len(deck))


