#!/usr/bin/env python

from hashlib import sha512 as hash_func
from collections import defaultdict

class Fireword(object):
    """Represents a fireword i.e a hash_func hashed password"""

    def __init__(self, password, length=40):
        self.fireword = self._get_mingleword(str(hash_func(password).hexdigest()))[:length]

    def _get_mingleword(self, password):

        specials = {
            'a': ['@','4','A'],
            'b': ['[','7','B'],
            'c': ['(','6','C', '{','[','<'],
            'd': [']','2','D'],
            'e': ['{','3','E'],
            'f': ['>','1','F'],
            'h': ['#','5','H'],
            'i': ['!','1','I'],
            'o': ['(','0','O'],
            's': ['$','8','S'],
            'v': ['^','9','V'],
            '1': ['|','T','1'],
            '0': ['+','O','0'],
            '2': ['?','M','2'],
            '3': ['%','Y','3'],
            '4': ['~','X','4'],
            '5': ['&','Z','5'],
            '6': ['(','Q','6'],
            '7': [':','W','7'],
            '8': ['*','L','8'],
            '9': ['<','N','9'],
        }

        def mingled_char_with_count(char, specials_dict, count):
            if char in specials_dict:
                if count <= len(specials_dict[char]) :
                    return specials_dict[char][count-1], count
                else:
                    return specials_dict[char][0], 0
            return char, count

        mingleword = ''
        attempted = defaultdict(int)
        for c in password:
            if c in attempted:
                attempted[c] += 1
            mingle = attempted[c]
            if mingle:
                mingled_c, count = mingled_char_with_count(c, specials, attempted[c])
                mingleword += mingled_c
                attempted[c] = count
            else:
                mingleword += c
        return ''.join([c.upper() if i % 2 else c for i,c in enumerate(mingleword)]) #increase the number of uppercase

if __name__ == "__main__":
    import sys
    if len(sys.argv) < 2:
        print "Error: No password given"
        print "Usage: fireword <password> <length>"
    else:
        password = sys.argv[1]
        length = 40
        if len(sys.argv) > 2:
            length = int(sys.argv[2])
        print Fireword(password, length).fireword
