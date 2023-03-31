def winning_combination():
    right_combination = ["red", "green"]
    return right_combination


def ask_combination():
    """
    ask the player to enter a combination in order to guess the right combination
    :return: the player_guesser combination
    """
    right_combination_list = winning_combination()
    # size_combination = len(right_combination_list)
    player_combination_list = []
    for i in range(len(right_combination_list)):
        ask_a_color = input(f"color{i+1}")
        while check_right_colors(ask_a_color) == (not True):
            ask_a_color = input(f"color{i + 1}")
            player_combination_list.append(ask_a_color)
    print(player_combination_list)
    return player_combination_list


def check_right_colors(player_color):
    """

    :param player_color: the try oh the player_guesser, got it with ask_combination()
    :return: True when the check is a succes
    """
    colors_allowed = ["blue", "red", "yellow", "green"]
    if player_color not in colors_allowed:
        print(f"colors should be{colors_allowed}")
        return False
    else:
        print("colors are authorized")
        return True


def did_win(player_combination):
    """
    check if the player won
    :param player_combination: last move played by the player_guesser
    :return: True or False
    """

    if player_combination == winning_combination():
        print("congrats, you won !")
        return True
    else:
        print("try again")
        return False


def game_play():
    """
    plays the game
    :return: True when finished
    """
    player_combination = ask_combination()
    check_right_colors(player_combination)
    did_win(player_combination)
    return True


def its_a_win():
    print("congrats, you won in X attempts")


# We run things here :)
if __name__ == '__main__':
    if game_play():
        its_a_win()


# See PyCharm help at https://www.jetbrains.com/help/pycharm/
