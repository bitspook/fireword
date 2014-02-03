#!/usr/bin/env python

from hashlib import sha1

class Fireword(object):
    """Represents a fireword i.e a sha1 hashed password"""

    def __init__(self, password):
        self.password = password
        self.fireword = self._get_mingleword(str(sha1(self.password).hexdigest()))

    def _get_mingleword(self, password):
        """Replaces special chars at even places with symbols/numerals in given password."""
        specials_at_even = {
            'a': '@',
            'b': '[',
            'e': '3',
            'i': '!',
            'o': '0',
            's': '$',
            '4': 'A',
            '3': 'E',
            '1': 'I',
            '0': 'O',
        }
        specials_at_odd = {
            'c': '{',
            'd': ']',
            'f': '>',
            'h': '#',
            'v': '^',
            '2': '?',
            '5': '&',
            '6': '(',
            '7': '}',
            '8': '*',
            '9': '<',
        }
        mingleword = ''
        for index, c in enumerate(password):
            if index % 2 == 0:
                if c in specials_at_even.keys():
                    mingleword += specials_at_even[c]
                else:
                    mingleword += c
            else:
                if c in specials_at_odd.keys():
                    mingleword += specials_at_odd[c]
                else:
                    mingleword += c
        return mingleword

if __name__ == "__main__":
    import sys
    if len(sys.argv) < 2:
        print "Error: No password given"
        print "Usage: fireword <password>"
    else:
        password = sys.argv[1]
        print Fireword(password).fireword
