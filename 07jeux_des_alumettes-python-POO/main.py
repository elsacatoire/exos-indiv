"""
Exercise 7 : Candies' game
Elsa des bois 16 06 2023
POO
"""


class MatchBox:
    """
    Administration of the matches box we play with.
    """
    def __init__(self, matches_quantity):
        self.quantity = matches_quantity

    def get_quantity(self):
        try:
            return print(self.quantity)
        except AttributeError:
            print("quantity is not defined")

    def remove_matches(self, quantity_to_remove, player):
        if quantity_to_remove in [1, 2, 3, 4, 5, 6]:
            print(f"{player.name} removes {quantity_to_remove} matches")
            self.quantity -= quantity_to_remove
        else:
            print("quantity should be between 1 and 6")

    def did_win_the_game(self):
        if self.quantity <= 0:
            print("You won the game")
        else:
            print("Next Player")


class Player:
    """
    Everything to create a player.
    """
    def __init__(self, name, is_winner):
        self.name = name
        self.is_winner = is_winner

    def get_is_winner(self):
        return print(self.is_winner)

    def win(self):
        self.is_winner = True



if __name__ == '__main__':
    # given_quantity = ask_quantity()
    match_box = MatchBox(50)
    match_box.get_quantity()
    player1 = Player("Elsa", False)
    player2 = Player("Alissia", False)
    match_box.remove_matches(3, player1)
    player1.get_is_winner()


# See PyCharm help at https://www.jetbrains.com/help/pycharm/
