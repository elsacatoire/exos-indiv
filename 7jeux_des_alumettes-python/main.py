"""
Exercise 7 : le Jeu des allumettes
Elsa Catoire - 24.03.2023
"""

# Press Maj+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.
candy_box = 50


def remove_candies(candy_nb):
    """
    removes the given number of candies from the total amount
    :param candy_nb: candies' quantity that the player chooses to remove
    :return: quantity of candies left
    """
    global candy_box
    candy_box = candy_box - candy_nb
    return candy_box


def ask_quantity():
    """
    ask one player a quantity to remove from the box
    quantity has to be between 1 and 6


    :return:
    """
    player_quantity = int(input("Hi ! How many candy do you take ?"))
    while player_quantity > 6:
        print("number has to be between 1 and 6")
        player_quantity = int(input("Hi ! How many candy do you take ?"))
    print(f"you got {player_quantity} candies")
    return int(player_quantity)


def did_win(candies_left):
    """
    check if the payer didWin thanks to his last move
    :param candies_left:
    :return:
    """
    if candies_left == 1:
        print("Congrats ! You win !")
    else:
        print("There is still more than one candy in the box. Play again !")


def game_play():
    """
    plays the game calling all the different functions
    :return:
    """


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    given_quantity = ask_quantity()
    print(f"there is {remove_candies(given_quantity)} left in the box")
    did_win(candy_box)


# See PyCharm help at https://www.jetbrains.com/help/pycharm/
