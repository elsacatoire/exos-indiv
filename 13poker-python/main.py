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
    hand = random.sample(deck, given_cards)
    for card in hand:
        deck.remove(card)
    return hand


Player1 = deal(2)
Player2 = deal(2)

# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    print("hello")
    print(deck)
    print(Player1, Player2)
    print(len(deck))



