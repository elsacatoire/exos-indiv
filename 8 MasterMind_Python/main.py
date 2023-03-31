# set of the game rules
def winning_combination():
    """
    set the winning combination
    :return:
    """
    right_combination = ["blue", "blue", "yellow", "green"]
    return right_combination


def colors_allowed():
    """
    set the colors allowed in the game
    :return: the list of colores that are allowed
    """
    game_colors = ["blue", "red", "yellow", "green", "black", "white", "pink"]
    return game_colors


def rounds_number():
    rounds = 12
    return rounds

# useful function to play the game
def guesser_combination():
    """
    ask the player to enter a combination in order to guess the right combination
    :return: the player_guesser combination
    """
    right_combination_list = winning_combination()
    player_combination_list = []
    for i in range(len(right_combination_list)):
        ask_a_color = input(f"              color {i+1} ? ")
        while check_right_colors(ask_a_color) == (not True):
            ask_a_color = input(f"              color {i + 1}? ")
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


def check_guess_a_color(guesser_combination_list):
    win_combination_list = winning_combination()
    check_list = []
    misplaced = 0
    right_place = 0
    for i in range(len(guesser_combination_list)):
        if guesser_combination_list[i] == win_combination_list[i]:
            right_place += 1
    else:
        if guesser_combination_list[i] in win_combination_list:
            misplaced += 1
    check_list.append(right_place)
    check_list.append(misplaced)
    return check_list


# this is the game !
def game_play():
    """
    plays the game
    :return: True when finished
    """
    attempts = 3
    print("==>Welcome to Elsa's MasterMind !!! Here are the rules :")
    print(f"you've got {rounds_number()} chances to find the secret combination")
    print(f"possible colors are : {colors_allowed()}")
    for i in range(attempts):
        print(f"        round {i+1} : ")
        player_combination = guesser_combination()
        print(f"try again : {check_guess_a_color(player_combination)}")
        if did_win(player_combination):
            print("win")
            break
    if did_win(player_combination):
        its_a_win(attempts)
    else:
        its_a_lost(attempts)


# part of the code where the winning/loosing condition and consequences are set
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


def its_a_win(attempts):
    """
    set what the game does when the player win
    :return:
    """
    print(f"congrats, you won in {attempts} rounds")


def its_a_lost(attempts):
    """
    set what the game does when the player loose
    :return:
    """
    print(f"you loose, too many rounds : {attempts}")


# We run things here :)
if __name__ == '__main__':
    game_play()


# See PyCharm help at https://www.jetbrains.com/help/pycharm/
