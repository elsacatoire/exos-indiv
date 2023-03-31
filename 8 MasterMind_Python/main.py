# This is a sample Python script.

# Press Maj+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.


def ask_combination():
    player_combination_str = input("guess the combination")
    player_combination_list = player_combination_str.split(", ")
    print(type(player_combination_list))
    print(player_combination_list)
    return player_combination_list


def check_right_colors(player_combination):
    colors_allowed = ["blue", "red", "yellow", "green"]
    while player_combination not in colors_allowed:
        print(f"colors should be{colors_allowed}")
        player_combination = ask_combination()
    print("colors are authorized")


def did_win(player_combination):
    right_combination = ["red", "green"]
    if player_combination == right_combination:
        print("congrats, you won !")
        return True
    else:
        print("try again")
        return False


def game_play():
    player_combination = ask_combination()
    check_right_colors(player_combination)
    did_win(player_combination)


if __name__ == '__main__':
    game_play()


# See PyCharm help at https://www.jetbrains.com/help/pycharm/
