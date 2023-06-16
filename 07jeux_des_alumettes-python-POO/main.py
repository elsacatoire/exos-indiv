"""
Exercise 7 : Candies' game
Elsa des bois 16 06 2023
POO
"""


class MatchBox:
    def __init__(self, matches_quantity):
        self.quantity = matches_quantity

    def _get_quantity(self):
        try:
            return print(self.quantity)
        except AttributeError:
            print("quantity is not defined")

    def remove_matches(self, quantity_to_remove):
        self.quantity -= quantity_to_remove

    def did_win_the_game(self):
        if self.quantity <= 0:
            print("You won the game")
        else:
            print("Next Player")


class Player:
    def __init__(self, name, is_winner):
        self.name = name
        self.is_winner = is_winner

    def _get_is_winner(self):
        if self.is_winner == True:


    def win(self):
        self.is_winner = True



if __name__ == '__main__':
    # given_quantity = ask_quantity()
    match_box = MatchBox(50)
    match_box.remove_matches(3)
    match_box._get_quantity()
    player1 = Player("Elsa", False)
    player2 = Player("Alissia", False)
    player1.i


# See PyCharm help at https://www.jetbrains.com/help/pycharm/
