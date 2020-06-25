// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the
// digits of n. If that value has more than one digit, continue reducing in this way until a single-digit
// number is produced. This is only applicable to the natural numbers.

function digital_root(value) {
    if (value > 9) {
        value = value.toString();
        var result = 0;
        for (var i = 0; i < value.length; i++) {
            result += parseInt(value[i]);
        }
        return digital_root(result);
    } else
        return value;
}