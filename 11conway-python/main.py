"""
Exercise 11 : Conway
Elsa Catoire - 20.04.2023
"""


def cut_string(string_to_cut):
    """
    take a word or a string and separates the characters if they are not alike
    :param string_to_cut: a string
    :return: separate chars
    """
    space = " "
    new_string = ""
    for i in range(len(string_to_cut) - 1):
        char = string_to_cut[i]
        if string_to_cut[i] != string_to_cut[i+1]:
            new_string = new_string + char + space
        else:
            new_string = new_string + char
    new_string = new_string + string_to_cut[-1]
    print(new_string)


if __name__ == '__main__':
    cut_string("coolleraghjjto")
# See PyCharm help at https://www.jetbrains.com/help/pycharm/
