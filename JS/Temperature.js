function Temperature(value, unit = "c") {
    var result = 0;
    if (unit == "f")
        result = (value - 32) * 5 / 9;
    else if (unit == "c")
        result = (value * 9 / 5) + 32;
    return result;
}