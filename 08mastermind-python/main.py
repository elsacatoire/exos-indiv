# set of the game rules
def winning_combination():
    """
    set the winning combination. Uses a random pick for each color in the authorized colors
    :return:the winning combination as a list
    """
    import random
    right_combination = []
    list_to_pick_in = colors_allowed()
    for i in range(4):
        color_buffer = random.choice(list_to_pick_in)
        right_combination.append(color_buffer)
    return right_combination


def colors_allowed():
    """
    set the colors allowed in the game
    :return: the list of colores that are allowed
    """
    game_colors = ["blue", "red", "yellow", "green", "black", "white", "pink"]
    return game_colors


def rounds_number():
    """
    defines the number of rounds in witch the player can guess the combination
    :return: an int representing the rounds allowed
    """
    rounds = 12
    return rounds


# useful function to play the game
def guesser_combination():
    """
    ask the player to enter a combination in order to guess the right combination
    :return: the player_guesser combination
    """
    player_combination_list = []
    for i in range(4):
        ask_a_color = input(f"              color {i+1} ? ")
        while check_right_colors(ask_a_color) == (not True):
            ask_a_color = input(f"              color {i + 1}? ")
        player_combination_list.append(ask_a_color)
    print(player_combination_list)
    return player_combination_list


def check_right_colors(player_color):
    """
    check if the color entered by the player is authorized
    :param player_color: the try oh the player_guesser, got it with ask_combination()
    :return: True when the check is a success
    """
    possible_colors = colors_allowed()
    if player_color not in possible_colors:
        print(f"colors should be{possible_colors}")
        return False
    else:
        return True


def check_guess_a_color(guesser_combination_list, victory_condition):
    """
    check if the combination tried by the user
    :param victory_condition: the winning order
    :param guesser_combination_list: combination to try. Comes from guesser_combination()
    :return: a list with txo int, the first is the nb of right placed pawns
    the second the misplaced pawns
    """
    check_list = []
    misplaced = 0
    right_place = 0
    for i in range(len(guesser_combination_list)):
        if guesser_combination_list[i] == victory_condition[i]:
            right_place += 1
        else:
            if guesser_combination_list[i] in victory_condition:
                misplaced += 1
    check_list.append(right_place)
    check_list.append(misplaced)
    print(f"{check_list} : {right_place} in the right place and {misplaced} misplaced")
    return check_list


# this is the game !
def game_play():
    """
    plays the game
    :return: nothing for now
    """
    attempts = 3
    combination_to_guess = winning_combination()
    print("==>Welcome to Elsa's MasterMind !!! Here are the rules :")
    print(f"you've got {rounds_number()} chances to find the secret combination")
    print(f"possible colors are : {colors_allowed()}")
    for i in range(attempts):
        print(f"        round {i+1} : ")
        player_combination = guesser_combination()
        check_guess_a_color(player_combination, combination_to_guess)
        if did_win(player_combination, combination_to_guess):
            its_a_win(i+1)
            break
        if i == (attempts - 1):
            its_a_lost(attempts)


# part of the code where the winning/loosing condition and consequences are set
def did_win(player_combination, victory_condition):
    """
    check if the player won
    :param victory_condition: right combination
    :param player_combination: last move played by the player_guesser
    :return: True or False
    """

    if player_combination == victory_condition:
        return True
    else:
        return False


def its_a_win(attempts):
    """
    set what the game does when the player win
    :return: nothing for now
    """
    print(f"congrats, you won in {attempts} rounds")


def its_a_lost(attempts):
    """
    set what the game does when the player loose
    :return: nothing for now
    """
    print(f"you loose, too many rounds : {attempts}")


# We run things here :)
if __name__ == '__main__':
    game_play()
