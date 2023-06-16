from main import MatchBox
from main import Player
from main import Game
import unittest


class TestMain(unittest.TestCase):
    def test_remove(self):
        match_box = MatchBox(50)

        result = match_box.remove_matches(5)
        self.assertEqual(result, 55)

    def test_win(self):
        match_box = MatchBox(0)

        result = match_box.did_win_the_game()
        self.assertEqual(result, True)
