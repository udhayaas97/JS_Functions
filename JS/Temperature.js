// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]

function Temperature(value, unit = "c") {
    var result = 0;
    if (unit == "f")
        result = (value - 32) * 5 / 9;
    else if (unit == "c")
        result = (value * 9 / 5) + 32;
    return result;
}