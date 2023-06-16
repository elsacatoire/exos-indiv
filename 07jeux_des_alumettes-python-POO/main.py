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
        self._quantity = matches_quantity

    def _get_total_matches(self):
        try:
            return self.quantity
        except AttributeError:
            print("quantity is not defined")

    def remove_matches(self, quantity_to_remove, player):
        print(f"{player.name} removes {quantity_to_remove} matches")
        self.quantity -= quantity_to_remove

    def did_win_the_game(self):
        if self.quantity <= 0:
            print("You won the game")
            return True
        else:
            print("Next Player")
            return False


class Player:
    """
    Everything to create a player.
    """
    def __init__(self, name, is_winner):
        self._name = name
        self._is_winner = is_winner

    def ask_quantity(self):
        given_quantity = 0
        while given_quantity not in [1, 2, 3, 4, 5, 6]:
            given_quantity = input(f"{self.name} how many matches do you take ?")
        return int(given_quantity)

    def _get_name(self):
        try:
            return self._name
        except AttributeError:
            print("Error : name is not defined")

    def _get_is_winner(self):
        return self._is_winner

    def win(self):
        self._is_winner = True


def end_game():
    print("game is over")


class Game:
    def __init__(self, game_nb):
        self.round = game_nb

    # initialize the game
    match_box = MatchBox(50)
    quantity_of_players = int(input("How many players ?"))
    for player in quantity_of_players:
        player_name = input(f"Hello player {player}, what is your name ?")
        player1 = Player(player_name, False)

    # play the game
    while match_box._quantity > 50:
        quantity_played = player1.ask_quantity()
        match_box.remove_matches(quantity_played)




if __name__ == '__main__':
    # given_quantity = ask_quantity()
    match_box = MatchBox(50)
    match_box.get_quantity()
    player1 = Player("Elsa", False)
    player2 = Player("Alissia", False)
    match_box.remove_matches(3, player1)
    player1.get_is_winner()


# See PyCharm help at https://www.jetbrains.com/help/pycharm/
