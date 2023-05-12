import random


def create_deck():
    """
    Create a standard deck of card, unordered
    :return: the deck
    """
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


def deal(given_cards):
    """
    deal the cards to the players and the main game
    :param given_cards: numer of cards given to players or river
    :return: modified deck
    """
    global deck
    cards = random.sample(deck, given_cards)
    for card in cards:
        deck.remove(card)
    return cards


Player1 = deal(2)
Player2 = deal(2)


def flop():
    burned_cards = [deal(1)]
    flop_cards = deal(3)
    burned_cards.append(deal(1))
    flop_cards.append(deal(1))
    burned_cards.append(deal(1))
    flop_cards.append(deal(1))
    return flop_cards


cards = flop()


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    print("hello")
    print(deck)
    print(Player1, Player2)
    print(len(deck))
    print(flop())
    print(len(deck))
