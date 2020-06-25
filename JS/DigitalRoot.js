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