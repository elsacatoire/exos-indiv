"""
Exercise 7 : le Jeu des allumettes
Elsa Catoire - 24.03.2023
"""

# Press Maj+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.
candy_box = 20


def remove_candies(candy_nb):
    """
    removes the given number of candies from the total amount
    :param candy_nb: candies' quantity that the player chooses to remove
    :return: quantity of candies left
    """
    global candy_box
    candy_box = candy_box - candy_nb
    return candy_box


def ask_quantity(x):
    """
    ask one player a quantity to remove from the box
    quantity has to be between 1 and 6


    :return:
    """
    player_quantity = int(input(f"Hi Player {x}! How many candy do you take ?"))
    while player_quantity > 6:
        print("number has to be between 1 and 6")
        player_quantity = int(input("Hi ! How many candy do you take ?"))
    print(f"Player {1} got {player_quantity} candies")
    return int(player_quantity)


def did_win(candies_left):
    """
    check if the payer didWin thanks to his last move
    :param candies_left:
    :return:
    """
    if candies_left == 0:
        return True
    else:
        return False


def player(x):
    """
    execute the player x gameplay
    :param x: player number
    :return:
    """
    given_quantity = ask_quantity(x)
    remove_candies(given_quantity)
    #did_win(candy_box)


def game_play():
    """
    plays the game calling all the different functions
    :return:
    """
    global candy_box
    print("let's play!")
    print(f"there is {candy_box} in the candy box")
    player(1)
    print(f"there is {candy_box} left in the candy box")
    player(2)
    print(f"there is {candy_box} left in the candy box")
    while not did_win(candy_box):
        player(1)
        print(f"there is {candy_box} left in the candy box")
        if did_win(candy_box):
            print("player 1 won the game !")
            break
        player(2) #il faut modifier pr éviter d'appeler did win trop
        print(f"there is {candy_box} left in the candy box")
        if did_win(candy_box):
            print("player 2 won!")
            break





# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    #given_quantity = ask_quantity()
    game_play()




# See PyCharm help at https://www.jetbrains.com/help/pycharm/
