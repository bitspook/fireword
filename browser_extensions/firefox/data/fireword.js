var Fireword = function(password) {
    var calcHash = function(input) {
        try {
            var hashObj = new jsSHA(input, "TEXT");
            var output = get_mingledword(hashObj.getHash("SHA-512", "HEX", 1));
            return output;
        } catch (error) {
            console.log(error);
            return error;
        }
    };
    var get_mingledword = function(password) {
        var specials = {
            a: ['@', '4', 'A'],
            b: ['[', '7', 'B'],
            c: ['(', '6', 'C', '{', '[', '<'],
            d: [']', '2', 'D'],
            e: ['{', '3', 'E'],
            f: ['>', '1', 'F'],
            h: ['#', '5', 'H'],
            i: ['!', '1', 'I'],
            o: ['(', '0', 'O'],
            s: ['$', '8', 'S'],
            v: ['^', '9', 'V'],
            '1': ['|', 'T', '1'],
            '0': ['+', 'O', '0'],
            '2': ['?', 'M', '2'],
            '3': ['%', 'Y', '3'],
            '4': ['~', 'X', '4'],
            '5': ['&', 'Z', '5'],
            '6': ['(', 'Q', '6'],
            '7': [':', 'W', '7'],
            '8': ['*', 'L', '8'],
            '9': ['<', 'N', '9']
        };

        var attempted = {};
        var special_chars = (function() {
            var keys;

            keys = [];
            for (var key in specials) {
                keys.push(key);
            }
            return keys;
        })();

        for (var i = 0, len = password.length; i < len; i++) {
            attempted[password[i]] = 0;
        }

        var mingled_char_with_count = function(c, specials_dict, count) {
            if (c in specials_dict) {
                if (count <= specials_dict[c].length) {
                    return [specials_dict[c][count - 1], count];
                } else {
                    return [specials_dict[c][0], 0];
                }
            }
            return [c, count];
        };

        var mingleword = '';
        for (var j = 0, len1 = password.length; j < len1; j++) {
            var c = password[j];
            var mingle = Boolean(attempted[c]);
            if (mingle) {
                var temp = mingled_char_with_count(c, specials, attempted[c]);
                mingleword += temp[0];
                attempted[c] = temp[1];
            } else {
                mingleword += c;
            }
            attempted[c] += 1;
        }
        // return statement was a list comprehension in coffeescript
        return ((function() {
            var k, len2, results;

            results = [];
            for (k = 0, len2 = mingleword.length; k < len2; k++) {
                i = mingleword[k];
                results.push(mingleword.indexOf(i) % 2 ? i.toUpperCase() : i);
            }
            return results;
        })()).join('');
    };

    this.fireword = calcHash(password);
    this.toString = function() {
        return this.fireword;
    };
};
