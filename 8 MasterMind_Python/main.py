def winning_combination():
    """
    set the winning combination
    :return:
    """
    right_combination = ["red", "green"]
    return right_combination


def colors_allowed():
    """
    set the colors allowed in the game
    :return: the list of colores that are allowed
    """
    game_colors = ["blue", "red", "yellow", "green"]
    return game_colors


def ask_combination():
    """
    ask the player to enter a combination in order to guess the right combination
    :return: the player_guesser combination
    """
    right_combination_list = winning_combination()
    player_combination_list = []
    for i in range(len(right_combination_list)):
        ask_a_color = input(f"color {i+1}")
        while check_right_colors(ask_a_color) == (not True):
            ask_a_color = input(f"color {i + 1}")
        player_combination_list.append(ask_a_color)
    print(player_combination_list)
    return player_combination_list


def check_right_colors(player_color):
    """

    :param player_color: the try oh the player_guesser, got it with ask_combination()
    :return: True when the check is a success
    """
    possible_colors = colors_allowed()
    if player_color not in possible_colors:
        print(f"colors should be{possible_colors}")
        return False
    else:
        return True


def did_win(player_combination):
    """
    check if the player won
    :param player_combination: last move played by the player_guesser
    :return: True or False
    """

    if player_combination == winning_combination():
        return True
    else:
        print("try again")
        return False


def game_play():
    """
    plays the game
    :return: True when finished
    """
    attempts = 3
    for i in range(attempts):
        print(f"round {i+1}")
        player_combination = ask_combination()
        if did_win(player_combination):
            print("win")
            break
    if did_win(player_combination):
        its_a_win()
    else:
        its_a_lost(attempts)


def its_a_win(attempts):
    """
    set what the game does when the player win
    :return:
    """
    print(f"congrats, you won in {attempts} attempts")


def its_a_lost(attempts):
    """
    set what the game does when the player loose
    :return:
    """
    print(f"you loose, over the attempts allowed {attempts}")


# We run things here :)
if __name__ == '__main__':
    game_play()


# See PyCharm help at https://www.jetbrains.com/help/pycharm/
